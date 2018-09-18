import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from '../Card';
import { 
  flipCardUp,
  flipFirstCardUp,
  toggleGameActive, 
  selectCorrectCard, 
  flipCardsDown, 
  hideCards, 
  resetCards, 
  resetGame,
  sendResult 
} from '../../ac';

const Board = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  background: #ffcc80;
  width: ${props => (props.size === '4x2') ? '480px' : (props.size === '6x3') ? '720px' : '960px'};
`;

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.checkPairs = this.checkPairs.bind(this);
    this.resetGameBoard = this.resetGameBoard.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  startGame() {
    const { flipFirstCardUp, toggleGameActive } = this.props;
    flipFirstCardUp(true);
    toggleGameActive(true);
  }

  checkPairs(value) {
    const { 
      coupleCards, 
      matchedIndexes, 
      values, 
      selectCorrectCard, 
      flipCardsDown, 
      hideCards, 
      sendResult, 
      name, 
      email, 
      pairsGuessed 
    } = this.props;

    if (coupleCards.length === 1) {
      if (coupleCards[0] === value) {
        selectCorrectCard();
        setTimeout(hideCards, 400);
      } else {
        setTimeout(flipCardsDown, 400);
      }
    }

    if (matchedIndexes.length >= values.length - 1) {
      sendResult(name, email, pairsGuessed + 1);
      setTimeout(this.resetGameBoard, 600);
    }
  }  

  resetGameBoard() {
    const { resetCards, resetGame } = this.props;
    alert('Congratulations! You won the game!');
    resetCards();
    resetGame();
  }

  handleClick(id, value) { 
    const { matchedIndexes, firstCardFlipped, flipCardUp } = this.props;

    if (!firstCardFlipped) {
      this.startGame();
    }

    if (matchedIndexes.indexOf(id) === -1) {
      flipCardUp(id, value);
      this.checkPairs(value);
    }
  }

  render() {
    const { values, difficulty } = this.props;
    let boardElements = values.map((val, index) =>
      <Card
        {...this.props}
        key={index}
        id={index}
        value={val}
        handleClick={this.handleClick} 
      />
    );

    return (
      <Board size={difficulty}>
        {boardElements}
      </Board>
    );
  }
}

const mapStateToProps = (state) => ({
  values: state.board.values,
  difficulty: state.board.difficulty,
  coupleCards: state.cards.coupleCards,
  matchedIndexes: state.cards.matchedIndexes,
  pairsGuessed: state.cards.pairsGuessed,
  firstCardFlipped: state.cards.firstCardFlipped,
  name: state.profile.name,
  email: state.profile.email
});

export default connect(mapStateToProps, { 
  flipCardUp, flipFirstCardUp, toggleGameActive, selectCorrectCard, 
  flipCardsDown, hideCards, resetCards, resetGame, sendResult
})(GameBoard);
