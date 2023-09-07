const translate = {};
const retrans = {}
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
for (let i = 0; i < lowercaseLetters.length; i++) {
  translate[lowercaseLetters[i]] = i + 1;
}
let inp = document.getElementById('int');
let key = document.getElementById('key');
let ind = document.getElementById('ind');

const trans = () => {
let keyy = [0]
let ke = key.value.
toLowerCase().split(/[^a-z]+/).join("").split("").map((x) => translate[x])
if (ke.length > 0){
    keyy = ke
}
let calChar = document.getElementById('calChar');
let num = document.getElementById('num');
let DWI = document.getElementById('DWI');
let final = document.getElementById('final');
let calCharr = inp.value.toLowerCase().split(/[^a-z]+/).join('').split('');
calChar.innerHTML = calCharr.join('');
let numm = calCharr.map((x) => translate[x]);
let nummbyind = numm.map((x) => x * Math.max(ind.value % 26, 1));
let indbykey = nummbyind.map((x, i) => {
    return (x + keyy[i%keyy.length]*keyy[(i*ind.value) % keyy.length])%26;
});
let finalVal = []
let i = 0
do{
    finalVal.push((indbykey[i%indbykey.length]%6 >= 1) ? indbykey[i%indbykey.length]%6 : 6)
    i++
} while(i <= Math.trunc(indbykey.length/5+1)*5 - 1);
num.innerHTML = indbykey.join(' ')
let DiWa = finalVal.join('').match(/\d{5}/g)
DWI.innerHTML = DiWa.join(' ');
fetch('./eff_large_wordlist.txt')
.then(res => res.text()).then(data => {
    const lines = data.split("\n");
    const wordlistObj = {};
    const pass = []
    lines.forEach(line => {
      if (!line.startsWith("#")) {
        const [number, word] = line.trim().split(/\s+/);
        wordlistObj[number] = word;
      }
    })
    for (let i = 0; i < DiWa.length; i++) {
        pass.push(wordlistObj[DiWa[i]]);
    }
    final.innerHTML = pass.join('  ');
})

}

