const INFO = [["인도","아시아","Asia","as0"],["중국","아시아","Asia","as1"],["미국","북아메리카","North America","na0"],["인도네시아","아시아","Asia","as0"],["파키스탄","아시아","Asia","as2"],["나이지리아","아프리카","Africa","af0"],["브라질","남아메리카","South America","sa0"],["방글라데시","아시아","Asia","as1"],["러시아","유럽","Europe","eu0"],["멕시코","북아메리카","North America","na1"],["일본","아시아","Asia","as0"],["콩고민주공화국","아프리카","Africa","af0"],["필리핀","아시아","Asia","as0"],["에티오피아","아프리카","Africa","af0"],["이집트","아프리카","Africa","af0"],["베트남","아시아","Asia","as0"],["이란","아시아","Asia","as0"],["튀르키예","아시아","Asia","as1"],["독일","유럽","Europe","eu0"],["태국","아시아","Asia","as1"],["탄자니아","아프리카","Africa","af1"],["영국","유럽","Europe","eu0"],["프랑스","유럽","Europe","eu1"],["남아프리카공화국","아프리카","Africa","af0"],["이탈리아","유럽","Europe","eu0"],["케냐","아프리카","Africa","af2"],["콜롬비아","남아메리카","South America","sa1"],["수단","아프리카","Africa","af1"],["미얀마","아시아","Asia","as2"],["한국","아시아","Asia","as1"],["스페인","유럽","Europe","eu0"],["알제리","아프리카","Africa","af0"],["아르헨티나","남아메리카","South America","sa1"],["이라크","아시아","Asia","as2"],["우간다","아프리카","Africa","af3"],["아프가니스탄","아시아","Asia","as3"],["캐나다","북아메리카","North America","na1"],["우즈베키스탄","아시아","Asia","as0"],["앙골라","아프리카","Africa","af1"],["폴란드","유럽","Europe","eu1"],["모로코","아프리카","Africa","af1"],["사우디아라비아","아시아","Asia","as0"],["모잠비크","아프리카","Africa","af2"],["말레이시아","아시아","Asia","as2"],["가나","아프리카","Africa","af0"],["페루","남아메리카","South America","sa2"],["코트디부아르","아프리카","Africa","af1"],["예멘","아시아","Asia","as1"],["마다가스카르","아프리카","Africa","af0"],["네팔","아시아","Asia","as2"],["카메룬","아프리카","Africa","af2"],["우크라이나","유럽","Europe","eu2"],["베네수엘라","남아메리카","South America","sa2"],["오스트레일리아","오세아니아","Oceania","oc0"],["니제르","아프리카","Africa","af1"],["시리아","아시아","Asia","as0"],["북한","아시아","Asia","as0"],["부르키나파소","아프리카","Africa","af2"],["말리","아프리카","Africa","af3"],["대만","아시아","Asia","as0"],["잠비아","아프리카","Africa","af3"],["스리랑카","아시아","Asia","as1"],["말라위","아프리카","Africa","af0"],["카자흐스탄","아시아","Asia","as2"],["소말리아","아프리카","Africa","af1"],["칠레","남아메리카","South America","sa0"],["차드","아프리카","Africa","af3"],["세네갈","아프리카","Africa","af0"],["루마니아","유럽","Europe","eu0"],["에콰도르","남아메리카","South America","sa0"],["과테말라","북아메리카","North America","na0"],["네덜란드","유럽","Europe","eu1"],["캄보디아","아시아","Asia","as2"],["기니","아프리카","Africa","af2"],["짐바브웨","아프리카","Africa","af4"],["남수단","아프리카","Africa","af4"],["르완다","아프리카","Africa","af2"],["베냉","아프리카","Africa","af3"],["부룬디","아프리카","Africa","af3"],["튀니지","아프리카","Africa","af1"],["벨기에","유럽","Europe","eu2"],["요르단","아시아","Asia","as1"],["아이티","북아메리카","North America","na0"],["포르투갈","유럽","Europe","eu1"],["볼리비아","남아메리카","South America","sa3"],["아랍에미리트","아시아","Asia","as1"],["체코","유럽","Europe","eu2"],["도미니카공화국","북아메리카","North America","na1"],["타지키스탄","아시아","Asia","as4"],["스웨덴","유럽","Europe","eu0"],["그리스","유럽","Europe","eu1"],["이스라엘","아시아","Asia","as2"],["아제르바이잔","아시아","Asia","as2"],["파푸아뉴기니","오세아니아","Oceania","oc0"],["온두라스","북아메리카","North America","na1"],["헝가리","유럽","Europe","eu1"],["쿠바","북아메리카","North America","na0"],["시에라리온","아프리카","Africa","af0"],["오스트리아","유럽","Europe","eu3"],["스위스","유럽","Europe","eu2"],["벨라루스","유럽","Europe","eu3"],["토고","아프리카","Africa","af1"],["라오스","아시아","Asia","as3"],["리비아","아프리카","Africa","af2"],["홍콩","아시아","Asia","as0"],["키르기스스탄","아시아","Asia","as3"],["투르크메니스탄","아시아","Asia","as1"],["니카라과","북아메리카","North America","na0"],["세르비아","유럽","Europe","eu2"],["중앙아프리카","아프리카","Africa","af5"],["불가리아","유럽","Europe","eu3"],["싱가포르","아시아","Asia","as0"],["콩고","아프리카","Africa","af3"],["파라과이","남아메리카","South America","sa2"],["덴마크","유럽","Europe","eu1"],["엘살바도르","북아메리카","North America","na2"],["노르웨이","유럽","Europe","eu1"],["레바논","아시아","Asia","as1"],["핀란드","유럽","Europe","eu2"],["몽골","아시아","Asia","as0"],["팔레스타인","아시아","Asia","as0"],["아일랜드","유럽","Europe","eu1"],["오만","아시아","Asia","as2"],["슬로바키아","유럽","Europe","eu0"],["뉴질랜드","오세아니아","Oceania","oc0"],["라이베리아","아프리카","Africa","af3"],["코스타리카","북아메리카","North America","na1"],["쿠웨이트","아시아","Asia","as1"],["모리타니","아프리카","Africa","af2"],["조지아","아시아","Asia","as0"],["파나마","북아메리카","North America","na0"],["크로아티아","유럽","Europe","eu4"],["에리트레아","아프리카","Africa","af2"],["우루과이","남아메리카","South America","sa2"],["보스니아","유럽","Europe","eu0"],["카타르","아시아","Asia","as2"],["푸에르토리코","북아메리카","North America","na0"],["아르메니아","아시아","Asia","as3"],["나미비아","아프리카","Africa","af2"],["리투아니아","유럽","Europe","eu2"],["자메이카","북아메리카","North America","na0"],["몰도바","유럽","Europe","eu1"],["가봉","아프리카","Africa","af0"],["보츠와나","아프리카","Africa","af5"],["감비아","아프리카","Africa","af1"],["알바니아","유럽","Europe","eu2"],["슬로베니아","유럽","Europe","eu2"],["레소토","아프리카","Africa","af1"],["기니비사우","아프리카","Africa","af1"],["라트비아","유럽","Europe","eu1"],["북마케도니아","유럽","Europe","eu0"],["적도기니","아프리카","Africa","af1"],["바레인","아시아","Asia","as0"],["코소보","유럽","Europe","eu1"],["동티모르","아시아","Asia","as1"],["트리니다드 토바고","북아메리카","North America","na0"],["에스토니아","유럽","Europe","eu3"],["에스와티니","아프리카","Africa","af1"],["모리셔스","아프리카","Africa","af0"],["지부티","아프리카","Africa","af3"],["가이아나","남아메리카","South America","sa1"],["키프로스","아시아","Asia","as0"],["부탄","아시아","Asia","as2"],["피지","오세아니아","Oceania","oc0"],["코모로","아프리카","Africa","af0"],["솔로몬 제도","오세아니아","Oceania","oc1"],["그린란드","북아메리카","North America","na0"],["서사하라","아프리카","Africa","af4"],["룩셈부르크","유럽","Europe","eu3"],["몬테네그로","유럽","Europe","eu3"],["마카오","아시아","Asia","as0"],["몰타","유럽","Europe","eu0"],["수리남","남아메리카","South America","sa3"],["벨리즈","북아메리카","North America","na2"],["북키프로스","아시아","Asia","as2"],["아이슬란드","유럽","Europe","eu0"],["바하마","북아메리카","North America","na0"],["브루나이","아시아","Asia","as1"],["카보베르데","아프리카","Africa","af0"],["바누아투","오세아니아","Oceania","oc0"],["몰디브","아시아","Asia","as0"],["누벨칼레도니","오세아니아","Oceania","oc0"],["프랑스령 폴리네시아","오세아니아","Oceania","oc0"],["바베이도스","북아메리카","North America","na0"],["사모아","오세아니아","Oceania","oc0"],["상투메 프린시페","아프리카","Africa","af0"],["세인트루시아","북아메리카","North America","na0"],["퀴라소","북아메리카","North America","na0"],["괌","오세아니아","Oceania","oc0"],["키리바시","오세아니아","Oceania","oc0"],["세인트빈센트 그레나딘","북아메리카","North America","na0"],["안도라","유럽","Europe","eu2"],["세이셸","아프리카","Africa","af0"],["맨섬","유럽","Europe","eu1"],["그레나다","북아메리카","North America","na0"],["앤티가 바부다","북아메리카","North America","na0"],["통가","오세아니아","Oceania","oc0"],["저지섬","유럽","Europe","eu0"],["아루바","북아메리카","North America","na0"],["미국령 버진아일랜드","북아메리카","North America","na1"],["도미니카 연방","북아메리카","North America","na0"],["페로 제도","유럽","Europe","eu0"],["케이맨 제도","북아메리카","North America","na0"],["미크로네시아 연방","오세아니아","Oceania","oc0"],["포클랜드 제도","남아메리카","South America","sa0"],["세인트키츠 네비스","북아메리카","North America","na0"],["터크스 케이커스 제도","북아메리카","North America","na0"],["북마리아나 제도","오세아니아","Oceania","oc0"],["건지섬","유럽","Europe","eu0"],["리히텐슈타인","유럽","Europe","eu1"],["버뮤다","북아메리카","North America","na0"],["아메리칸사모아","오세아니아","Oceania","oc0"],["영국령 버진아일랜드","북아메리카","North America","na0"],["마셜 제도","오세아니아","Oceania","oc0"],["생마르탱","북아메리카","North America","na0"],["팔라우","오세아니아","Oceania","oc0"],["신트마르턴","북아메리카","North America","na1"],["산마리노","유럽","Europe","eu1"],["앵귈라","북아메리카","North America","na1"],["세인트헬레나","아프리카","Africa","af0"],["왈리스 푸투나","오세아니아","Oceania","oc0"],["니우에","오세아니아","Oceania","oc0"],["생피에르 미클롱","북아메리카","North America","na0"],["호주령 인도양 지역","아시아","Asia","as0"],["쿡 제도","오세아니아","Oceania","oc0"],["생바르텔레미","북아메리카","North America","na0"],["몬트세랫","북아메리카","North America","na1"],["나우루","오세아니아","Oceania","oc0"],["투발루","오세아니아","Oceania","oc0"],["노퍽섬","오세아니아","Oceania","oc0"],["모나코","유럽","Europe","eu2"],["핏케언 제도","오세아니아","Oceania","oc0"],["바티칸 시국","유럽","Europe","eu1"]];
const MILYR = [2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, null, 2024, 2025, 2025, 2025, 2025, 2025, 2025, null, 2025, null, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, null, 2025, 2025, 2025, 2025, null, 2025, 2025, null, null, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, null, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, null, 2025, 2025, 2025, 2025, 2025, null, 2023, null, 2025, null, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, null, 2025, 2025, 2025, 2025, 2025, null, 2025, 2025, 2025, null, 2025, null, 2025, 2025, 2022, null, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, 2025, null, 2025, 2025, null, 2025, null, null, null, null, 2025, 2025, null, 2025, null, 2025, null, null, null, 2024, 2025, null, null, null, null, null, null, null, null, null, null, null, null, null, 2025, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
const CID = {"Asia": "as", "Africa": "af", "Europe": "eu", "North America": "na", "South America": "sa", "Oceania": "oc"}, CONT_KO = {"Asia": "아시아", "Africa": "아프리카", "Europe": "유럽", "North America": "북아메리카", "South America": "남아메리카", "Oceania": "오세아니아"};
const WORLD_POP = 8232000000;
'use strict';
/* ---------------- data decode ---------------- */
const P = PACK, NG = INFO.length, METRICS = ['pop', 'area', 'gdp', 'trade', 'mil'];
const N = P.N, TAU = Math.PI * 2;
function cum(arr) { const o = new Float64Array(arr.length); let a = 0; for (let i = 0; i < arr.length; i++) { a += arr[i]; o[i] = a / P.Q; } return o; }
const COORD = {}, GRAT = {};
for (const m of METRICS) { COORD[m] = cum(P.coords[m]); GRAT[m] = cum(P.grat[m]); }
const NR = P.ring_len.length, ringStart = new Int32Array(NR + 1);
for (let r = 0; r < NR; r++) ringStart[r + 1] = ringStart[r] + P.ring_len[r];
const cbytes = Uint8Array.from(atob(P.coarse), c => c.charCodeAt(0));
const isCoarse = v => (cbytes[v >> 3] >> (7 - (v & 7))) & 1;
const ringIdx = [], ringIdxC = [];
for (let r = 0; r < NR; r++) {
  const a = [], c = [];
  for (let v = ringStart[r]; v < ringStart[r + 1]; v++) { a.push(v); if (isCoarse(v)) c.push(v); }
  ringIdx.push(a); ringIdxC.push(c.length >= 3 ? c : a);
}
const NP = P.poly_group.length, polyRings = Array.from({length: NP}, () => []);
for (let r = 0; r < NR; r++) polyRings[P.ring_poly[r]].push(r);
const groupPolys = Array.from({length: NG}, () => []);
for (let p = 0; p < NP; p++) groupPolys[P.poly_group[p]].push(p);
const gratStart = [0]; for (const l of P.grat_len) gratStart.push(gratStart[gratStart.length - 1] + l);
const [KX, BX, BY] = P.flat;

/* ---------------- Equal Earth inverse ---------------- */
const A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796, RAD = 180 / Math.PI, SQ3 = Math.sqrt(3);
function invEE(x, y, out, o) {
  let th = y / A1;
  for (let k = 0; k < 6; k++) {
    const t2 = th * th, t6 = t2 * t2 * t2;
    th -= (th * (A1 + A2 * t2 + t6 * (A3 + A4 * t2)) - y) / (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2));
  }
  const t2 = th * th, t6 = t2 * t2 * t2;
  out[o] = RAD * 3 * x * (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2)) / (2 * SQ3 * Math.cos(th));
  out[o + 1] = RAD * Math.asin(Math.max(-1, Math.min(1, 2 * Math.sin(th) / SQ3)));
}

/* ---------------- state ---------------- */
const stage = document.getElementById('stage'), cv = document.getElementById('cv'), ctx = cv.getContext('2d');
const tip = document.getElementById('tip');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let view = 'globe', metric = 'pop', colorMode = 'cont';
let W = 0, H = 0, dpr = 1;
const CUR = new Float64Array(2 * N), CURG = new Float64Array(GRAT.pop.length);
CUR.set(COORD.pop); CURG.set(GRAT.pop);
let gs = P.globe.pop[0], gd = P.globe.pop[1];
let morph = null, sel = null;
let colors = {}, hatch = null;

/* ---------------- formatting ---------------- */
const nf = n => Math.round(n).toLocaleString('ko-KR');
function fmtPeople(n) {
  const eok = Math.floor(n / 1e8), man = Math.round((n % 1e8) / 1e4);
  if (n >= 1e8) return eok + '억' + (man ? ' ' + nf(man) + '만' : '') + ' 명';
  if (n >= 1e4) return nf(n / 1e4) + '만 명';
  return nf(n) + ' 명';
}
function fmtMoney(v) {
  if (v >= 1e12) return (v / 1e12).toFixed(1).replace(/\.0$/, '') + '조 달러';
  if (v >= 1e8) return nf(v / 1e8) + '억 달러';
  if (v >= 1e4) return nf(v / 1e4) + '만 달러';
  return nf(v) + '달러';
}
const fmtArea = v => v >= 1e4 ? '약 ' + nf(v / 1e4) + '만 km²' : '약 ' + nf(v) + ' km²';
const FMT = {pop: fmtPeople, area: fmtArea, gdp: fmtMoney, trade: fmtMoney, mil: fmtMoney};
const TOTAL = {};
for (const m of METRICS) { let s = 0; for (let g = 0; g < NG; g++) if (P.stat[m][g] === 'ok' && P.vals[m][g]) s += P.vals[m][g]; TOTAL[m] = s; }
TOTAL.pop = WORLD_POP;

const META = {
  pop: {title: '인구로 다시 그린 세계', sub: () => `나라마다 넓이가 인구에 비례합니다. 세계 인구 ${(WORLD_POP / 1e8).toFixed(1)}억 명.`,
    src: '인구: Wikipedia, List of countries and dependencies by population (2026년 10월 열람)',
    units: [[1e9, '10억 명'], [1e8, '1억 명'], [1e7, '1천만 명'], [1e6, '100만 명'], [1e5, '10만 명'], [1e4, '1만 명']]},
  area: {title: '실제 넓이 그대로의 세계', sub: () => `변형하지 않은 면적 지도입니다. 넓이를 보존하는 Equal Earth 도법을 썼고, 남극을 뺀 육지는 약 ${Math.floor(TOTAL.area / 1e8)}억 ${nf(Math.round((TOTAL.area % 1e8) / 1e6) * 100)}만 km²입니다.`,
    src: '면적: Natural Earth 1:50m 경계로 계산한 근삿값',
    units: [[1e7, '1천만 km²'], [1e6, '100만 km²'], [1e5, '10만 km²'], [1e4, '1만 km²'], [1e3, '1천 km²'], [1e2, '100 km²']]},
  gdp: {title: '경제 규모로 다시 그린 세계', sub: () => `나라마다 넓이가 명목 GDP(달러)에 비례합니다. 세계 합계 약 ${Math.round(TOTAL.gdp / 1e12)}조 달러.`,
    src: 'GDP: Wikipedia, List of countries by GDP (nominal). IMF 2026년 추정치, 없으면 세계은행 2025년, UN 2024년 값'},
  trade: {title: '무역 규모로 다시 그린 세계', sub: () => `나라마다 넓이가 상품·서비스 수출과 수입을 더한 금액에 비례합니다. 합계 약 ${Math.round(TOTAL.trade / 1e12)}조 달러.`,
    src: '무역: Wikipedia, List of countries by exports / imports. 세계은행 상품·서비스 수출입(대부분 2024년)'},
  mil: {title: '국방비로 다시 그린 세계', sub: () => `나라마다 넓이가 국방비(군사비 지출)에 비례합니다. 세계 합계 약 ${(TOTAL.mil / 1e12).toFixed(1)}조 달러.`,
    src: '국방비: SIPRI Military Expenditure Database 2026년판, 2025년 값(현재 달러). 없으면 2022~2024년 최신값'},
};
const MONEY_UNITS = [[1e13, '10조 달러'], [1e12, '1조 달러'], [1e11, '1천억 달러'], [1e10, '100억 달러'], [1e9, '10억 달러'], [1e8, '1억 달러'], [1e7, '1천만 달러']];
for (const m of ['gdp', 'trade', 'mil']) META[m].units = MONEY_UNITS;
const PC_BREAKS = [1000, 3000, 10000, 30000, 60000];
const PC_LABELS = ['1천 달러 미만', '1천~3천 달러', '3천~1만 달러', '1만~3만 달러', '3만~6만 달러', '6만 달러 이상'];
const pcClass = v => v == null ? -1 : PC_BREAKS.filter(b => v >= b).length;

/* ---------------- colours ---------------- */
function readColors() {
  const cs = getComputedStyle(document.documentElement), g = n => cs.getPropertyValue(n).trim();
  colors = {sea: g('--sea'), hi: g('--sea-hi'), lo: g('--sea-lo'), grat: g('--grat'), eq: g('--eq'), edge: g('--edge'),
    ink: g('--ink'), sel: g('--hi'), glow: g('--glow'), shade: g('--shade'), spec: g('--spec'),
    cont: INFO.map(r => g('--' + r[3])), pc: [0, 1, 2, 3, 4, 5].map(i => g('--pc' + i)), ndBg: g('--nd-bg'), ndLine: g('--nd-line')};
  const c = document.createElement('canvas'); c.width = c.height = 8;
  const x = c.getContext('2d'); x.fillStyle = colors.ndBg; x.fillRect(0, 0, 8, 8);
  x.strokeStyle = colors.ndLine; x.lineWidth = 1.4; x.beginPath();
  x.moveTo(-2, 10); x.lineTo(10, -2); x.moveTo(-2, 2); x.lineTo(2, -2); x.moveTo(6, 10); x.lineTo(10, 6); x.stroke();
  hatch = ctx.createPattern(c, 'repeat');
}
function fillFor(g) {
  if (P.stat[metric][g] === 'nodata') return hatch;
  if (colorMode === 'percap') { const k = pcClass(P.percap[g]); return k < 0 ? hatch : colors.pc[k]; }
  return colors.cont[g];
}

/* ---------------- geometry caches ---------------- */
let LL = new Float64Array(2 * N), LLG = new Float64Array(CURG.length);
let featFine = [], featCoarse = [], gBounds = [], flatBox = [], thin = new Uint8Array(NP), gratLines = null;
const coarseVerts = Int32Array.from(new Set(ringIdxC.flat()));
function computeLL(coarseOnly) {
  if (coarseOnly) for (const v of coarseVerts) invEE(gs * CUR[2 * v], gs * CUR[2 * v + 1] + gd, LL, 2 * v);
  else for (let v = 0; v < N; v++) invEE(gs * CUR[2 * v], gs * CUR[2 * v + 1] + gd, LL, 2 * v);
  for (let v = 0; v < CURG.length / 2; v++) invEE(gs * CURG[2 * v], gs * CURG[2 * v + 1] + gd, LLG, 2 * v);
}
function ringLL(idx) {
  // follow the plane edge on the sphere: long edges (e.g. along a parallel near the pole) get extra points
  const a = [], n = idx.length;
  for (let i = 0; i < n; i++) {
    const v = idx[i], w = idx[(i + 1) % n];
    a.push([LL[2 * v], LL[2 * v + 1]]);
    const d = Math.max(Math.abs(LL[2 * w] - LL[2 * v]), Math.abs(LL[2 * w + 1] - LL[2 * v + 1]));
    if (d > 1.5) {
      const k = Math.ceil(d / 1.5), x0 = CUR[2 * v], y0 = CUR[2 * v + 1], dx = CUR[2 * w] - x0, dy = CUR[2 * w + 1] - y0;
      for (let j = 1; j < k; j++) { const o = [0, 0]; invEE(gs * (x0 + dx * j / k), gs * (y0 + dy * j / k) + gd, o, 0); a.push(o); }
    }
  }
  a.push(a[0]); return a;
}
function planeArea(idx) {
  let a = 0;
  for (let i = 0, j = idx.length - 1; i < idx.length; j = i++) a += CUR[2 * idx[j]] * CUR[2 * idx[i] + 1] - CUR[2 * idx[i]] * CUR[2 * idx[j] + 1];
  return a / 2;
}
function buildFeatures(coarse) {
  const src = coarse ? ringIdxC : ringIdx;
  return groupPolys.map(ps => {
    const coords = [];
    for (const p of ps) {
      const rings = [];
      polyRings[p].forEach((r, k) => {
        const a = planeArea(src[r]);
        if (Math.abs(a) < (coarse ? 1e-6 : 1e-10)) return;     // too small to see at this detail level (avoids d3 precision flips)
        const ll = ringLL(src[r]);
        // exterior must run clockwise, holes counter-clockwise (plane y-up), as d3-geo expects
        if ((k === 0 && a > 0) || (k > 0 && a < 0)) ll.reverse();
        if (k === 0 || rings.length) rings.push(ll);
      });
      if (rings.length) coords.push(rings);
    }
    return {type: 'MultiPolygon', coordinates: coords};
  });
}
function buildGrat() {
  const other = [], eq = [];
  P.grat_kind.forEach((k, i) => {
    if (k === 2) return;
    const line = []; for (let v = gratStart[i]; v < gratStart[i + 1]; v++) line.push([LLG[2 * v], LLG[2 * v + 1]]);
    (k === 1 ? eq : other).push(line);
  });
  gratLines = [{type: 'MultiLineString', coordinates: other}, {type: 'MultiLineString', coordinates: eq}];
}
function settleGeometry() {
  computeLL();
  featFine = buildFeatures(false); featCoarse = buildFeatures(true);
  const fix = f => { f.coordinates = f.coordinates.map(rs => d3.geoArea({type: 'Polygon', coordinates: rs}) > TAU ? rs.map(r => r.slice().reverse()) : rs)
    .filter(rs => d3.geoArea({type: 'Polygon', coordinates: rs}) < TAU); };
  featFine.forEach(fix); featCoarse.forEach(fix);
  gBounds = featFine.map(f => d3.geoBounds(f));
  buildGrat();
  // flat bboxes + thin polygons (plane units)
  flatBox = groupPolys.map(ps => {
    let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    for (const p of ps) for (const r of polyRings[p]) for (const v of ringIdx[r]) {
      const x = CUR[2 * v], y = CUR[2 * v + 1]; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
    }
    return [x0, y0, x1, y1];
  });
  for (let p = 0; p < NP; p++) {
    const idx = ringIdx[polyRings[p][0]]; let a = 0, per = 0;
    for (let i = 0; i < idx.length; i++) {
      const j = idx[i], k = idx[(i + 1) % idx.length];
      a += CUR[2 * j] * CUR[2 * k + 1] - CUR[2 * k] * CUR[2 * j + 1];
      per += Math.hypot(CUR[2 * k] - CUR[2 * j], CUR[2 * k + 1] - CUR[2 * j + 1]);
    }
    thin[p] = Math.abs(a) / Math.max(per, 1e-9) < 0.9 / KX ? 1 : 0;
  }
}

/* ---------------- views: shared bits ---------------- */
const proj = d3.geoOrthographic().clipAngle(90).precision(0);
const gpath = d3.geoPath(proj, ctx);
const HOME = [-48, -24];
let rot = HOME.slice(), gzoom = 1, R0 = 0;            // globe
let fz = 1, ftx = 0, fty = 0;                           // flat (stage units 1600x900)
let moving = false, spin = !reduce, vel = [0, 0], anim = null, raf = 0, idleT = 0, lastT = 0;

function resize() {
  W = stage.clientWidth; H = stage.clientHeight; dpr = Math.min(window.devicePixelRatio || 1, 2.5);
  cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); R0 = H * 0.41; draw();
}
function frameProj() { proj.rotate([rot[0], rot[1], 0]).scale(R0 * gzoom).translate([W * 0.57, H * 0.5]); }
const U = () => W / 1600;                                 // css px per stage unit
const flatX = x => ((KX * x + BX) * fz + ftx) * U();
const flatY = y => ((-KX * y + BY) * fz + fty) * U();

function labelFont(w, px) { return `${w} ${px}px "IBM Plex Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif`; }
function drawLabel(name, sub, x, y, px, alpha) {
  ctx.globalAlpha = alpha;
  if (sub) {
    ctx.font = labelFont(600, px); ctx.fillText(name, x, y - px * 0.45);
    ctx.globalAlpha = alpha * 0.8; ctx.font = labelFont(400, px * 0.72); ctx.fillText(sub, x, y + px * 0.52);
  } else { ctx.font = labelFont(600, px); ctx.fillText(name, x, y); }
  ctx.globalAlpha = 1;
}

function draw() {
  if (!W) return;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
  if (view === 'globe') drawGlobe(); else drawFlat();
  updateScale();
}

/* ---------------- flat ---------------- */
function tracePoly(p, src) {
  for (const r of polyRings[p]) {
    const idx = src[r];
    ctx.moveTo(flatX(CUR[2 * idx[0]]), flatY(CUR[2 * idx[0] + 1]));
    for (let i = 1; i < idx.length; i++) ctx.lineTo(flatX(CUR[2 * idx[i]]), flatY(CUR[2 * idx[i] + 1]));
    ctx.closePath();
  }
}
function drawFlat() {
  // ocean (warped world outline)
  const fi = P.grat_kind.indexOf(2);
  ctx.beginPath();
  for (let v = gratStart[fi]; v < gratStart[fi + 1]; v++) ctx[v === gratStart[fi] ? 'moveTo' : 'lineTo'](flatX(CURG[2 * v]), flatY(CURG[2 * v + 1]));
  ctx.closePath(); ctx.fillStyle = colors.sea; ctx.fill();
  for (const eq of [0, 1]) {
    ctx.beginPath();
    P.grat_kind.forEach((k, i) => {
      if (k !== eq) return;
      for (let v = gratStart[i]; v < gratStart[i + 1]; v++) ctx[v === gratStart[i] ? 'moveTo' : 'lineTo'](flatX(CURG[2 * v]), flatY(CURG[2 * v + 1]));
    });
    ctx.lineWidth = eq ? 1.1 : 0.7; ctx.strokeStyle = eq ? colors.eq : colors.grat; ctx.setLineDash(eq ? [5, 4] : []); ctx.stroke();
  }
  ctx.setLineDash([]);
  const src = morph ? ringIdxC : ringIdx;
  for (let g = 0; g < NG; g++) {
    ctx.beginPath(); for (const p of groupPolys[g]) tracePoly(p, src);
    ctx.fillStyle = fillFor(g); ctx.fill('evenodd');
  }
  ctx.beginPath(); for (let p = 0; p < NP; p++) if (!thin[p] || morph) tracePoly(p, src);
  ctx.lineWidth = 0.6; ctx.lineJoin = 'round'; ctx.strokeStyle = colors.edge; ctx.stroke();
  if (sel != null && !morph) { ctx.beginPath(); for (const p of groupPolys[sel]) tracePoly(p, ringIdx); ctx.lineWidth = 1.8; ctx.strokeStyle = colors.sel; ctx.stroke(); }
  if (morph) return;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = colors.ink;
  for (const [g, x, y, f, two, sub] of P.labels[metric]) {
    const fs = f * KX, eff = Math.min(fs * fz, Math.max(fs, 26));
    if (eff < 7.5) continue;
    drawLabel(INFO[g][0], two ? sub : '', flatX(x), flatY(y), eff * U(), 1);
  }
}

/* ---------------- globe ---------------- */
function disc(r) { const [x, y] = proj.translate(); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); }
function drawGlobe() {
  frameProj();
  const [x, y] = proj.translate(), r = proj.scale();
  let g = ctx.createRadialGradient(x, y, r * 0.97, x, y, r * 1.13);
  g.addColorStop(0, colors.glow); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; disc(r * 1.13); ctx.fill();
  g = ctx.createRadialGradient(x - r * 0.38, y - r * 0.42, r * 0.05, x, y, r);
  g.addColorStop(0, colors.hi); g.addColorStop(0.55, colors.sea); g.addColorStop(1, colors.lo); ctx.fillStyle = g; disc(r); ctx.fill();
  ctx.lineWidth = 0.7; ctx.strokeStyle = colors.grat; ctx.beginPath(); gpath(gratLines[0]); ctx.stroke();
  ctx.lineWidth = 1.1; ctx.strokeStyle = colors.eq; ctx.setLineDash([5, 4]); ctx.beginPath(); gpath(gratLines[1]); ctx.stroke(); ctx.setLineDash([]);
  const F = (moving || morph) ? featCoarse : featFine;
  ctx.lineWidth = 0.6; ctx.strokeStyle = colors.edge; ctx.lineJoin = 'round';
  for (let i = 0; i < NG; i++) { ctx.beginPath(); gpath(F[i]); ctx.fillStyle = fillFor(i); ctx.fill(); ctx.stroke(); }
  g = ctx.createRadialGradient(x - r * 0.32, y - r * 0.36, r * 0.02, x, y, r * 1.02);
  g.addColorStop(0, colors.spec); g.addColorStop(0.45, 'rgba(0,0,0,0)'); g.addColorStop(1, colors.shade); ctx.fillStyle = g; disc(r); ctx.fill();
  if (sel != null && !morph) { ctx.beginPath(); gpath(featFine[sel]); ctx.lineWidth = 1.8; ctx.strokeStyle = colors.sel; ctx.stroke(); }
  if (morph) return;
  const center = [-rot[0], -rot[1]], tmp = [0, 0];
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = colors.ink;
  for (const [gi, lx, ly, f, two, sub] of P.labels[metric]) {
    invEE(gs * lx, gs * ly + gd, tmp, 0);
    const dist = d3.geoDistance(tmp, center); if (dist > 1.45) continue;
    const fr = f * gs * 0.9, size = Math.min(fr * r, Math.max(fr * R0, 26)) * Math.sqrt(Math.max(0.3, Math.cos(dist)));
    if (size < 7.5) continue;
    const p = proj(tmp); if (!p) continue;
    drawLabel(INFO[gi][0], two ? sub : '', p[0], p[1], size, Math.min(1, (1.45 - dist) / 0.3));
  }
}

/* ---------------- legend / text ---------------- */
const $ = id => document.getElementById(id);
const sqEl = $('sq'), sqn = $('sqn'), sqnote = $('sqnote');
function updateScale() {
  const units = META[metric].units, K = P.K[metric];
  const pxPerPlane = view === 'globe' ? gs * proj.scale() : KX * fz * U();
  const maxSide = W * 0.05;
  let pick = units[units.length - 1];
  for (const u of units) if (Math.sqrt(u[0] * K) * pxPerPlane <= maxSide) { pick = u; break; }
  const side = Math.sqrt(pick[0] * K) * pxPerPlane;
  sqEl.style.width = sqEl.style.height = side.toFixed(1) + 'px';
  sqn.textContent = pick[1]; sqnote.textContent = view === 'globe' ? ' (화면 가운데 기준)' : '';
}
function updateText() {
  const M = META[metric];
  $('title').textContent = M.title;
  $('sub').textContent = M.sub() + (colorMode === 'percap' ? ' 색은 1인당 GDP입니다.' : '');
  $('src1').textContent = M.src + (colorMode === 'percap' ? '. 1인당 GDP는 GDP ÷ 인구로 계산' : '');
  const ul = $('leg'); ul.innerHTML = '';
  if (colorMode === 'cont') {
    const tot = Object.values(P.cont_tot[metric]).reduce((a, b) => a + b, 0);
    Object.entries(P.cont_tot[metric]).sort((a, b) => b[1] - a[1]).forEach(([c, v]) => {
      ul.insertAdjacentHTML('beforeend', `<li><i style="background:var(--${CID[c]}0)"></i>${CONT_KO[c]} <b>${Math.round(v / tot * 100)}%</b></li>`);
    });
    ul.className = 'two';
  } else {
    PC_LABELS.forEach((t, i) => ul.insertAdjacentHTML('beforeend', `<li><i style="background:var(--pc${i})"></i>${t}</li>`));
    ul.className = 'two pc';
  }
  const hasND = P.stat[metric].some(s => s === 'nodata') || colorMode === 'percap';
  $('nd').hidden = !hasND;
  $('nd').innerHTML = `<i class="hatch"></i>자료 없음${metric !== 'pop' && metric !== 'area' ? ' (넓이는 실제 면적 비율로 둠)' : ''}`;
  document.querySelectorAll('button[data-m]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.m === metric)));
  document.querySelectorAll('button[data-c]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.c === colorMode)));
  document.querySelectorAll('button[data-v]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.v === view)));
}

/* ---------------- tooltip ---------------- */
function tipAt(g, cx, cy) {
  if (g == null) { tip.classList.remove('show'); return; }
  const [name, cont] = INFO[g], st = P.stat[metric][g], v = P.vals[metric][g];
  let h = `<b>${name}</b>`;
  if (st === 'ok' && v != null) {
    const share = v / TOTAL[metric] * 100;
    h += `<span class="n">${FMT[metric](v)}</span><br>세계의 ${share >= 0.1 ? share.toFixed(1) : share.toFixed(3)}%`;
    if (metric === 'mil' && MILYR[g] && MILYR[g] !== 2025) h += ` (${MILYR[g]}년 값)`;
  } else if (st === 'dep') h += '<span class="n">본국 국방비에 포함</span>';
  else if (st === 'noarmy') h += '<span class="n">상비군 없음</span>';
  else h += '<span class="n">자료 없음</span><br>넓이는 실제 면적 비율로 둠';
  if ((metric === 'gdp' || colorMode === 'percap') && P.percap[g]) h += `<br>1인당 GDP ${nf(P.percap[g])}달러`;
  if (metric !== 'pop') h += `<br>인구 ${fmtPeople(P.vals.pop[g])}`;
  h += `<br>${cont}`;
  tip.innerHTML = h;
  const r = stage.getBoundingClientRect(); tip.classList.add('show');
  const w = tip.offsetWidth, hh = tip.offsetHeight;
  let x = cx - r.left + 14, y = cy - r.top + 14;
  if (x + w > r.width - 6) x = cx - r.left - w - 14;
  if (y + hh > r.height - 6) y = cy - r.top - hh - 14;
  tip.style.left = Math.max(6, x) + 'px'; tip.style.top = Math.max(6, y) + 'px';
}
function select(g, cx, cy) { if (sel !== g) { sel = g; draw(); } tipAt(g, cx, cy); }

/* ---------------- picking ---------------- */
function pickFlat(cx, cy) {
  const b = cv.getBoundingClientRect();
  const X = ((cx - b.left) / U() - ftx) / fz, Y = ((cy - b.top) / U() - fty) / fz;
  const x = (X - BX) / KX, y = -(Y - BY) / KX;
  for (let g = 0; g < NG; g++) {
    const [x0, y0, x1, y1] = flatBox[g]; if (x < x0 || x > x1 || y < y0 || y > y1) continue;
    let inside = false;
    for (const p of groupPolys[g]) for (const r of polyRings[p]) {
      const idx = ringIdx[r];
      for (let i = 0, j = idx.length - 1; i < idx.length; j = i++) {
        const xi = CUR[2 * idx[i]], yi = CUR[2 * idx[i] + 1], xj = CUR[2 * idx[j]], yj = CUR[2 * idx[j] + 1];
        if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
      }
    }
    if (inside) return g;
  }
  return null;
}
function pickGlobe(cx, cy) {
  const b = cv.getBoundingClientRect(), p = [cx - b.left, cy - b.top], [x, y] = proj.translate();
  if (Math.hypot(p[0] - x, p[1] - y) > proj.scale()) return null;
  const ll = proj.invert(p); if (!ll) return null;
  for (let i = 0; i < NG; i++) {
    const [[a, s], [c, n]] = gBounds[i];
    if (ll[1] < s - 0.5 || ll[1] > n + 0.5) continue;
    if (a <= c ? (ll[0] < a - 0.5 || ll[0] > c + 0.5) : (ll[0] < a - 0.5 && ll[0] > c + 0.5)) continue;
    if (d3.geoContains(featFine[i], ll)) return i;
  }
  return null;
}
const pick = (cx, cy) => morph ? null : (view === 'globe' ? pickGlobe(cx, cy) : pickFlat(cx, cy));

/* ---------------- animation loop ---------------- */
function loop(t) {
  raf = 0; const dt = lastT ? Math.min(50, t - lastT) : 16; lastT = t;
  let busy = false;
  if (morph) {
    const k = Math.min(1, (t - morph.t0) / morph.dur), e = d3.easeCubicInOut(k);
    const A = COORD[morph.from], B = COORD[morph.to];
    for (let i = 0; i < CUR.length; i++) CUR[i] = A[i] + (B[i] - A[i]) * e;
    const GA = GRAT[morph.from], GB = GRAT[morph.to];
    for (let i = 0; i < CURG.length; i++) CURG[i] = GA[i] + (GB[i] - GA[i]) * e;
    gs = morph.s0 + (morph.s1 - morph.s0) * e; gd = morph.d0 + (morph.d1 - morph.d0) * e;
    if (view === 'globe') { computeLL(true); featCoarse = buildFeatures(true); for (const f of featCoarse) f.coordinates = f.coordinates.filter(rs => d3.geoArea({type: 'Polygon', coordinates: rs}) < TAU); buildGrat(); }
    if (k >= 1) { morph = null; settleGeometry(); } else busy = true;
  }
  if (view === 'globe') {
    if (anim) {
      const k = Math.min(1, (t - anim.t0) / anim.dur), e = d3.easeCubicInOut(k);
      rot = anim.ir(e); gzoom = anim.iz(e); if (k < 1) busy = true; else anim = null;
    } else if (Math.abs(vel[0]) + Math.abs(vel[1]) > 0.002) {
      rot[0] += vel[0] * dt; rot[1] = Math.max(-89, Math.min(89, rot[1] + vel[1] * dt));
      const dc = Math.pow(0.94, dt / 16); vel[0] *= dc; vel[1] *= dc; busy = true;
    } else if (spin) { rot[0] += 0.004 * dt; busy = true; }
  }
  moving = busy || dragging; draw();
  if (busy) request(); else { lastT = 0; settle(); }
}
function request() { if (!raf) raf = requestAnimationFrame(loop); }
function settle() { clearTimeout(idleT); idleT = setTimeout(() => { moving = false; draw(); }, 140); }
function stopAll() { spin = false; vel = [0, 0]; anim = null; }
function tween(toRot, toZoom, dur = 650) {
  if (reduce) { rot = toRot; gzoom = toZoom; moving = false; draw(); return; }
  let t0 = toRot[0]; while (t0 - rot[0] > 180) t0 -= 360; while (t0 - rot[0] < -180) t0 += 360;
  anim = {t0: performance.now(), dur, ir: d3.interpolate(rot.slice(), [t0, toRot[1]]), iz: d3.interpolate(gzoom, toZoom)};
  request();
}
function setMetric(m) {
  if (m === metric) return;
  select(null);
  let src = metric;
  if (morph) { COORD.__mid = Float64Array.from(CUR); GRAT.__mid = Float64Array.from(CURG); src = '__mid'; }
  metric = m; updateText();
  if (reduce) {
    CUR.set(COORD[m]); CURG.set(GRAT[m]); gs = P.globe[m][0]; gd = P.globe[m][1]; morph = null;
    settleGeometry(); draw(); return;
  }
  morph = {from: src, to: m, t0: performance.now(), dur: 1100, s0: gs, d0: gd, s1: P.globe[m][0], d1: P.globe[m][1]};
  request();
}

/* ---------------- flat zoom helpers ---------------- */
function fclamp() {
  fz = Math.min(10, Math.max(1, fz));
  ftx = Math.min(0, Math.max(1600 * (1 - fz), ftx)); fty = Math.min(0, Math.max(900 * (1 - fz), fty));
}
function fzoomAt(px, py, f) {
  const nz = Math.min(10, Math.max(1, fz * f));
  ftx = px - (px - ftx) * nz / fz; fty = py - (py - fty) * nz / fz; fz = nz; fclamp(); draw();
}
const toStage = (cx, cy) => { const b = cv.getBoundingClientRect(); return [(cx - b.left) / U(), (cy - b.top) / U()]; };

/* ---------------- pointer input (both views) ---------------- */
const ptrs = new Map(); let dragging = false, moved = 0, lastPinch = null, lastMove = 0, hoverRaf = 0;
cv.addEventListener('pointerdown', e => {
  cv.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, {x: e.clientX, y: e.clientY});
  stopAll(); dragging = true; moved = 0; lastPinch = null; lastMove = performance.now(); cv.classList.add('drag');
});
cv.addEventListener('pointermove', e => {
  if (!ptrs.has(e.pointerId)) {
    if (e.pointerType === 'mouse' && !hoverRaf) {
      const cx = e.clientX, cy = e.clientY;
      hoverRaf = requestAnimationFrame(() => { hoverRaf = 0; select(pick(cx, cy), cx, cy); });
    }
    return;
  }
  const prev = ptrs.get(e.pointerId); ptrs.set(e.pointerId, {x: e.clientX, y: e.clientY});
  moved += Math.hypot(e.clientX - prev.x, e.clientY - prev.y);
  const now = performance.now(), dt = Math.max(1, now - lastMove); lastMove = now;
  if (ptrs.size === 1) {
    if (view === 'globe') {
      const k = 180 / (Math.PI * proj.scale()), dx = (e.clientX - prev.x) * k, dy = -(e.clientY - prev.y) * k;
      rot[0] += dx; rot[1] = Math.max(-89, Math.min(89, rot[1] + dy)); vel = [dx / dt, dy / dt];
    } else { ftx += (e.clientX - prev.x) / U(); fty += (e.clientY - prev.y) / U(); fclamp(); }
  } else if (ptrs.size === 2) {
    const [p, q] = [...ptrs.values()], dist = Math.hypot(p.x - q.x, p.y - q.y), mid = toStage((p.x + q.x) / 2, (p.y + q.y) / 2);
    if (lastPinch) {
      if (view === 'globe') gzoom = Math.max(0.8, Math.min(14, gzoom * dist / lastPinch.dist));
      else { ftx += mid[0] - lastPinch.mid[0]; fty += mid[1] - lastPinch.mid[1]; fzoomAt(mid[0], mid[1], dist / lastPinch.dist); }
    }
    lastPinch = {dist, mid}; vel = [0, 0];
  }
  if (moved > 6) { sel = null; tipAt(null); }
  moving = true; draw();
});
function up(e) {
  if (!ptrs.has(e.pointerId)) return;
  ptrs.delete(e.pointerId); if (ptrs.size < 2) lastPinch = null;
  if (ptrs.size) return;
  dragging = false; cv.classList.remove('drag');
  if (moved < 8) { vel = [0, 0]; moving = false; select(pick(e.clientX, e.clientY), e.clientX, e.clientY); draw(); return; }
  if (reduce || performance.now() - lastMove > 80) vel = [0, 0];
  request(); settle();
}
cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
cv.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse' && !ptrs.size) select(null); });
cv.addEventListener('wheel', e => {
  e.preventDefault(); stopAll(); const f = Math.exp(-e.deltaY * 0.0016);
  if (view === 'globe') { gzoom = Math.max(0.8, Math.min(14, gzoom * f)); moving = true; draw(); settle(); }
  else { const [x, y] = toStage(e.clientX, e.clientY); fzoomAt(x, y, f); }
}, {passive: false});
cv.addEventListener('dblclick', e => {
  stopAll();
  if (view === 'globe') {
    const b = cv.getBoundingClientRect(), ll = proj.invert([e.clientX - b.left, e.clientY - b.top]);
    if (ll) tween([-ll[0], -ll[1]], Math.min(14, gzoom * 1.8));
  } else { const [x, y] = toStage(e.clientX, e.clientY); fzoomAt(x, y, 2); }
});
cv.addEventListener('keydown', e => {
  const step = {ArrowLeft: [-10, 0], ArrowRight: [10, 0], ArrowUp: [0, 10], ArrowDown: [0, -10]}[e.key];
  if (!step && e.key !== '+' && e.key !== '-') return;
  e.preventDefault(); stopAll();
  if (e.key === '+' || e.key === '-') { zoomBy(e.key === '+' ? 1.4 : 1 / 1.4); return; }
  if (view === 'globe') tween([rot[0] + step[0], Math.max(-89, Math.min(89, rot[1] + step[1]))], gzoom, 250);
  else { ftx -= step[0] * 4; fty += step[1] * 4; fclamp(); draw(); }
});
function zoomBy(f) {
  select(null);
  if (view === 'globe') tween(rot.slice(), Math.max(0.8, Math.min(14, gzoom * f)), 350); else fzoomAt(800, 480, f);
}

/* ---------------- controls ---------------- */
document.querySelectorAll('button[data-m]').forEach(b => b.addEventListener('click', () => setMetric(b.dataset.m)));
document.querySelectorAll('button[data-c]').forEach(b => b.addEventListener('click', () => { colorMode = b.dataset.c; updateText(); draw(); }));
document.querySelectorAll('button[data-v]').forEach(b => b.addEventListener('click', () => {
  if (view === b.dataset.v) return; select(null); view = b.dataset.v; stage.dataset.view = view;
  if (view === 'globe') settleGeometry();
  updateText(); draw(); if (view === 'globe' && spin) request();
}));
$('zoom').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return; const f = +b.dataset.z;
  if (f) zoomBy(f);
  else { select(null); if (view === 'globe') { stopAll(); tween(HOME.slice(), 1); } else { fz = 1; ftx = fty = 0; draw(); } }
});

/* ---------------- boot ---------------- */
readColors(); settleGeometry(); updateText();
new ResizeObserver(resize).observe(stage);
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { readColors(); draw(); });
new MutationObserver(() => { readColors(); draw(); }).observe(document.documentElement, {attributes: true, attributeFilter: ['data-theme']});
if (document.fonts) document.fonts.ready.then(draw);
resize(); if (spin) request();
window.__app = {setMetric, get metric() { return metric; }, featFine: () => featFine, P};
