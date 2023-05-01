import Sounds from './sounds.js'
const sounds = Sounds()

export default function ({
  rainSoundButton,
  forestSoundButton,
  fireplaceSoundButton,
  coffeeShopSoundButton
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
}