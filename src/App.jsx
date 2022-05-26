import * as C from './styles-app'
import './App.css';
import { useState } from 'react'
import { Buttons } from './components/Buttons'
import { AudioSettings } from './components/AudioSettings'  
import { bankOne, bankTwo } from './soundsUrls'

function App() {
  const [value, setValue] = useState(false) 

  const changeAlgo = (e) => {
    setValue(e)
  }
console.log(value)

  return (
    <C.Container>
      <Buttons 
        id={bankOne.map(id => id.id)}
        keyTrigger={bankOne.map(keyT => keyT.keyTrigger)}
        keyCode={bankOne.map(keyC => keyC.keyCode)}
        url={bankOne.map(url => url.url)}
        changeAlgo={changeAlgo}
      />
      
      <AudioSettings />
    </C.Container>
  );
}

export default App;
