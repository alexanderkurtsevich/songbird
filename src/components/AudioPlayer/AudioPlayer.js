import React, { Component } from 'react';
import './AudioPlayer.scss';
import correctAudio from '../../assets/audio/correct.mp3';

export default class AudioPlayer extends Component {
    state = {
        progress: 0,
        audio: new Audio(correctAudio), // Вынеси в конструктор
        isPlaying: false,
    }
    playClickHandler = () => {
        const isPlaying = this.state.isPlaying;
        isPlaying ? this.state.audio.pause() : this.state.audio.play();
        this.setState({ isPlaying: !isPlaying })

    }
    audioChangeTimeHandler = () => {
        const audio = this.state.audio;
        const duration = audio.duration;
        const currentTime = audio.currentTime;
        const progress = Math.round((currentTime / duration) * 100);
        this.setState({ progress })

        if (progress === 100) {
            audio.currentTime = 0;
            audio.pause()
            this.setState({
                audio,
                isPlaying: false
            })
        }
    }
    render() {
        this.state.audio.addEventListener('timeupdate', this.audioChangeTimeHandler)
        return (
            < div
                className='audio-player'
            >
                <button
                    className='audio-player__playpause-button'
                    onClick={this.playClickHandler}
                >
                    {this.state.isPlaying ? 'pause' : 'play'}
                </button>
                <div className='audio-player__progress-bar'>
                    <div
                        style={{ left: `${this.state.progress}%` }}
                        className='audio-player__point'></div>
                </div>
            </div >
        )
    }

}