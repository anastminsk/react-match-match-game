import {
  FLIP_CARD_UP,
  FLIP_FIRST_CARD_UP,
  SELECT_CORRECT_CARD,
  FLIP_CARDS_DOWN,
  HIDE_CARDS,
  RESET_CARDS
} from '../constants';

const initialState = {
  coupleCards: [],
  matchedIndexes: [],
  coupleIndexes: [],
  pairsGuessed: 0,
  firstCardFlipped: false
};

const cards = (state = initialState, action) => {
  switch (action.type) {

    case FLIP_CARD_UP:
      return {
        ...state, 
        coupleCards: [...state.coupleCards, action.value],
        matchedIndexes: [...state.matchedIndexes, action.id]
      };

    case FLIP_FIRST_CARD_UP:
      return { ...state, firstCardFlipped: action.flag };   

    case SELECT_CORRECT_CARD:
      return {
        ...state,
        coupleCards: [],
        pairsGuessed: state.pairsGuessed + 1
      };

    case FLIP_CARDS_DOWN:
      return {
        ...state, 
        coupleCards: [],
        matchedIndexes: state.matchedIndexes.slice(0, state.matchedIndexes.length - 2)
      };

    case HIDE_CARDS:
      return { ...state, coupleIndexes: state.matchedIndexes };    

    case RESET_CARDS:
      return {
        ...state,
        coupleCards: [],
        matchedIndexes: [],
        coupleIndexes: [],
        pairsGuessed: 0,
        firstCardFlipped: false
      };

    default:
      return state;
  }
};

export default cards;
