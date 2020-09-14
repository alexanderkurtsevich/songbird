import React from 'react';
import './AnswersList.scss';
import { connect } from 'react-redux';
import { onClickAnswer, onCorrectAnswerClick } from '../../store/actions/main';
import PropTypes from 'prop-types';
import correctSound from '../../assets/audio/correct.mp3';
import incorrectSound from '../../assets/audio/incorrect.mp3';

const AnswersList = (props) => {
    const isLoaded = props.data;
    if (!isLoaded) return null;

    const levelData = props.data[props.activeQuestionId];
    return (
        <ul className={`${props.className} answers-list`}>
            {levelData.map((question) => {
                const id = question.id;
                const isCorrect = id === props.correctAnswerId;
                const isClicked = props.clickedAnswersId.includes(id);
                let pointModifier = (isClicked && !isCorrect)
                    ? '_incorrect'
                    : (props.isGuessed && isCorrect)
                        ? '_correct'
                        : '';
                const onClick = () => {
                    isCorrect
                        ? props.onCorrectAnswerClick()
                        : props.onClickAnswer(question.id);

                    if (isCorrect && !props.isGuessed && !isClicked) {
                        new Audio(correctSound).play()
                    }
                    else if (!props.isGuessed && !isClicked) {
                        new Audio(incorrectSound).play()
                    }
                }

                return (
                    <li
                        key={id}
                        className='answers-list__item'
                        onClick={onClick}

                    >
                        <div
                            className={`answers-list__point answers-list__point${pointModifier}`}
                        />
                        <p>{question.name}</p>
                    </li>
                )
            })}
        </ul>
    )
}

function mapStateToProps(state) {
    return {
        data: state.main.data,
        activeQuestionId: state.main.activeQuestionId,
        correctAnswerId: state.main.correctAnswerId,
        clickedAnswersId: state.main.clickedAnswersId,
        isGuessed: state.main.isGuessed,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClickAnswer: (questionId) => dispatch(onClickAnswer(questionId)),
        onCorrectAnswerClick: () => dispatch(onCorrectAnswerClick())
    }
}

AnswersList.propTypes = {
    data: PropTypes.array,
    activeQuestionId: PropTypes.number,
    correctAnswerId: PropTypes.number,
    clickedAnswersId: PropTypes.array,
    isGuessed: PropTypes.bool,
    onClickAnswer: PropTypes.func,
    onCorrectAnswerClick: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswersList);