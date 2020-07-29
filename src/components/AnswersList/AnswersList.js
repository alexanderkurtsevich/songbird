import React from 'react';
import './AnswersList.scss';

const AnswersList = (props) => {
    const pointStatus = 'inactive';

    return (
        <ul className={`${props.className} answers-list`}>
            {[...new Array(6)].map((el, index) => {
                return (
                    <li
                        key={index}
                        className='answers-list__item'
                    >
                        <div
                            className={`answers-list__point answers-list__point_${pointStatus}`}
                        />
                        <p>Птица</p>
                    </li>
                )
            })}
        </ul>
    )
}
export default AnswersList;