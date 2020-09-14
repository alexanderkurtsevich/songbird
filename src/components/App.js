import React, { Component } from 'react';
import Header from './Header/Header';
import './App.scss';
import QuestionBlock from './QuestionBlock/QuestionBlock';
import AnswersList from './AnswersList/AnswersList';
import AnswerInfo from './AnswerInfo/AnswerInfo';
import NextLevelButton from './NextLevelButton/NextLevelButton';
import FinalWindow from '../components/FinalWindow/FinalWindow';
import { connect } from 'react-redux';
import { getData } from '../store/actions/main';
import PropTypes from 'prop-types';

class App extends Component {
    componentDidMount() {
        this.props.getData();
    }
    render() {
        return (
            <div className='songbird'>
                <Header className='songbird__header' />
                {
                    this.props.isGameCompleted
                        ? <FinalWindow className='songbird__final-window' />
                        : <React.Fragment>
                            <QuestionBlock className='songbird__question-block' />
                            <AnswersList className='songbird__answers-list' />
                            <AnswerInfo className='songbird__answer-info' />
                            <NextLevelButton className='songbird__next-level-button' />
                        </React.Fragment>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isGameCompleted: state.main.isGameCompleted,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getData: () => dispatch(getData())
    }
}

App.propTypes = {
    isGameCompleted: PropTypes.bool,
    getData: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
