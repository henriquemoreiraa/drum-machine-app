import * as C from './styles-app'
import './App.css';
import { Buttons } from './components/Buttons'
import { AudioSettings } from './components/AudioSettings'  
 
function App() {
  return (
    <C.Container>
      <Buttons />

      <AudioSettings />
    </C.Container>
  );
}

export default App;
