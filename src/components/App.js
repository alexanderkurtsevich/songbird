import React from 'react';
import Header from './Header/Header';
import './App.scss';
import QuestionBlock from './QuestionBlock/QuestionBlock';
import AnswersList from './AnswersList/AnswersList';
import AnswerInfo from './AnswerInfo/AnswerInfo';
import NextLevelButton from './NextLevelButton/NextLevelButton';

const App = () => {
    return (
        <div className='songbird'>
            <Header className='songbird__header' />
            <QuestionBlock className='songbird__question-block' />
            <AnswersList className='songbird__answers-list' />
            <AnswerInfo className='songbird__answer-info' />
            <NextLevelButton className='songbird__next-level-button' />
        </div>
    )
}

export default App
