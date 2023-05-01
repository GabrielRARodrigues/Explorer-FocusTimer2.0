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

  return {
    forestAudio,
    coffeeShopAudio,
    rainAudio,
    fireplaceAudio
  }
}
