import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  width: 200px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  font: inherit;
  font-weight: bold;
  border: 2px solid #ffcc80;
  border-radius: 5px;
  color: #00008b;
  background-color: #f90;
  margin-right: 20px;

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

class ResetButton extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.resetBoard();
  }

  render() {
    return (
      <Button onClick={this.handleClick}>Reset board</Button>
    );
  }
}

export default ResetButton;
