export default function ({
  timer,
  sounds,
  view,
  controlsButtonPlay,
  controlsButtonPause,
  controlsButtonStop,
  controlsButtonSet
}) {
  function play() {
    timer.countDown()
    sounds.buttonPressAudio.play()
    addClassHide(controlsButtonPlay)
    removeClassHide(controlsButtonPause)
    removeClassHide(controlsButtonStop)
    addClassHide(controlsButtonSet)
  }

  function pause() {
    timer.hold()
    sounds.buttonPressAudio.play()
    addClassHide(controlsButtonPause)
    removeClassHide(controlsButtonPlay)
  }

  function stop() {
    timer.reset()
    sounds.buttonPressAudio.play()
    reset()
  }

  function set() {
    let newMinutes = view.getMinutes()
    if (!newMinutes) {
      timer.reset()
      return
    }
    view.updateTimer(newMinutes)
    timer.updateMinutes(newMinutes)
  }

  function plus() {
    timer.addFiveMinutes()
    sounds.buttonPressAudio.play()
  }

  function minus() {
    timer.removeFiveMinutes()
    sounds.buttonPressAudio.play()
  }

  function reset() {
    addClassHide(controlsButtonPause)
    addClassHide(controlsButtonStop)
    removeClassHide(controlsButtonPlay)
    removeClassHide(controlsButtonSet)
  }

  function addClassHide(element) {
    element.classList.add('hide')
  }

  function removeClassHide(element) {
    element.classList.remove('hide')
  }
  return {
    play,
    pause,
    stop,
    set,
    plus,
    minus,
    reset
  }
}
