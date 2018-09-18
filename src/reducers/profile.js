import { FILL_PROFILE } from '../constants';

const initialState = {
  name: '',
  email: ''
};

const profile = (state = initialState, action) => {
  switch (action.type) {

    case FILL_PROFILE:
      return {
        ...state, 
        name: action.name,
        email: action.email
      };

    default:
      return state;
  }
};

export default profile;
