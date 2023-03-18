const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
function setRandomColor() {
    const index = Math.round(Math.random() * 100) % colors.length;
    document.body.style.background = colors[index];
    setTimeout(setRandomColor, 1000)
}

setRandomColor();

const step = 10;
let currentHeight = 0;
function changeHeight() {
    const elements = document.getElementsByClassName('changeble-height');
    currentHeight += step;
    for(let i = 0; i < elements.length; i++) {
        
        elements[i].style.height = `${currentHeight}px`;
    }
}




