const inputOne = document.getElementById('one')
const inputTwo = document.getElementById('two')
const inputThre = document.getElementById('thre')
const body = document.querySelector('#body')

inputOne.addEventListener('click', () => {
  body.classList.remove('theme-two')
  body.classList.remove('theme-thre')
})
inputTwo.addEventListener('click', () => {
  body.classList.remove('theme-thre')
  body.classList.add('theme-two')
})
inputThre.addEventListener('click', () => {
  body.classList.remove('theme-two')
  body.classList.add('theme-thre')
})
