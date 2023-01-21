const display = document.querySelector('.display')
const btn = document.getElementsByClassName('btn')
const btnArray = Array.from(btn)

btnArray.forEach( (button) => {
  button.addEventListener('click', () => {
    calculator(button, display)
  })
})

function calculator(button, display) {
  switch (button.innerHTML) {
    case 'RESET':
      reset(display)
      break;
    case 'DEL':
      deleted(display)
      break;
    case '=':
      calc(display)
      break;
    default:
      add(display, button)
      break;
  }
}

function calc(display) {
  display.innerHTML = eval(display.innerHTML)
}

function add(display, button) {
  if (display.innerHTML == 0) {
    display.innerHTML = ''
  }
  display.innerHTML += button.innerHTML
}

function reset(display) {
  display.innerHTML = 0
}

function deleted(display) {
  display.innerHTML = 0
}