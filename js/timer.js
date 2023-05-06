import { controls } from './script.js'

export default function ({
  minutesTimerView,
  updateTimer,
  secondsTimerView,
  timeEndAudio
}) {
  let timerTimeOut
  let minutes = Number(minutesTimerView.textContent)

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function reset() {
    updateTimer(minutes)
    clearTimeout(timerTimeOut)
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let countMinutes = Number(minutesTimerView.textContent)
      let seconds = Number(secondsTimerView.textContent)

      let isFinished = countMinutes <= 0 && seconds <= 0

      updateTimer(countMinutes)

      if (isFinished) {
        controls.reset()
        updateTimer(minutes)
        timeEndAudio.play()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --countMinutes
      }

      updateTimer(countMinutes, String(seconds - 1))

      countDown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function addFiveMinutes() {
    let minutes = Number(minutesTimerView.textContent)
    let seconds = Number(secondsTimerView.textContent)
    minutes += 5
    updateTimer(minutes, seconds)
  }

  function removeFiveMinutes() {
    let minutes = Number(minutesTimerView.textContent)
    let seconds = Number(secondsTimerView.textContent)
    if (minutes - 5 >= 0) {
      minutes -= 5
      updateTimer(minutes, seconds)
    } else {
      alert('Não é possível diminuir mais os minutos')
    }
  }

  return {
    hold,
    reset,
    updateMinutes,
    countDown,
    addFiveMinutes,
    removeFiveMinutes
  }
}
