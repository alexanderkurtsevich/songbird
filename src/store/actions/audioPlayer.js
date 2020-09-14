import { ON_PLAY_PAUSE, GET_AUDIO, UPDATE_PROGRESS, TO_AUDIO_START } from './actionTypes';
import correctAudio from '../../assets/audio/correct.mp3';

export function onPlayPause(isPlaying, audio) {
    isPlaying ? audio.pause() : audio.play();
    return {
        type: ON_PLAY_PAUSE,
        isPlaying,
    }
}

export function onChangeTime(audio) {
    return dispatch => {
        const duration = audio.duration;
        const currentTime = audio.currentTime;
        const progress = Math.round((currentTime / duration) * 100);
        dispatch(updateProgress(progress))

        if (progress === 100) {
            dispatch(toAudioStart(audio))
        }
    }
}

function updateProgress(progress) {
    return {
        type: UPDATE_PROGRESS,
        progress,
    }
}

function toAudioStart(audio) {
    audio.currentTime = 0;
    audio.pause()
    return {
        type: TO_AUDIO_START,
        progress: 0,
    }
}

export function getAudio() {
    const audio = correctAudio;
    return {
        type: GET_AUDIO,
        audio,

    }
}