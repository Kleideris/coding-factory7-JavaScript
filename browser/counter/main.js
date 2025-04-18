const DEFAULT = 0;
let counter = DEFAULT   // state - Model

window.addEventListener('DOMContentLoaded', function() {
  this.document.querySelector('#btnDecr').addEventListener('click', onDecreaseClicked)
  this.document.querySelector('#btnReset').addEventListener('click', onResetClicked)
  this.document.querySelector('#btnIncr').addEventListener('click', onIncreaseClicked)
})

/**
 * Handler - Controler
 */
function onDecreaseClicked() {
  decreseCounter()
}

function onResetClicked() {
  resetCounter()
}

function onIncreaseClicked() {
  increseCounter()
}

/**
 * Model
 */
function decreseCounter() {
  counter--;
  render()
}

function resetCounter() {
  counter = 0;
  render()
}

function increseCounter() {
  counter++;
  render()
}

/**
 * View
 */
function render() {
  const counterDOM = document.querySelector('#counter')
  counterDOM.textContent = counter
  styleCounter(counterDOM)
}

function styleCounter(counterDOM) {
  counterDOM.classList.toggle('color-green', counter > 0)
  counterDOM.classList.toggle('color-red', counter < 0)
  counterDOM.classList.toggle('color-black', counter === 0)
}

// function styleCounter(counterDOM) {
//   if (counter === 0) {
//     counterDOM.style.color = 'black'
//   } else if (counter > 0) {
//     counterDOM.style.color = 'green'
//   } else if (counter < 0) {
//     counterDOM.style.color = 'red'
//   }
//   }
// }










// let counter = 0;

// const btnDecr = document.getElementById('btnDecr')
// const btnReset = document.getElementById('btnReset')
// const btnIncr = document.getElementById('btnIncr')
// let counterDOM = document.getElementById('counter')

// btnDecr.addEventListener('click', function() {
//   counter--;
//   counterDOM.innerHTML = counter
// })

// btnReset.addEventListener('click', function() {
//   counter = 0;
//   counterDOM.innerHTML = counter
// })

// btnIncr.addEventListener('click', function() {
//   counter++;
//   counterDOM.innerHTML = counter
// })