import { combineReducers } from 'redux';
import board from './board';
import cards from './cards';
import profile from './profile';
import score from './score';

const rootReducer = combineReducers({
  board,
  cards,
  profile,
  score
});

export default rootReducer;
