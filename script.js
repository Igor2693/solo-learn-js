'use strict'

const btn = document.querySelector('#btn')
const text = document.querySelector('#text')
const square = document.querySelector('#square')
const ebtn = document.querySelector('#e_btn')
const range = document.querySelector('#range')
const rangeText = document.querySelector('#range-span')

ebtn.style.display = 'none'

const logger = function(event) {
    square.style.backgroundColor = text.value
}

const rangeInput = function(event) {
    rangeText.textContent = event.target.value
    square.style.height = event.target.value + '%'
    square.style.width = event.target.value + '%' 

}

btn.addEventListener('click', logger)
range.addEventListener('input', rangeInput)
range.addEventListener('change', rangeInput)

console.log(range);
console.log(rangeText);





