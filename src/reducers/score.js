import { GET_SCORE } from '../constants';

const score = (state = {}, action) => {
  return (action.type === GET_SCORE) ? action.data : state;
}

export default score;