import {
    ON_PLAY_PAUSE,
    GET_AUDIO,
    UPDATE_PROGRESS,
    TO_AUDIO_START
} from '../actions/actionTypes'



const initialState = {
    duration: 0,
    progress: 0,
    audio: null,
    isPlaying: false,
}

export default function audioPlayerReducer(state = initialState, action) {
    switch (action.type) {
        case ON_PLAY_PAUSE:
            console.log(action.isPlaying)
            return {
                ...state,
                isPlaying: !action.isPlaying
            }
        case UPDATE_PROGRESS:
            return {
                ...state,
                progress: action.progress
            }
        case TO_AUDIO_START:
            return {

            }
        case GET_AUDIO:
            return {
                ...state,
                audio: action.audio,
            }
        default:
            return state;
    }
}