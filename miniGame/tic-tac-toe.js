let firstLine = document.querySelectorAll('.field1');
let secondLine = document.querySelectorAll('.field2');
let thierdLine = document.querySelectorAll('.field3');

let currentColor = 'black';

firstLine.forEach(element => {
    element.style.background = 'grey';
})

secondLine.forEach(element => {
    element.style.background = 'grey';
})

thierdLine.forEach(element => {
    element.style.background = 'grey';
})


function toggleColor(event) {
    if (currentColor === 'black') {
        event.target.style.background = 'black';
        currentColor = 'white';
    } else {
        event.target.style.background = 'white';
        currentColor = 'black';
    }
}

firstLine.forEach(element => {
    element.addEventListener('click', toggleColor);
});

secondLine.forEach(element => {
    element.addEventListener('click', toggleColor);
});

thierdLine.forEach(element => {
    element.addEventListener('click', toggleColor);
});

