import React from 'react';
import './QuestionBlock.scss';
import unknownBird from '../../assets/img/unknown-bird.jpg';
import AudioPlayer from '../AudioPlayer/AudioPlayer'

const QuestionBlock = (props) => {

    return (
        <div className={`${props.className} question-block`}>
            <img
                className='question-block__image'
                alt='Bird'
                src={unknownBird}
            />
            <h3 className='question-block__bird-name'>
                ******
            </h3>
            <AudioPlayer />
        </div>
    )
}
export default QuestionBlock;