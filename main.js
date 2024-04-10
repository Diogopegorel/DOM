const button1 = document.querySelector('#changeText');
const button2 = document.querySelector('#changeImage');
const button3 = document.querySelector('#changeColor');

function newText(_event) {
    const p = document.querySelector('#myParagraph');
    p.innerText = 'The text has been changed';
}

function newImage(_event) {
    const img = document.querySelector("#myImage");
    img.src = 'img2.jpg';
}

function newColor(_event) {
    const color = document.querySelector('#mainDiv');
    color.classList.add("green");
}

button2.addEventListener('click', newImage);
button1.addEventListener('click', newText);
button3.addEventListener('click', newColor);   