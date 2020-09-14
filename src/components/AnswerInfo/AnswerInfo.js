import React from 'react';
import './AnswerInfo.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

const AnswerInfo = (props) => {
    if (!props.data) return null;
    let data = props.data[props.activeQuestionId];
    if (props.lastClickedId !== null) data = data[props.lastClickedId]
    return (
        <div className={`${props.className} answer-info`}>
            {
                props.lastClickedId === null
                    ? <p className='answer-info__instruction'>
                        <span>Послушайтие аудио</span>
                        <span>Выберите птицу из списка</span>
                    </p>
                    : <div>
                        <img
                            className='answer-info__image'
                            alt='bird'
                            src={data.image}
                        />
                        <p className='answer-info__name'>
                            {data.name}
                        </p>
                        <p className='answer-info__latin-name'>
                            {data.species}
                        </p>
                        <AudioPlayer
                            audioPath={data.audio}
                        />
                        <p className='answer-info__description'>
                            {data.description}
                        </p>
                    </div>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        activeQuestionId: state.main.activeQuestionId,
        lastClickedId: state.main.lastClickedId,
        data: state.main.data,
    }
}

AnswerInfo.propTypes = {
    className: PropTypes.string,
    activeQuestionId: PropTypes.number,
    lastClickedId: PropTypes.number,
    data: PropTypes.array,
}

export default connect(mapStateToProps)(AnswerInfo);