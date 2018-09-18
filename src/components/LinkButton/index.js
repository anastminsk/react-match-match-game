import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  width: 200px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  font: inherit;
  font-weight: bold;
  border: 2px solid #00008b;
  border-radius: 5px;
  color: #00008b;
  background-color: #cc80ff;

  &:hover {
    background-color: #ffcc80;
    border-color: #f90;
    cursor: pointer;
  }

  &:active {
    color: #ffcc80;
    background-color: #06b;
    border-color: #00008b;
  }
`;

const LinkButton = (props) => {
  return (
    <Link to={props.location}><Button>{props.name}</Button></Link>
  );
}

export default LinkButton;