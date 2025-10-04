let result;
let check;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");
const elementD = document.getElementById("d");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener("click", verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener("click", send);



function verify() {
    console.log("a, b, c, d")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let c = parseInt(elementC.value);
    let d = parseInt(elementD.value);

    console.log(a, b, c, d)

    if (a < c && b < d) {
        result = "Да, прямоугольник может вместиться"
        check = true;
    }
    
    if (b < c && a < d) {
        result = "Да, прямоугольник может вместиться"
        check = true;
    }
    else {
        result = "Нет, прямоугольник не вместится"
        check = false;
    }
    
    document.getElementById("result").value = result;
}



function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    }
    else {
        alert("Есть недостатки, повторите ввод")
    }
}
