import {
  CREATE_COMMENT, FETCH_COMMENTS, DELETE_COMMENT
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
  switch(action.type) {
    case CREATE_COMMENT:
      return {...state};
    case FETCH_COMMENTS:
      return{...state, ..._.mapKeys(action.payload, 'id')};
    case DELETE_COMMENT:
      return {...state};
    default:
      return state;
  }
};
