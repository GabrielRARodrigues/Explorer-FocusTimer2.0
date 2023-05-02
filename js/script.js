import {
  rainSoundButton,
  coffeeShopSoundButton,
  forestSoundButton,
  fireplaceSoundButton,
  controlsButtonPlay,
  controlsButtonStop,
  controlsButtonPlus,
  controlsButtonMinus,
  minutesTimerView,
  secondsTimerView
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
const controls = Controls({ sounds, timer })

Events({
  rainSoundButton,
  fireplaceSoundButton,
  forestSoundButton,
  coffeeShopSoundButton,
  controlsButtonPlay,
  controlsButtonStop,
  controlsButtonPlus,
  controlsButtonMinus,
  controls
})
