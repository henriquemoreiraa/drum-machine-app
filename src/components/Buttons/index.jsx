
import { useRef, useState } from 'react'
import * as C from './styles'

export const Buttons = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const audioPlayer = useRef()

    const togglePlaySound = () => {
        const prevValue = isPlaying
        setIsPlaying(!prevValue)
        if (!prevValue) {
            audioPlayer.current.play()
            props.changeAlgo(true)
        } else {
            audioPlayer.current.pause()
        }
    }

    return (
        <C.Buttons>

            <audio ref={audioPlayer} src={props.url[0]}></audio>
            <audio src={props.url[1]}></audio>
            <audio src={props.url[2]}></audio>
            <audio src={props.url[3]}></audio>
            <audio src={props.url[4]}></audio>
            <audio src={props.url[5]}></audio>
            <audio src={props.url[6]}></audio>
            <audio src={props.url[7]}></audio>
            <audio src={props.url[8]}></audio>

            <button onClick={togglePlaySound}>Q</button>
            <button>W</button>
            <button>E</button>
            <button>A</button>
            <button>S</button>
            <button>D</button>
            <button>Z</button>
            <button>X</button>
            <button>C</button>
        </C.Buttons>
    )
}