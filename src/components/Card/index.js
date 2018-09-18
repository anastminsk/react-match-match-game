import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import img1 from '../../assets/img/skirts/bells.png';
import img2 from '../../assets/img/skirts/santa.png';
import img3 from '../../assets/img/skirts/tree.png';
import bg1 from '../../assets/img/santas/santa-01.png';
import bg2 from '../../assets/img/santas/santa-02.png';
import bg3 from '../../assets/img/santas/santa-03.png';
import bg4 from '../../assets/img/santas/santa-04.png';
import bg5 from '../../assets/img/santas/santa-05.png';
import bg6 from '../../assets/img/santas/santa-06.png';
import bg7 from '../../assets/img/santas/santa-07.png';
import bg8 from '../../assets/img/santas/santa-08.png';
import bg9 from '../../assets/img/santas/santa-09.png';
import bg10 from '../../assets/img/santas/santa-10.png';
import bg11 from '../../assets/img/santas/santa-11.png';
import bg12 from '../../assets/img/santas/santa-12.png';
import bg13 from '../../assets/img/santas/santa-13.png';
import bg14 from '../../assets/img/santas/santa-14.png';
import bg15 from '../../assets/img/santas/santa-15.png';
import bg16 from '../../assets/img/santas/santa-16.png';

const OpenedCard = styled.div`
  border: 1px solid #4db8ff;
  border-radius: 15px;
  width: 100px;
  height: 100px;
  margin: 10px;
  font-size: 64px;
  cursor: pointer;
  text-align: center;
  line-height: 150%;
  color: #00008b;
  background: #b3e0ff url(${props => 
    (props.bg === 'A') ? bg1 : 
    (props.bg === 'B') ? bg2 : 
    (props.bg === 'C') ? bg3 : 
    (props.bg === 'D') ? bg4 : 
    (props.bg === 'E') ? bg5 : 
    (props.bg === 'F') ? bg6 : 
    (props.bg === 'G') ? bg7 : 
    (props.bg === 'H') ? bg8 : 
    (props.bg === 'I') ? bg9 : 
    (props.bg === 'J') ? bg10 : 
    (props.bg === 'K') ? bg11 : 
    (props.bg === 'L') ? bg12 : 
    (props.bg === 'M') ? bg13 : 
    (props.bg === 'N') ? bg14 : 
    (props.bg === 'O') ? bg15 : bg16}) 50% 50% no-repeat;   
`;

const HiddenCard = styled.div`
  visibility: hidden;
  width: 100px;
  height: 100px;
  margin: 10px;
`;

const ClosedCard = styled.div`
  border: 1px solid #00008b;
  border-radius: 15px;
  width: 100px;
  height: 100px;
  margin: 10px;
  font-size: 64px;
  cursor: pointer;
  text-align: center;
  line-height: 150%;
  background: #4db8ff url(${props => (props.bg === 'bells') ? img1 : (props.bg === 'santa') ? img2 : img3}) 50% 50% no-repeat;
  
  &:hover {
    background-color: #b3e0ff;
  }
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { id, value, handleClick } = this.props;
    handleClick(id, value);
  }

  render() {
    const { id, value, matchedIndexes, coupleIndexes, skirt } = this.props;
    if (matchedIndexes.indexOf(id) !== -1) {
      if (coupleIndexes.indexOf(id) === -1) {
        return <OpenedCard bg={value} onClick={this.onClick}></OpenedCard>;
      } else {
        return <HiddenCard></HiddenCard>;
      }     
    } else {
        return <ClosedCard bg={skirt} onClick={this.onClick}></ClosedCard>;
    }
  }
}

const mapStateToProps = (state) => ({
  matchedIndexes: state.cards.matchedIndexes,
  coupleIndexes: state.cards.coupleIndexes,
  skirt: state.board.skirt
});

export default connect(mapStateToProps)(Card);
