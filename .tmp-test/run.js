const {carikanTierGpu} = require('./gpufn.js');
const db = require('../tiers.json');
const tests = [
  // [input, expected tier or null, note]
  ['Adreno 730', 4, 'exact-ish'],
  ['adreno730', 4, 'lowercase no space'],
  ['Adreno 750', 5, ''],
  ['Adreno 610', 3, ''],
  ['Adreno 619', 3, ''],
  ['adreno', null, 'generic family - should NOT match Adreno104'],
  ['adreno 7', null, 'partial family+number'],
  ['Mali-G71', null, 'BUG: used to match MaliG71'],
  ['Mali-G710', 3, ''],
  ['mali g710', 3, ''],
  ['PowerVR Rogue GE8300', 3, ''],
  ['Apple A16', null, 'not in db'],
  ['nonsense xyz', null, 'garbage'],
  ['V3D4.2', 3, ''],
  ['Xclipse 950', 3, ''],
  ['Samsung Xclipse 920', 3, ''],
];
let pass=0, fail=0;
for (const [input, expected, note] of tests) {
  const key = input.replace(/-/g,'').replace(/\s+/g,'').toLowerCase();
  const r = carikanTierGpu(key, db);
  const got = r ? r.tier : null;
  const ok = got === expected;
  ok ? pass++ : fail++;
  console.log(`${ok?'PASS':'FAIL'}  "${input}" -> ${got===null?'null':`tier ${got} (${r.nama})`}  [harap: ${expected===null?'null':`tier ${expected}`}] ${note}`);
}
console.log(`\n${pass} pass, ${fail} fail`);
