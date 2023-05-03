const minutesTimerView = document.querySelector('[data-timer-minutes]')
const secondsTimerView = document.querySelector('[data-timer-seconds]')

const controlsButtonPlay = document.querySelector('[data-controls-play]')
const controlsButtonPause = document.querySelector('[data-controls-pause]')
const controlsButtonStop = document.querySelector('[data-controls-stop]')
const controlsButtonSet = document.querySelector('[data-controls-set]')
const controlsButtonPlus = document.querySelector('[data-controls-plus]')
const controlsButtonMinus = document.querySelector('[data-controls-minus]')

const rainSoundButton = document.querySelector('[data-sound-rain]')
const forestSoundButton = document.querySelector('[data-sound-forest]')
const fireplaceSoundButton = document.querySelector('[data-sound-fireplace]')
const coffeeShopSoundButton = document.querySelector('[data-sound-coffeeshop]')

const darkModeButton = document.querySelector('[data-dark-mode-button]')
const lightModeButton = document.querySelector('[data-light-mode-button]')

export {
  minutesTimerView,
  secondsTimerView,
  rainSoundButton,
  forestSoundButton,
  fireplaceSoundButton,
  coffeeShopSoundButton,
  controlsButtonPlay,
  controlsButtonPause,
  controlsButtonSet,
  controlsButtonStop,
  controlsButtonMinus,
  controlsButtonPlus,
  lightModeButton,
  darkModeButton
}
