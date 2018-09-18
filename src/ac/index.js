import {
  TOGGLE_GAME_ACTIVE,
  CHANGE_CARDS_SKIRT,
  CHANGE_DIFFICULTY,
  SET_TOTAL_TIME,
  RESET_GAME,
  FLIP_CARD_UP,
  FLIP_FIRST_CARD_UP,
  SELECT_CORRECT_CARD,
  FLIP_CARDS_DOWN,
  HIDE_CARDS,
  RESET_CARDS,
  FILL_PROFILE,
  GET_SCORE,
  SEND_RESULT
} from '../constants';

export const toggleGameActive = (flag) => ({
  type: TOGGLE_GAME_ACTIVE,
  flag
});

export const changeCardsSkirt = (skirt) => ({
  type: CHANGE_CARDS_SKIRT,
  skirt
});

export const changeDifficulty = (difficulty) => ({
  type: CHANGE_DIFFICULTY,
  difficulty
});

export const setTotalTime = (time) => ({
  type: SET_TOTAL_TIME,
  time
});

export const resetGame = () => ({
  type: RESET_GAME
});

export const flipCardUp = (id, value) => ({
  type: FLIP_CARD_UP,
  id,
  value
});

export const flipFirstCardUp = (flag) => ({
  type: FLIP_FIRST_CARD_UP,
  flag
});

export const selectCorrectCard = () => ({
  type: SELECT_CORRECT_CARD
});

export const flipCardsDown = () => ({
  type: FLIP_CARDS_DOWN
});

export const hideCards = () => ({
  type: HIDE_CARDS
});

export const resetCards = () => ({
  type: RESET_CARDS
});

export const fillProfile = (name, email) => ({
  type: FILL_PROFILE,
  name,
  email
});

export const getScore = (data) => ({
  type: GET_SCORE,
  data
});

export const sendResult = (name, email, score) => ({
  type: SEND_RESULT,
  name,
  email,
  score
});