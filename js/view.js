export default function ({ minutesTimerView, secondsTimerView }) {
  function updateTimer(minutes, seconds = 0) {
    minutesTimerView.textContent = String(minutes).padStart(2, '0')
    secondsTimerView.textContent = String(seconds).padStart(2, '0')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  function activeLightMode() {
    changeGlobalCSSVariableValue('--primary-color', '#ffffff')
    changeGlobalCSSVariableValue('--secondary-color', '#323238')
    changeGlobalCSSVariableValue('--terciary-color', '#02799d')
    changeGlobalCSSVariableValue('--bg-sound-button-color', '#e1e1e6')
    changeGlobalCSSVariableValue('--fill-svg-color', '#323238')
  }

  function activeDarkMode() {
    changeGlobalCSSVariableValue('--primary-color', '#121214')
    changeGlobalCSSVariableValue('--secondary-color', '#FFFFFF')
    changeGlobalCSSVariableValue('--terciary-color', '#0A3442')
    changeGlobalCSSVariableValue('--bg-sound-button-color', '#29292E')
    changeGlobalCSSVariableValue('--fill-svg-color', '#C4C4CC')
  }

  function changeGlobalCSSVariableValue(CSSVariable, value) {
    document.documentElement.style.setProperty(CSSVariable, value)
  }

  return {
    updateTimer,
    getMinutes,
    activeLightMode,
    activeDarkMode
  }
}
