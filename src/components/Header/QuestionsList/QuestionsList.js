import React from 'react';
import './QuestionsList.scss';

const QuestionsList = (props) => {
    const questions = [...Array(6)].map((question, index) => {
        return (
            <li
                key={index}
                className='questions-list__question'
            >
                Птица
            </li>
        )
    })
    return (
        <ul className={`${props.className} questions-list`}>
            {questions}
        </ul>
    )
}
export default QuestionsList;