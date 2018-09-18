import React from 'react';
import styled from 'styled-components';
import Timer from '../Timer';
import Setter from '../Setter';
import GameBoard from '../GameBoard';
import LinkButton from '../LinkButton';

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px; 
`;

const Game = () => {
  return (
    <div>
      <Timer />
      <Setter />
      <GameBoard />
      <NavButtons>
        <LinkButton location="/" name="Go to Start"/>
        <LinkButton location="/score" name="Show Score"/>
      </NavButtons>
    </div>
  );
}

export default Game;