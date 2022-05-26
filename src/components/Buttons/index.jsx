
import { useState, useEffect } from 'react'
import * as C from './styles'

export const Buttons = ({ sound, volume }) => {

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, []);

    const handleKeyPress = (e) => {
        if (e.keyCode === sound.keyCode) {
            playSound();
        }
    }

    const playSound = () => {
        const audioTag = document.getElementById(sound.keyTrigger);
        audioTag.volume = volume
        audioTag.currentTime = 0;
        audioTag.play();

    }

    return (
        <C.Buttons>
            <div>
                <button
                    onClick={playSound}
                >
                    <audio src={sound.url} id={sound.keyTrigger} />
                    {sound.keyTrigger}
                </button>
            </div>
        </C.Buttons>
    )
}