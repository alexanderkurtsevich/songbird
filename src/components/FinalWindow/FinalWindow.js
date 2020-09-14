import React from 'react';
import './FinalWindow.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startNewGame } from '../../store/actions/main';
import perfectImage from '../../assets/img/chicken.png'

const FinalWindow = (props) => {
    const isPerfect = props.score === 30;
    return (
        <div className={`${props.className} final-window`}>
            <h2 className='final-window__heading'>Поздравляем!</h2>
            <p className='final-window__text'>
                {
                    isPerfect
                        ? 'Вау! Вы набрали максимальное количество баллов! Вы настоящий знаток птиц!'
                        : `Вы прошли викторину и набрали ${props.score} из 30 возможных баллов!`
                }
            </p>
            {
                isPerfect
                    ? <img
                        className='final-window__img'
                        alt='Птичка'
                        src={perfectImage}
                    />
                    : null
            }
            <hr />
            <button
                className='final-window__button'
                onClick={props.startNewGame}
            >
                {
                    isPerfect
                        ? 'Играть заново!'
                        : 'Попробовать еще раз!'
                }
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isGameCompleted: state.main.isGameCompleted,
        score: state.main.score,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        startNewGame: () => dispatch(startNewGame()),
    }
}

FinalWindow.propTypes = {
    score: PropTypes.number,
    className: PropTypes.string,
    isGameCompleted: PropTypes.bool,
    startNewGame: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(FinalWindow);