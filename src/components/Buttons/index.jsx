import { useEffect, useState } from 'react'
import { colors } from '../../data/colors'
import * as C from './styles'

export const Buttons = ({ sound, volume, changeCurrentSound, isOn }) => {
    const [isClicked, setIsClicked] = useState(false)
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [volume]);
    
    const handleKeyPress = (e) => {
        if (e.keyCode === sound.keyCode) {
            playSound();
        }
    }
    
    const playSound = () => {
        if (isOn) {
            const audioTag = document.getElementById(sound.keyTrigger);
            setIsClicked(true)
            setTimeout(() => setIsClicked(false), 200)
            audioTag.volume = volume
            audioTag.currentTime = 0;
            audioTag.play();
            changeCurrentSound(sound.id)
        }
    }
    const randomIndexColor = Math.floor(Math.random() * 5)
    const randomColor = colors[randomIndexColor]


    return (
        <C.Buttons isClicked={isClicked} randomColor={randomColor} isOn={isOn}>
            <div>
                <button
                    onClick={playSound}
                >
                    { isOn && <audio src={sound.url} id={sound.keyTrigger} />}
                    {sound.keyTrigger}
                </button>
            </div>
        </C.Buttons>
    )
}