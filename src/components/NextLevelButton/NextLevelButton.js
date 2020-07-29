import React from 'react';
import './NextLevelButton.scss';

const NextLevelButton = (props) => {

    return (
        <button className={`${props.className} next-level-button`}>
            Next Level
        </button>
    )
}
export default NextLevelButton;