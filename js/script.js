import {
  rainSoundButton,
  coffeeShopSoundButton,
  forestSoundButton,
  fireplaceSoundButton,
  controlsButtonPlay,
  controlsButtonPause,
  controlsButtonStop,
  controlsButtonSet,
  controlsButtonPlus,
  controlsButtonMinus,
  minutesTimerView,
  secondsTimerView,
  darkModeButton,
  lightModeButton,
  inputRangeRainAudioVolume,
  inputRangeCoffeeShopAudioVolume,
  inputRangeFireplaceAudioVolume,
  inputRangeForestAudioVolume
} from './elements.js'

import Events from './events.js'
import Sounds from './sounds.js'
import View from './view.js'
import Timer from './timer.js'
import Controls from './controls.js'

const sounds = Sounds()
const view = View({ minutesTimerView, secondsTimerView })
const timer = new Timer({
  minutesTimerView,
  secondsTimerView,
  updateTimer: view.updateTimer
})

export const controls = Controls({
  sounds,
  timer,
  view,
  controlsButtonPause,
  controlsButtonPlay,
  controlsButtonSet,
  controlsButtonStop
})

Events({
  rainSoundButton,
  fireplaceSoundButton,
  forestSoundButton,
  coffeeShopSoundButton,
  controlsButtonPlay,
  controlsButtonSet,
  controlsButtonStop,
  controlsButtonPause,
  controlsButtonPlus,
  controlsButtonMinus,
  controls,
  darkModeButton,
  lightModeButton,
  activeDarkMode: view.activeDarkMode,
  activeLightMode: view.activeLightMode,
  inputRangeRainAudioVolume,
  inputRangeCoffeeShopAudioVolume,
  inputRangeFireplaceAudioVolume,
  inputRangeForestAudioVolume
})
