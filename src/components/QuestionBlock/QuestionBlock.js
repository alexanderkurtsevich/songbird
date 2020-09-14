import React from 'react';
import './QuestionBlock.scss';
import unknownBird from '../../assets/img/unknown-bird.jpg';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const QuestionBlock = (props) => {
    if (!props.data) return null;
    const data = props.data[props.activeQuestionId][props.correctAnswerId];
    const text = props.isGuessed ? data.name : '******';
    const imagePath = props.isGuessed ? data.image : unknownBird;
    const audioPath = data.audio;
    return (
        <div className={`${props.className} question-block`}>
            <img
                className='question-block__image'
                alt='Bird'
                src={imagePath}
            />
            <h3 className='question-block__bird-name'>
                {text}
            </h3>
            <AudioPlayer 
                audioPath={audioPath}
                isGuessed={props.isGuessed}
            />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isGuessed: state.main.isGuessed,
        data: state.main.data,
        activeQuestionId: state.main.activeQuestionId,
        correctAnswerId: state.main.correctAnswerId,
    }
}

QuestionBlock.propTypes = {
    isGuessed: PropTypes.bool,
    data: PropTypes.array,
    activeQuestionId: PropTypes.number,
    correctAnswerId: PropTypes.number,
}

export default connect(mapStateToProps)(QuestionBlock);