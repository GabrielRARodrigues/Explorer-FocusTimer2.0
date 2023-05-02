export default function () {
  const forestAudio = new Audio('./assets/sounds/Floresta.wav')
  forestAudio.loop = true
  forestAudio.volume = 1

  const coffeeShopAudio = new Audio('./assets/sounds/Cafeteria.wav')
  coffeeShopAudio.loop = true
  coffeeShopAudio.volume = 1

  const rainAudio = new Audio('./assets/sounds/Chuva.wav')
  rainAudio.loop = true
  rainAudio.volume = 1

  const fireplaceAudio = new Audio('./assets/sounds/Lareira.wav')
  fireplaceAudio.loop = true
  fireplaceAudio.volume = 1

  const timeEndAudio = new Audio('./assets/sounds/TimeEnd.mp3')

  const buttonPressAudio = new Audio('./assets/sounds/ButtonPress.wav')

  return {
    forestAudio,
    coffeeShopAudio,
    rainAudio,
    fireplaceAudio,
    timeEndAudio,
    buttonPressAudio
  }
}
