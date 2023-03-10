const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');

function randomNumber() {
    const show1 = Math.floor((Math.random() * 69) + 1);
    num1.innerHTML = show1;
    const show2 = Math.floor((Math.random() * 69) + 1);
    num2.innerHTML = show2;
    const show3 = Math.floor((Math.random() * 69) + 1);
    num3.innerHTML = show3;
    const show4 = Math.floor((Math.random() * 69) + 1);
    num4.innerHTML = show4;
    const show5 = Math.floor((Math.random() * 69) + 1);
    num5.innerHTML = show5;
}