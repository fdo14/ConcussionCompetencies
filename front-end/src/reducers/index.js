import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';


import authReducer from './authReducer';
import changeClassReducer from './changeClassReducer';
import blogReducer from './blogReducer';
import commentsReducer from './commentsReducer';
import blogChoiceReducer from './blogChoiceReducer';

export default combineReducers({
  auth: authReducer,
  changeClass: changeClassReducer,
  form: formReducer,
  blog: blogReducer,
  comments: commentsReducer,
  choice: blogChoiceReducer
});
