import React from 'react';
import styled from 'styled-components';
import LinkButton from '../LinkButton';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Guide = styled.section`
  align-self: flex-start;
  margin-left: 20px;
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Description = () => {
  return (
    <Content>
      <h1>Welcome to the Match-Match Game!</h1>
      <h2>Please select the skirt of the cards and the game difficulty.</h2>
      <Guide>
        <h2>How to play:</h2>
        <p>This is a counter game where the object is to find pairs.</p>
        <p>When the game begins, all pictures are hidden.</p>
        <ol>
          <li>Select two cards to try to match the pictures.</li>
          <li>If you match the pictures you can go again.</li>
          <li>If they don&apos;t match the computer turn them.</li>
          <li>The player that finds all pairs wins.</li>
          <li>Have Fun!</li>
        </ol>
      </Guide>
      <NavButtons>
        <LinkButton location="/registration" name="New Game"/>
        <LinkButton location="/score" name="Show Score"/>
      </NavButtons>
    </Content>
  );
}

export default Description;
