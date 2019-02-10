/*
import posts from '../apis/posts';
import history from '../history';

import { SIGN_IN, SIGN_OUT, CHANGE_CLASS, CREATE_POST, FETCH_POSTS, EDIT_POST, DELETE_POST } from './types';

export const signIn = (userId) =>{
  return{
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return{
    type: SIGN_OUT
  };
};

export const changeClass = (classArray) => {
  return{
    type: CHANGE_CLASS,
    payload: classArray
  };
};

export const createPost = formValues => async (dispatch, getState) => {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      today = mm + '/' + dd + '/' + yyyy;

      var comments = [];

      const response = await posts.post('/posts', {...formValues, today, comments});

      dispatch({type: CREATE_POST, payload: response.data});
      history.push('/blog');
};

export const fetchPosts = () => async dispatch => {
  const response = await posts.get('/posts');
  dispatch({type: FETCH_POSTS, payload: response.data});
}


export const editPost = (id, formValues) => async dispatch => {
  const response = await posts.patch(`/posts/${id}`, formValues);
  dispatch({type: EDIT_POST, payload: response.data});
  history.push('/blog');
}

export const deletePost = (id) => async dispatch => {
  await posts.delete(`/posts/${id}`);
  dispatch({type: DELETE_POST, payload: id});
  history.push('/blog');
}
*/
