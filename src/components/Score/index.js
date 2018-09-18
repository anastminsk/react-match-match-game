import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getScore } from '../../ac';
import { URL, TOP_RESULTS } from '../../constants';
import ScoreItem from '../ScoreItem';
import LinkButton from '../LinkButton';

const GameScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingMessage = styled.div`
  font-size: 24px;
  margin: 30px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 70%;
  margin: 30px auto;
`;

const Th = styled.th`
  padding: 10px 7px;
  text-align: left;
  background-color: #ffcc80;
  font-size: 20px;
  border: 2px solid #00008b;
`;

const compareScore = (a, b) => {
  return b.score - a.score;
}

class Score extends Component {
  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(data => this.props.getScore(data))
    .catch(error => this.props.getScore(error));
  }

  render() {
    if (Object.keys(this.props.score).length === 0) return <LoadingMessage>Loading score results...</LoadingMessage>
    const fullScoreData = this.props.score.result.slice().sort(compareScore);
    const topScoreData = fullScoreData.map((item, index) => {
      return <ScoreItem key={index} name={item.username} email={item.email} score={item.score}/>
    }).slice(0, TOP_RESULTS);
    return (
      <GameScore>
        <h2>Top {TOP_RESULTS} results</h2>
        <Table>
          <thead>
            <tr>
              <Th>User name</Th>
              <Th>Email</Th>
              <Th>Score</Th>
            </tr>
          </thead>
          <tbody>
            {topScoreData}
          </tbody>
        </Table>
      <LinkButton location='/' name="Go to Start"/>  
      </GameScore>  
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.score
});

export default connect(mapStateToProps, { getScore })(Score);