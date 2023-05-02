export default function ({ timer, sounds }) {
  function play() {
    timer.countDown()
    sounds.buttonPressAudio.play()
  }

  function stop() {
    timer.reset()
    sounds.buttonPressAudio.play()
  }

  function plus() {
    timer.addFiveMinutes()
    sounds.buttonPressAudio.play()
  }

  function minus() {
    timer.removeFiveMinutes()
    sounds.buttonPressAudio.play()
  }

  return {
    play,
    stop,
    plus,
    minus
  }
}
