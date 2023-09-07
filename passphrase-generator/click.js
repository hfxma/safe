let calChar = document.getElementById('calChar');
let num = document.getElementById('num');
let DWI = document.getElementById('DWI');
let final = document.getElementById('final');
let btn1 = document.getElementById('calCharBtn');
let btn2 = document.getElementById('numBtn');
let btn3 = document.getElementById('DWIBtn');
let btn4 = document.getElementById('finalBtn');

const show = (el) => {
    el.style.color = '#f5f5ff'
}
const hide = (el) => {
    el.style.color = '#121212'
}
btn1.addEventListener('mousedown', () => {
    calChar.style.color = '#f5f5ff'
});
btn1.addEventListener('mouseup', () => {
    calChar.style.color = '#121212'
});
btn2.addEventListener('mousedown', () => {
    num.style.color = '#f5f5ff'
});
btn2.addEventListener('mouseup', () => {
    num.style.color = '#121212'
});
btn3.addEventListener('mousedown', () => {
    DWI.style.color = '#f5f5ff'
});
btn3.addEventListener('mouseup', () => {
    DWI.style.color = '#121212'
});
btn4.addEventListener('mousedown', () => {
    final.style.color = '#f5f5ff'
});
btn4.addEventListener('mouseup', () => {
    final.style.color = '#121212'
});