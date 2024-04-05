const button = document.querySelector('#changeText');

function newText(_event) {
    const p = document.querySelector('#myParagraph');
    p.innerText = 'The text has been changed';
}

function newImage(_event) {
    const img = document.querySelector("#myImage");
    img.src = 'img2.jpg';
}

button.addEventListener('click', newImage);
button.addEventListener('click', newText);    