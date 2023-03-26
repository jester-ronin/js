let firstLine = document.querySelectorAll('.field1');
let secondLine = document.querySelectorAll('.field2');
let thierdLine = document.querySelectorAll('.field3');

let boxes = [firstLine[0], firstLine[1], firstLine[2],
secondLine[0], secondLine[1], secondLine[2],
thierdLine[0], thierdLine[1], thierdLine[2]]

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
    }
    else if (currentColor === "white") {
        event.target.style.background = 'white';
        currentColor = 'black';
    }


}

function statusCheck(event) {
    if (event.target.style.background === 'black') {
        event.target.style.background = 'black';
        currentColor = 'black'
        alert("Поле уже занято");
    }
    else if (event.target.style.background === 'white') {
        event.target.style.background = 'white';
        currentColor = 'white'
        alert("Поле уже занято");
    }
}

// function victoryCondition(event) {
//     event.forEach(e => {
//         for (let i = 0; i < e.length; i++) {
//             if (e[i].style.background === 'white') {
//                 alert("Победа белых");
//             }
//         }
//     })
// }
function victoryCondition() {
    if (boxes[0].style.background === 'black' && boxes[1].style.background === 'black' && boxes[2].style.background === 'black') {
        alert("Победа чёрных");
    }
    else if (boxes[3].style.background === 'black' && boxes[4].style.background === 'black' && boxes[5].style.background === 'black') {
        alert("Победа чёрных");

    }
    else if (boxes[6].style.background === 'black' && boxes[7].style.background === 'black' && boxes[8].style.background === 'black') {
        alert("Победа чёрных");

    }
    else if (boxes[0].style.background === 'black' && boxes[4].style.background === 'black' && boxes[8].style.background === 'black') {
        alert("Победа чёрных");

    }

    else if (boxes[2].style.background === 'black' && boxes[4].style.background === 'black' && boxes[6].style.background === 'black') {
        alert("Победа чёрных");

    }

    else if (boxes[0].style.background === 'black' && boxes[3].style.background === 'black' && boxes[6].style.background === 'black') {
        alert("Победа чёрных");

    }

    else if (boxes[1].style.background === 'black' && boxes[4].style.background === 'black' && boxes[7].style.background === 'black') {
        alert("Победа чёрных");

    }

    else if (boxes[2].style.background === 'black' && boxes[5].style.background === 'black' && boxes[8].style.background === 'black') {
        alert("Победа чёрных");

    }

    else if (boxes[0].style.background === 'white' && boxes[1].style.background === 'white' && boxes[2].style.background === 'white') {
        alert("Победа белых");
    }

    else if (boxes[3].style.background === 'white' && boxes[4].style.background === 'white' && boxes[5].style.background === 'white') {
        alert("Победа белых");

    }

    else if (boxes[6].style.background === 'white' && boxes[7].style.background === 'white' && boxes[8].style.background === 'white') {
        alert("Победа белых");

    }
    else if (boxes[0].style.background === 'white' && boxes[4].style.background === 'white' && boxes[8].style.background === 'white') {
        alert("Победа белых");

    }

    else if (boxes[2].style.background === 'white' && boxes[4].style.background === 'white' && boxes[6].style.background === 'white') {
        alert("Победа белых");

    }

    else if (boxes[0].style.background === 'white' && boxes[3].style.background === 'white' && boxes[6].style.background === 'white') {
        alert("Победа белых");

    }

    else if (boxes[1].style.background === 'white' && boxes[4].style.background === 'white' && boxes[7].style.background === 'white') {
        alert("Победа белых");

    }


    else if (boxes[2].style.background === 'white' && boxes[5].style.background === 'white' && boxes[8].style.background === 'white') {
        alert("Победа белых");

    }
}
