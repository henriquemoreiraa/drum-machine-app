import { useState } from 'react'
import { ReactComponent as Power } from '../../svgs/power.svg'
import { ReactComponent as Arrows } from '../../svgs/arrows-left-right.svg'
import * as C from './styles'

export const AudioSettings = ({ sounds, changeSounds, changeVolume, volume, currentSound, changePower, isOn, firstSounds}) => {

    return (
        <C.AudioSettings>
           <C.Power isOn={isOn}>
                <h3>Power</h3>
                <button onClick={() => changePower(!isOn)}>
                    {!isOn ? <Power stroke='#c25a5479'/> : <Power stroke='green'/>}
                </button>
           </C.Power>

           <C.ShowSound>
                <h3>Current Sound</h3>
                <h4>{isOn && currentSound}</h4>
           </C.ShowSound>

           <C.Volume>
                <h3>Volume</h3>
                <p>{volume}</p>
                <div>
                    <input
                        type="range" 
                        step="0.1"
                        onChange={(e) => changeVolume(e.target.value)} 
                        value={volume}
                        max='1'
                        min='0' 
                     />
                </div>
                
            </C.Volume> 

           <C.ChangeSound>
               <h3>{firstSounds ? 'First sounds' : 'Second sounds'}</h3>
               <button onClick={() => changeSounds(!sounds)}>
                   <Arrows stroke='#fff'/>
               </button>
           </C.ChangeSound>
        </C.AudioSettings>
    )
}