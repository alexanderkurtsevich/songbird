import birdsData from '../../constants/birdsData';
import { GET_DATA, ON_CLICK_ANSWER, ON_CORRECT_ANSWER_CLICK, TO_NEXT_LEVEL, START_NEW_GAME } from './actionTypes';


function getRandomAnswerId(data) {
    return Math.floor(Math.random() * 6);
}

export function getData() {
    const data = birdsData;
    const correctAnswerId = getRandomAnswerId();
    return {
        type: GET_DATA,
        data,
        correctAnswerId,
    }
}

export function onClickAnswer(id) {
    return {
        type: ON_CLICK_ANSWER,
        id,
    }
}

export function onCorrectAnswerClick() {
    return {
        type: ON_CORRECT_ANSWER_CLICK,
    }
}

export function toNextLevel() {
    const correctAnswerId = getRandomAnswerId();
    return {
        type: TO_NEXT_LEVEL,
        correctAnswerId
    }
}

export function startNewGame() {
    return {
        type: START_NEW_GAME,
    }
}