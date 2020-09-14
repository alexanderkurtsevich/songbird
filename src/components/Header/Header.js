import React from 'react';
import './Header.scss';
import logo from '../../assets/img/logo.svg';
import QuestionsList from './QuestionsList/QuestionsList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header className={`${props.className} header`}>

            <div className='header__logo-and-score-wrap'>
                <img className='header__logo'
                    src={logo}
                    alt='Songbird'
                />
                <p className='header__score'>Score: {props.score}</p>
            </div>

            <QuestionsList />
        </header>
    )
}

function mapStateToProps(state) {
    return {
        score: state.main.score,
    }
}

Header.propTypes = {
    score: PropTypes.number,
}

export default connect(mapStateToProps)(Header);