import {
  TOGGLE_GAME_ACTIVE,
  CHANGE_CARDS_SKIRT,
  CHANGE_DIFFICULTY,
  SET_TOTAL_TIME,
  RESET_GAME,
  SEND_RESULT,
  URL
} from '../constants';

import { createNewValues } from '../assets/helpers/data-constructor.js';

const initialState = {
  gameActive: false,
  skirt: 'bells',
  difficulty: '4x2',
  values: [ 'D', 'C', 'B', 'A', 'C', 'A', 'B', 'D'],
  totalTime: '0:00'
};

const board = (state = initialState, action) => {
  switch (action.type) {

    case TOGGLE_GAME_ACTIVE:
      return { ...state, gameActive: action.flag };

    case CHANGE_CARDS_SKIRT:
      return { ...state, skirt: action.skirt };  

    case CHANGE_DIFFICULTY:
      return { 
        ...state, 
        difficulty: action.difficulty, 
        values: createNewValues(action.difficulty)
      };

    case SET_TOTAL_TIME:
      return { ...state, totalTime: action.time };

    case RESET_GAME:
      return {
        ...state, 
        gameActive: false,
        skirt: 'bells',
        difficulty: '4x2',
        values: createNewValues(action.difficulty),
        totalTime: '0:00'
      };

    case SEND_RESULT:
      fetch(URL, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': 'cors_url',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: action.name,
          email: action.email,
          score: action.score
        })
      })
      .then((data) => {
        console.log('Request fulfilled', data);
      })
      .catch((error) => {
        console.log('Request rejected', error);
      });
      return state;   

    default:
      return state;
  }
};

export default board;