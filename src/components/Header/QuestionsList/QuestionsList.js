import React from 'react';
import './QuestionsList.scss';
import birdsTypes from '../../../constants/birdsTypes';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const QuestionsList = (props) => {
    const questions = birdsTypes.map((question) => {
        const className = (props.activeQuestionId === question.id)
            ? 'questions-list__question questions-list__question_active'
            : 'questions-list__question';
        return (
            <li
                key={question.id}
                className={className}
            >
                {question.text}
            </li>
        )
    })
    return (
        <ul className={`${props.className} questions-list`}>
            {questions}
        </ul>
    )
}

function mapStateToProps(state) {
    return {
        activeQuestionId: state.main.activeQuestionId,
    }
}

QuestionsList.propTypes = {
    className: PropTypes.string,
    activeQuestionId: PropTypes.number,
}

export default connect(mapStateToProps)(QuestionsList);