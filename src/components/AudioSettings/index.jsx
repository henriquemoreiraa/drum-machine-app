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
                <Power stroke='#000'/>
           </C.Power>

           <C.ShowSound>
                <h3>Test</h3>
           </C.ShowSound>

           <C.Volume>
                <h3>Volume</h3>
                <span>
                    Down<VolumeDown stroke='#000'/> Up<VolumeUp stroke='#000'/>
                </span>
            </C.Volume> 

           <C.ChangeSound>
               <h3>Bank</h3>
               <Arrows stroke='#000'/>
           </C.ChangeSound>
        </C.AudioSettings>
    )
}