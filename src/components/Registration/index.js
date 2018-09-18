import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fillProfile } from '../../ac';
import styled from 'styled-components';

const RegistrationBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  height: 300px;
  justify-content: space-between;
`;

const RegistrationLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100px;
  background-color: rgba(153, 0, 255, 0.5);
  color: #00008b;
  padding: 10px;
  border-radius: 10px;
  font-size: 22px;
`;

const RegistrationInput = styled.input`
  padding: 10px;
  width: 300px;
  border: 2px solid #00008b;
  outline: none;
  border-radius: 10px;
  margin-left: 10px;

  &:focus {
    background-color: #ffcc80;
    border: 2px solid #f90;
  }
`;

const SubmitInput = styled.input`
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

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fillProfile(this.state.name, this.state.email);
    this.props.history.push('/game');
  }

  render() {
    return (
      <RegistrationBlock>
        <h2>Fill in your profile, please</h2>
        <RegistrationForm onSubmit={this.handleSubmit}>
          <RegistrationLabel>Name:
            <RegistrationInput 
              type="text" 
              value={this.state.name} 
              onChange={this.handleChangeName} 
              placeholder="Enter your name" 
              required 
            />
          </RegistrationLabel>
          <RegistrationLabel>Email:
            <RegistrationInput 
              type="email" 
              value={this.state.email} 
              onChange={this.handleChangeEmail} 
              placeholder="Enter your email" 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
              required 
            />
          </RegistrationLabel>
          <SubmitInput type="submit" value="START GAME"/>
        </RegistrationForm>
      </RegistrationBlock>
    );  
  }
}

export default connect(null, { fillProfile })(Registration);
