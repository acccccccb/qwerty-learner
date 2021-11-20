import { useState } from 'react'
import { useSetSoundState, useDarkMode, useSetWrongReStart } from 'store/AppState'

export type SwitcherStateType = {
  phonetic: boolean
  wordVisible: boolean
  sound: boolean
  darkMode: boolean
  wrongReStart: boolean
}

export type SwitcherDispatchType = (type: string, newStatus?: boolean) => void

const useSwitcherState = (initialState: {
  phonetic: boolean
  wordVisible: boolean
  darkMode?: boolean
  wrongReStart?: boolean
}): [SwitcherStateType, SwitcherDispatchType] => {
  const [phonetic, setPhonetic] = useState(initialState.phonetic)
  const [wordVisible, setWordVisible] = useState(initialState.wordVisible)
  const [sound, setSound] = useSetSoundState()
  const [darkMode, setDarkMode] = useDarkMode()
  const [wrongReStart, setWrongReStart] = useSetWrongReStart()

  const dispatch: SwitcherDispatchType = (type, newStatus) => {
    switch (type) {
      case 'phonetic':
        setPhonetic(newStatus ?? !phonetic)
        break
      case 'wordVisible':
        setWordVisible(newStatus ?? !wordVisible)
        break
      case 'sound':
        setSound(newStatus ?? !sound)
        break
      case 'wrongReStart':
        setWrongReStart(newStatus ?? !wrongReStart)
        break
      case 'darkMode':
        setDarkMode(newStatus ?? !darkMode)
    }
  }
  return [{ phonetic, wordVisible, sound, darkMode, wrongReStart }, dispatch]
}

export default useSwitcherState
