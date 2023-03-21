const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
function setRandomColor() {
    const index = Math.round(Math.random() * 100) % colors.length;
    document.body.style.background = colors[index];
    setTimeout(setRandomColor, 5000)
}

setRandomColor();

const step = 10;
let currentHeight = 15;
function changeHeight() {
    const elements = document.getElementsByClassName('changeble-height');
    currentHeight += step;
    for (let i = 0; i < elements.length; i++) {

        elements[i].style.height = `${currentHeight}px`;
    }
}


// ===================================================

let firstBox = document.getElementById("box1");
let secondBox = document.getElementById("box2");
let thierdBox = document.getElementById("box3");
let fourBox = document.getElementById("box4");


let allBoxes = [firstBox, secondBox, thierdBox, fourBox];
let boxColors = ['green', 'red', 'yellow', 'blue'];

for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].style.background = boxColors[i];
}

// это указатель на начало массива которое мы сами выбираем
let startIndex = 0;
function changeColors() {
    for (let i = 0; i < boxColors.length; i++) {
        const currentIndex = (startIndex + i) % boxColors.length;
        allBoxes[i].style.background = boxColors[currentIndex];
    }

    // Сдвигаем начало массива на единицу вперёд
    startIndex++;
}


