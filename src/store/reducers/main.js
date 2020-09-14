import { GET_DATA, ON_CLICK_ANSWER, ON_CORRECT_ANSWER_CLICK, TO_NEXT_LEVEL, START_NEW_GAME } from '../actions/actionTypes';

const initialState = {
    data: null,
    activeQuestionId: 0,
    correctAnswerId: 0,
    clickedAnswersId: [],
    lastClickedId: null,
    score: 0,
    isGuessed: false,
    isGameCompleted: false,
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            console.log(`Правильный ответ: ${action.data[state.activeQuestionId][action.correctAnswerId].name}`)
            return {
                ...state,
                data: action.data,
                correctAnswerId: action.correctAnswerId,
            }

        case ON_CLICK_ANSWER:
            const clickedAnswersId = [...state.clickedAnswersId];
            const isClickedEarlier = clickedAnswersId.includes(action.id);
            if (!state.isGuessed && !isClickedEarlier) clickedAnswersId.push(action.id);
            return {
                ...state,
                clickedAnswersId,
                lastClickedId: action.id,
            }

        case ON_CORRECT_ANSWER_CLICK:
            const countOfAttempts = state.clickedAnswersId.length;
            const pointsForLevel = 5 - countOfAttempts;
            const score = state.isGuessed ? state.score : state.score + pointsForLevel;
            return {
                ...state,
                isGuessed: true,
                score,
                lastClickedId: state.correctAnswerId,
            }

        case TO_NEXT_LEVEL:
            const isGameCompleted = state.activeQuestionId >= state.data.length - 1;
            const activeQuestionId = isGameCompleted
                ? 0
                : state.activeQuestionId + 1;
                console.log(`Правильный ответ: ${state.data[activeQuestionId][action.correctAnswerId].name}`)
            return {
                ...state,
                activeQuestionId,
                correctAnswerId: action.correctAnswerId,
                clickedAnswersId: [],
                lastClickedId: null,
                isGuessed: false,
                isGameCompleted,
            }

        case START_NEW_GAME:
            return {
                ...initialState,
                data: state.data
            }

        default:
            return state;
    }
}