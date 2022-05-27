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

  return (
    <C.Container>

      <C.Button>
        {!sounds ? soundsOne.map(sound => (
          <Buttons
            key={sound.id}
            sound={sound}
            volume={volume}
            isOn={isOn}
            changeCurrentSound={(e) => setCurrentSound(e)}
          />
        )) : soundsTwo.map(sound => (
          <Buttons
            key={sound.id}
            sound={sound}
            volume={volume}
            isOn={isOn}
            changeCurrentSound={(e) => setCurrentSound(e)}
          />
        ))}
      </C.Button>  

      {!sounds && <AudioSettings 
        changeSounds={(e) => {return setSound(e), setCurrentSound('')}}
        changeVolume={(e) => setVolume(e)}
        changePower={(e) => {return setIsOn(e), !isOn && setCurrentSound('')}}
        sounds={sounds}
        volume={volume}
        currentSound={currentSound}
        isOn={isOn}
        firstSounds={true}
      /> }
      { sounds && <AudioSettings 
        changeSounds={(e) => {return setSound(e), setCurrentSound('')}}
        changeVolume={(e) => setVolume(e)}
        changePower={(e) => {return setIsOn(e), !isOn && setCurrentSound('')}}
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
