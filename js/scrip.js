let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes
let timerTimeOut

const play = document.querySelector('.play')
const stop = document.querySelector('.stop')

const buttonMenos = document.querySelector('#decrease')
const buttonMais = document.querySelector('#increase')


const cardForest = document.querySelector('.cardForest')
const cardRain = document.querySelector('.cardRain')
const cardCoffee = document.querySelector('.cardCoffee')
const cardFireplace = document.querySelector('.cardFireplace')
const audio = document.querySelector('audio')

const audioFlorest = new Audio('Audio/Floresta.wav')
const audioRain = new Audio('Audio/Chuva.wav')
const audioLareira = new Audio('Audio/Lareira.wav')
const audioCafeteria = new Audio('Audio/Cafeteria.wav')


function countdowm() {
  timerTimeOut = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    secondsDisplay.textContent = "00"

    if (minutes <= 0) {
      return
    }

    if (seconds <= 0) {
      seconds = 60

      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
    }
    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')


    countdowm()

  }, 1000)
}


play.addEventListener('click', () => {
  
  countdowm()
})

stop.addEventListener('click', () => {
  clearTimeout(timerTimeOut)
})


buttonMais.addEventListener('click', () => {
  let minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String(minutes + 5).padStart(2, '0')
})

buttonMenos.addEventListener('click', () => {
  let minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String(minutes - 5).padStart(2, '0')
})



cardForest.addEventListener('click', () => {
  cardForest.classList.add('hide')
  cardCoffee.classList.remove('hide')
  cardRain.classList.remove('hide')
  cardFireplace.classList.remove('hide')
  

  audioFlorest.play()
  audioCafeteria.pause()
  audioLareira.pause()
  audioRain.pause()

audioFlorest.loop = true
 
})
cardCoffee.addEventListener('click', () => {
  cardCoffee.classList.add('hide')
  cardRain.classList.remove('hide')
  cardFireplace.classList.remove('hide')
  cardForest.classList.remove('hide')

  audioCafeteria.play()
  audioFlorest.pause()
  audioLareira.pause()
  audioRain.pause()
  audioCafeteria.loop = true
  
})
cardRain.addEventListener('click', () => {
  cardRain.classList.add('hide')
  cardFireplace.classList.remove('hide')
  cardForest.classList.remove('hide')
  cardCoffee.classList.remove('hide')

  audioRain.play()
  audioCafeteria.pause()
  audioFlorest.pause()
  audioLareira.pause()
  audioRain.loop = true

})
cardFireplace.addEventListener('click', () => {
  cardFireplace.classList.add('hide')
  cardForest.classList.remove('hide')
  cardCoffee.classList.remove('hide')
  cardRain.classList.remove('hide')

  audioLareira.play()
  audioRain.pause()
  audioCafeteria.pause()
  audioFlorest.pause()
  audioLareira.loop = true
  
})






