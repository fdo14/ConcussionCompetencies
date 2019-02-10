import { SET_BLOG } from '../actions/types';

const INITIAL_STATE = {
  blogInQuestion: 0
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SET_BLOG:
      return {...state, blogInQuestion: action.payload}
    default:
      return state;
  }
};
