import * as C from './styles-app'
import './App.css';
import { useState } from 'react'
import { Buttons } from './components/Buttons'
import { AudioSettings } from './components/AudioSettings'  
import { soundsOne, soundsTwo } from './soundsUrls'
import { ShowSound } from './components/AudioSettings/styles';

function App() {
  const [sounds, setSound] = useState(false) 
  const [volume, setVolume] = useState(1)

  const changeSounds = (e) => {
    setSound(e)
  }

  const changeVolume = (e) => {
    setVolume(e)
  }
// console.log(sound)

  return (
    <C.Container>

      <C.Button>
        {!sounds ? soundsOne.map(sound => (
          <Buttons
            key={sound.id}
            sound={sound}
            volume={volume}
          />
        )) : soundsTwo.map(sound => (
          <Buttons
            key={sound.id}
            sound={sound}
            volume={volume}
          />
        ))}
      </C.Button>  

      <AudioSettings 
        changeSounds={changeSounds}
        changeVolume={changeVolume}
        sounds={sounds}
        volume={volume}
      />

    </C.Container>
  );
}

export default App;
