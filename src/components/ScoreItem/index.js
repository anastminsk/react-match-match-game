import React from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
  border: 2px solid #00008b;
  
  &:hover {
    background-color: #00008b;
    color: #fff;
    cursor: pointer;
  }
`;

const Td = styled.td`
  padding: 7px;
  border: 2px solid #00008b;
`;

const ScoreItem = (props) => {
  return (
    <Tr>
      <Td>{props.name}</Td>
      <Td>{props.email}</Td>
      <Td>{props.score}</Td>
    </Tr>
  );
}

export default ScoreItem;