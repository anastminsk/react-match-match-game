import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setTotalTime } from '../../ac';
import { formatTime } from '../../assets/helpers/timer-constructor.js';

const GameTimer = styled.div`
  width: 140px;
  margin: 20px;
  font-size: 20px;
  font-weight: bold;
`;

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000); 
    this.props.setTotalTime(formatTime(this.state.secondsElapsed));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    if (this.props.firstCardFlipped) {
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      });
    } else {
      this.setState({
        secondsElapsed: 0
      });
    }
  }

  render() {
    return <GameTimer>Time: {formatTime(this.state.secondsElapsed)}</GameTimer>
  }
}

const mapStateToProps = (state) => ({
  firstCardFlipped: state.cards.firstCardFlipped
});

export default connect(mapStateToProps, { setTotalTime })(Timer);
