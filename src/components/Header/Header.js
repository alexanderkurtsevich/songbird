import React from 'react';
import './Header.scss';
import logo from '../../assets/img/logo.svg';
import QuestionsList from './QuestionsList/QuestionsList'

const Header = (props) => {
    return (
        <header className={`${props.className} header`}>

            <div className='header__logo-and-score-wrap'>
                <img className='header__logo'
                    src={logo}
                    alt='Songbird'
                />
                <p>Score: </p>
            </div>

            <QuestionsList />
        </header>
    )
}

export default Header;