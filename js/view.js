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

  return {
    updateTimer,
    getMinutes
  }
}
