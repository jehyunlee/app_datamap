import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

test('local scripts exist, load in order, and stay relative for the /datamap/ subpath', () => {
  const srcs = [...html.matchAll(/<script src="([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(srcs, ['js/vendor/d3.min.js', 'js/data.js', 'js/app.js']);
  for (const src of srcs) assert.ok(fs.existsSync(path.join(root, src)), src);
  assert.equal(/(?:src|href)="\//.test(html), false, 'no root-absolute paths');
});

test('no claude.ai frame runtime and no network calls are left in the page', () => {
  const app = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
  for (const text of [html, app]) {
    assert.equal(/__FRAME|frame-runtime|claudeusercontent/.test(text), false);
    assert.equal(/\bfetch\(|XMLHttpRequest|window\.claude/.test(text), false);
  }
});

test('data and app scripts parse, and every element the app looks up is in the page', () => {
  const data = fs.readFileSync(path.join(root, 'js/data.js'), 'utf8');
  const app = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
  new vm.Script(data);
  new vm.Script(app);
  const pack = vm.runInNewContext(`${data}; PACK`);
  assert.equal(pack.ring_len.length > 100, true);
  for (const [, id] of app.matchAll(/(?:\$|getElementById)\('([a-zA-Z0-9]+)'\)/g)) assert.ok(html.includes(`id="${id}"`), id);
  for (const metric of ['pop', 'area', 'gdp', 'trade', 'mil']) assert.ok(html.includes(`data-m="${metric}"`), metric);
});
