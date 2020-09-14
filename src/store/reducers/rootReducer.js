import { combineReducers } from 'redux';
import audioPlayerReducer from './audioPlayer';
import mainReducer from './main';

export default combineReducers({
    audioPlayer: audioPlayerReducer,
    main: mainReducer,
});