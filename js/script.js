const myHeading  = document.querySelector("h1");
myHeading.textContent = "Hello World!";

// let myVariable = "Aidai";
// alert(myVariable);
// myVariable = "Aliman";
// alert(myVariable);

let myFirstArray = [15, 34, 'Aidai', 'Aliman', true, 43]

function multiply(num1, num2) {
    let res = num1 * num2;
    return res;
}
myHeading.addEventListener('click', sayHello)

function sayHello() {
    alert("Hello my dear!")
    console.log("It is consol.log");
    console.error("it is console error");
}

const imgElement = document.querySelector("img");

const img1URL = "img/alatoo.png";
const img2URL = "img/nature.jpeg";


function changeFoto(event) {
    let current = imgElement.getAttribute("src");
    if(current == img1URL) {
        imgElement.setAttribute("src", img2URL);
    }
    else {
        imgElement.setAttribute("src", img1URL);
    }
}
imgElement.onclick = changeFoto;
