import React from 'react';
import './NextLevelButton.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toNextLevel } from '../../store/actions/main';

const NextLevelButton = (props) => {
    const className = (props.isGuessed)
        ? 'next-level-button next-level-button_active'
        : 'next-level-button';
    return (
        <button
            className={`${props.className} ${className}`}
            onClick={props.toNextLevel}
            disabled={!props.isGuessed}
        >
            Next Level
        </button>
    )
}

function mapStateToProps(state) {
    return {
        isGuessed: state.main.isGuessed,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toNextLevel: () => dispatch(toNextLevel())
    }
}

NextLevelButton.propTypes = {
    className: PropTypes.string,
    isGuessed: PropTypes.bool,
    toNextLevel: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(NextLevelButton);