import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { changeCardsSkirt, changeDifficulty, resetCards } from '../../ac';
import Option from '../Option';
import ResetButton from '../ResetButton';

const SettingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  margin: 0 auto;
  background-color: #add8e6;
`;

const OptionColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 200px;
`;

const ScoreColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 100px;
  color: #00008b;
  font-weight: bold;
  margin-left: 20px;
`;

const ResetButtonColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Select = styled.select`
  width: 100px;
  padding: 5px;
  border: 2px solid #f90;
  border-radius: 5px;
  font: inherit;
  height: 35px;
  color: #00008b;
  margin-left: 20px;
`;

class Setter extends Component {
  constructor(props) {
    super(props);
    this.handleCardsSkirt = this.handleCardsSkirt.bind(this);
    this.handleDifficulty = this.handleDifficulty.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleCardsSkirt(e) {
    this.props.changeCardsSkirt(e.target.value); // change cards skirt
  }

  handleDifficulty(e) {
    this.props.changeDifficulty(e.target.value); // change difficulty
    this.props.resetCards(); // reset cards with new difficulty
  }

  handleReset() {
    this.props.resetCards();
  }

  render() {
    return (
      <SettingRow>
        <OptionColumn>
          <Select onChange={this.handleCardsSkirt}>
            <Option value='bells' />
            <Option value='santa' />
            <Option value='tree' />
          </Select>
          <Select onChange={this.handleDifficulty}>
            <Option value='4x2' />
            <Option value='6x3' />
            <Option value='8x4' />
          </Select>
        </OptionColumn>
        <ScoreColumn>
          Score: {this.props.pairsGuessed}
        </ScoreColumn>
        <ResetButtonColumn>
          <ResetButton resetBoard={this.handleReset}/>
        </ResetButtonColumn>
      </SettingRow>
    );
  }
}

const mapStateToProps = (state) => ({
  pairsGuessed: state.cards.pairsGuessed
});

export default connect(mapStateToProps, { changeCardsSkirt, changeDifficulty, resetCards })(Setter);