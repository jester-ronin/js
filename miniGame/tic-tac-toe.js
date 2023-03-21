let firstLine = document.querySelectorAll('.field1');
let secondLine = document.querySelectorAll('.field2');
let thierdLine = document.querySelectorAll('.field3');

firstLine.forEach(element => {
   element.style.background = 'grey';
})

secondLine.forEach(element => {
    element.style.background = 'grey';
 })

thierdLine.forEach(element => {
    element.style.background = 'grey';
 })


 function firstPlayerColor(event) {
    event.target.style.background = 'black';

}

function secondPlayerColor(event) {
    event.target.style.background = 'white';

}

firstLine.forEach(element => {
    element.addEventListener('click', firstPlayerColor);
    if(element.style.background === 'black') {
    element.addEventListener('click', secondPlayerColor);
    }
  });