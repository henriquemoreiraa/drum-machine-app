import * as C from './styles-app'
import './App.css';
import { useState } from 'react'
import { Buttons } from './components/Buttons'
import { AudioSettings } from './components/AudioSettings'  
import { soundsOne, soundsTwo } from './data/soundsUrls'

function App() {
  const [sounds, setSound] = useState(false) 
  const [volume, setVolume] = useState(1)
  const [currentSound, setCurrentSound] = useState('')
  const [isOn, setIsOn] = useState(true)

  const changeSounds = (e) => {
    setSound(e)
  }

  const changeVolume = (e) => {
    setVolume(e)
  }

  const changeCurrentSound = (e) => {
    setCurrentSound(e)
  }

  const changePower = (e) => {
    setIsOn(e)
    !isOn && setCurrentSound('')
  }

  return (
    <C.Container>

      <C.Button>
        {!sounds ? soundsOne.map(sound => (
          <Buttons
            key={sound.id}
            sound={sound}
            volume={volume}
            isOn={isOn}
            changeCurrentSound={changeCurrentSound}
          />
        )) : soundsTwo.map(sound => (
          <Buttons
            key={sound.id}
            sound={sound}
            volume={volume}
            isOn={isOn}
            changeCurrentSound={changeCurrentSound}
          />
        ))}
      </C.Button>  

      {!sounds && <AudioSettings 
        changeSounds={changeSounds}
        changeVolume={changeVolume}
        changePower={changePower}
        sounds={sounds}
        volume={volume}
        currentSound={currentSound}
        isOn={isOn}
        firstSounds={true}
      /> }
      { sounds && <AudioSettings 
        changeSounds={changeSounds}
        changeVolume={changeVolume}
        changePower={changePower}
        sounds={sounds}
        volume={volume}
        currentSound={currentSound}
        isOn={isOn}
        firstSounds={false}
      />
      }

    </C.Container>
  );
}

export default App;
