import {
  CREATE_POST, FETCH_POSTS, EDIT_POST, DELETE_POST
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
  switch(action.type) {
    case CREATE_POST:
      return{...state};
    case FETCH_POSTS:
      return{...state, ..._.mapKeys(action.payload, 'id')};
    case EDIT_POST:
      return{...state};
    case DELETE_POST:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
