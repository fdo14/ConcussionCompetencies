import { CHANGE_CLASS } from '../actions/types';

const INITIAL_STATE = {
  classList: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CHANGE_CLASS:
      return {...state, classList: action.payload}
    default:
      return state;
  }
};
