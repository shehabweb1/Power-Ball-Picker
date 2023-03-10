const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');

function randomNumber() {
    const show1 = Math.floor((Math.random() * 70) + 1);
    num1.innerHTML = show1;
    const show2 = Math.floor((Math.random() * 70) + 1);
    num2.innerHTML = show2;
    const show3 = Math.floor((Math.random() * 70) + 1);
    num3.innerHTML = show3;
    const show4 = Math.floor((Math.random() * 70) + 1);
    num4.innerHTML = show4;
    const show5 = Math.floor((Math.random() * 70) + 1);
    num5.innerHTML = show5;
    const show6 = Math.floor((Math.random() * 25) + 1);
    num6.innerHTML = show6;
}

function resetNum() {
    num1.innerHTML = 70;
    num2.innerHTML = 70;
    num3.innerHTML = 70;
    num4.innerHTML = 70;
    num5.innerHTML = 70;
    num6.innerHTML = 25;
    document.getElementById("inputNum1").value = "";
    document.getElementById("inputNum2").value = "";
    document.getElementById("inputNum3").value = "";
}
