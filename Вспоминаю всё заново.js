document.body.style.background = 'red';

const step = 10;
let currentHeight = 0;
function changeHeight() {
    const elements = document.getElementsByClassName('changeble-height');
    currentHeight += step;
    for(let i = 0; i < elements.length; i++) {
        
        elements[i].style.height = `${currentHeight}px`;
    }
}




