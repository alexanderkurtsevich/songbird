import React from 'react';
import './AnswerInfo.scss';

const AnswerInfo = (props) => {

    return (
        <div className={`${props.className} answer-info`}>
            <p className='answer-info__instruction'>
                <span>Послушайтие аудио</span>
                <span>Выберите птицу из списка</span>
            </p>
        </div>
    )
}
export default AnswerInfo;