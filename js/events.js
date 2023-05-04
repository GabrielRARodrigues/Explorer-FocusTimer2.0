import Sounds from './sounds.js'
const sounds = Sounds()

export default function ({
  rainSoundButton,
  forestSoundButton,
  fireplaceSoundButton,
  coffeeShopSoundButton,
  controlsButtonPlay,
  controlsButtonPause,
  controlsButtonStop,
  controlsButtonSet,
  controlsButtonPlus,
  controlsButtonMinus,
  darkModeButton,
  lightModeButton,
  activeDarkMode,
  activeLightMode,
  controls,
  inputRangeRainAudioVolume,
  inputRangeCoffeeShopAudioVolume,
  inputRangeFireplaceAudioVolume,
  inputRangeForestAudioVolume
}) {
  function activeOrDesactiveSound(soundButtonElement, soundAudioElement) {
    if (
      soundButtonElement.classList.contains('sounds-buttons__button--active')
    ) {
      sounds[soundAudioElement].pause()
      soundButtonElement.classList.remove('sounds-buttons__button--active')
    } else {
      sounds[soundAudioElement].play()
      soundButtonElement.classList.add('sounds-buttons__button--active')
    }
  }

  controlsButtonPlay.addEventListener('click', function () {
    controls.play()
  })

  controlsButtonPause.addEventListener('click', function () {
    controls.pause()
  })

  controlsButtonStop.addEventListener('click', function () {
    controls.stop()
  })

  controlsButtonSet.addEventListener('click', function () {
    controls.set()
  })

  controlsButtonPlus.addEventListener('click', function () {
    controls.plus()
  })

  controlsButtonMinus.addEventListener('click', function () {
    controls.minus()
  })

  rainSoundButton.addEventListener('click', function () {
    activeOrDesactiveSound(rainSoundButton, 'rainAudio')
  })

  forestSoundButton.addEventListener('click', function () {
    activeOrDesactiveSound(forestSoundButton, 'forestAudio')
  })

  fireplaceSoundButton.addEventListener('click', function () {
    activeOrDesactiveSound(fireplaceSoundButton, 'fireplaceAudio')
  })

  coffeeShopSoundButton.addEventListener('click', function () {
    activeOrDesactiveSound(coffeeShopSoundButton, 'coffeeShopAudio')
  })

  darkModeButton.addEventListener('click', function () {
    darkModeButton.classList.add('hide')
    lightModeButton.classList.remove('hide')
    activeLightMode()
  })

  lightModeButton.addEventListener('click', function () {
    lightModeButton.classList.add('hide')
    darkModeButton.classList.remove('hide')
    activeDarkMode()
  })

  inputRangeCoffeeShopAudioVolume.addEventListener('change', function (event) {
    const volume = Number(event.target.value)
    sounds.changeAudioVolume(sounds.coffeeShopAudio, volume)
  })

  inputRangeRainAudioVolume.addEventListener('change', function (event) {
    const volume = Number(event.target.value)
    console.log(volume)
    sounds.changeAudioVolume(sounds.rainAudio, volume)
  })

  inputRangeFireplaceAudioVolume.addEventListener('change', function (event) {
    const volume = Number(event.target.value)
    sounds.changeAudioVolume(sounds.fireplaceAudio, volume)
  })

  inputRangeForestAudioVolume.addEventListener('change', function (event) {
    const volume = Number(event.target.value)
    sounds.changeAudioVolume(sounds.forestAudio, volume)
  })
}
