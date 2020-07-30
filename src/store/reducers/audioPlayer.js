import correctAudio from '../../assets/audio/correct.mp3'

const initialState = {
    progress: 0,
    audio: new Audio(correctAudio),
    isPlaying: false,
}

export default function audioPlayerReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}