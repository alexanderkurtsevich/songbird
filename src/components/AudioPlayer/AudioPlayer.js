import React, { Component } from 'react';
import './AudioPlayer.scss';
import playImage from '../../assets/img/play.svg';
import pauseImage from '../../assets/img/pause.svg';
import PropTypes from 'prop-types';

class AudioPlayer extends Component {
    constructor() {
        super()
        this.state = {
            isPlaying: false,
            progress: 0,
            currentTime: '00:00',
            duration: '00:00'
        }
        this.audioRef = React.createRef();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.audioPath !== this.props.audioPath
            || prevProps.isGuessed !== this.props.isGuessed) {
            this.audioRef.current.pause();
            this.setState({
                isPlaying: false,
                progress: 0,
            })
        }
    }

    onPlayPause = () => {
        const isPlaying = this.state.isPlaying;
        const audio = this.audioRef.current;
        isPlaying ? audio.pause() : audio.play();
        this.setState({ isPlaying: !isPlaying })
    }

    onTimeUpdate = () => {
        const duration = this.audioRef.current.duration;
        const currentTime = this.audioRef.current.currentTime;
        const progress = Math.round((currentTime / duration) * 100);
        const time = AudioPlayer.getTime(currentTime);
        this.setState({
            progress,
            currentTime: time,
        })
        if (progress === 100) {
            this.setState({
                isPlaying: false,
                progress: 0,
                currentTime: '00:00'
            })
        }

    }

    static getTime(audioTime) {
        const time = Math.floor(audioTime);
        let min = Math.floor(time / 60);
        let sec = time % 60;
        min = 10 > min ? `0${min}` : min;
        sec = 10 > sec ? `0${sec}` : sec;
        return `${min}:${sec}`
    }

    onLoad = () => {
        const duration = AudioPlayer.getTime(this.audioRef.current.duration);
        this.setState({
            duration
        })
    }

    render() {
        return (
            < div
                className='audio-player'
            >
                <audio
                    src={this.props.audioPath}
                    ref={this.audioRef}
                    onTimeUpdate={this.onTimeUpdate}
                    onLoadedMetadata={this.onLoad}
                />
                <div
                    className='audio-player__playpause-button'
                    onClick={this.onPlayPause}
                >
                    <img
                        alt={this.state.isPlaying ? 'pause' : 'play'}
                        src={this.state.isPlaying ? pauseImage : playImage}
                    />
                </div>
                <div className='audio-player__progress-bar-wrap'>
                    <div
                        className='audio-player__progress-bar'
                        style={{
                            background: `linear-gradient(
                            to right, 
                            rgb(0, 188, 140) 0%, 
                            rgb(61, 133, 140) ${this.state.progress}%, 
                            rgb(115, 115, 115) ${this.state.progress}%, 
                            rgb(115, 115, 115) 100%
                            )`}}
                    >
                        <div
                            style={{ left: `${this.state.progress}%` }}
                            className='audio-player__point'></div>
                    </div>
                    <div className='audio-player__progress-bar-info'>
                        <span>
                            {this.state.currentTime}
                        </span>
                        <span>
                            {this.state.duration}
                        </span>
                    </div>
                </div>

                <p>{this.props.duration}</p>
            </div >
        )
    }
}

AudioPlayer.propTypes = {
    audioPath: PropTypes.string,
    isGuessed: PropTypes.bool
}

export default AudioPlayer;