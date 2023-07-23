function makeRed() {
    document.body.style.backgroundColor = 'Red';
}

// handle blue button click
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}

// handle green button anonymous function
const greenButton = document.getElementById('make-green-button');
// anonymous function
greenButton.onclick = function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// handel by using adlistener
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod)
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod'
}

// adlistener
const hotPinkHotButton = document.getElementById('make-hotpink');
hotPinkHotButton.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = 'hotpink'
})

// direct shortcut
document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})