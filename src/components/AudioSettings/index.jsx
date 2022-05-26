import { useState } from 'react'
import { ReactComponent as Power } from '../../svgs/power.svg'
import { ReactComponent as VolumeDown } from '../../svgs/volume-1.svg'
import { ReactComponent as VolumeUp } from '../../svgs/volume-2.svg'
import { ReactComponent as Arrows } from '../../svgs/arrows-left-right.svg'
import * as C from './styles'

export const AudioSettings = ({ sounds, changeSounds, changeVolume, volume }) => {

    return (
        <C.AudioSettings>
           <C.Power>
                <h3>Power</h3>
                <button>
                    <Power stroke='#fff'/>
                </button>
           </C.Power>

           <C.ShowSound>
                <h3>Test</h3>
           </C.ShowSound>

           <C.Volume>
                <h3>Volume</h3>
                
                <div>
                    <input
                        type="range" 
                        step="0.01"
                        onChange={(e) => changeVolume(e.target.value)} 
                        value={volume}
                        max='1'
                        min='0' 
                     />
                </div>
                
            </C.Volume> 

           <C.ChangeSound>
               <h3>Change sounds</h3>
               <button onClick={() => changeSounds(!sounds)}>
                   <Arrows stroke='#fff'/>
               </button>
           </C.ChangeSound>
        </C.AudioSettings>
    )
}