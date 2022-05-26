import { ReactComponent as Power } from '../../svgs/power.svg'
import { ReactComponent as VolumeDown } from '../../svgs/volume-1.svg'
import { ReactComponent as VolumeUp } from '../../svgs/volume-2.svg'
import { ReactComponent as Arrows } from '../../svgs/arrows-left-right.svg'
import * as C from './styles'

export const AudioSettings = () => {
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
                    <button> <VolumeDown stroke='#fff'/> </button>
                    <button><VolumeUp stroke='#fff'/></button>
                </div>
                
            </C.Volume> 

           <C.ChangeSound>
               <h3>Bank</h3>
               <button>
                   <Arrows stroke='#fff'/>
               </button>
           </C.ChangeSound>
        </C.AudioSettings>
    )
}