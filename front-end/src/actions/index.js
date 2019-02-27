import posts from '../apis/posts';
import history from '../history';
import axios from 'axios';

import { SIGN_IN, SIGN_OUT, CHANGE_CLASS, CREATE_POST,
        FETCH_POSTS, EDIT_POST, DELETE_POST, CREATE_COMMENT, FETCH_COMMENTS,
        SET_BLOG, DELETE_COMMENT} from './types';

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

export const setBlog = (blogId) => {
  return{
    type: SET_BLOG,
    payload: blogId
  };
}


export const changeClass = (classArray) => {
  return{
    type: CHANGE_CLASS,
    payload: classArray
  };
};

export const createPost = (formValues, postArray) => async (dispatch, getState) => {
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
      var idToBeAdded;
      if(postArray.length > 0){
        idToBeAdded = postArray[postArray.length-1].id + 1;
      } else {
        idToBeAdded = 0;
      }

      console.log(postArray.length);

      const response = await axios.post("https://www.concussioncompetencies.com:5001/api/putData", {
        id: idToBeAdded,
        message: formValues.message,
        name: formValues.name,
        title: formValues.title,
        date: today
      });

      await axios.post("https://www.concussioncompetencies.com:5001/api/putComment", {
        id: idToBeAdded
      });

      dispatch({type: CREATE_POST, payload: response.data});
      history.push('/blog');

};

export const fetchPosts = () => async dispatch => {
  fetch("https://www.concussioncompetencies.com:5001/api/getData")
      .then(data => data.json())
      .then(res => dispatch({type: FETCH_POSTS, payload: res.data}));
}

export const fetchComments = () => async dispatch => {
  fetch("https://www.concussioncompetencies.com:5001/api/getComments")
      .then(data => data.json())
      .then(res => dispatch({type: FETCH_COMMENTS, payload: res.data}));
}


export const editPost = (idToUpdate, formValues, postArray) => async dispatch => {

    let objIdToUpdate = null;
    postArray.forEach(dat => {
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    const response = await axios.post("https://www.concussioncompetencies.com:5001/api/updateData", {
      id: objIdToUpdate,
      update: {
        message: formValues.message,
        name: formValues.name,
        title: formValues.title,
      }
    });

    dispatch({type: EDIT_POST, payload: response.data});
    history.push('/blog');
}

export const deletePost = (idTodelete, postArray) => async dispatch => {

    let objIdToDelete = null;
    postArray.forEach(dat => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });


    await axios.delete("https://www.concussioncompetencies.com:5001/api/deleteData", {
      data: {
        id: objIdToDelete
      }
    });

    dispatch({type: DELETE_POST, payload: idTodelete});
    history.push('/blog');
}

export const deleteComment = (idTodelete, commentArray, title, userId) => async dispatch => {
  let objIdToDelete = null;
  commentArray.forEach(dat => {
    if (dat.id == idTodelete) {
      objIdToDelete = dat._id;
    }
  });

  await axios.delete("https://www.concussioncompetencies.com:5001/api/deleteComment", {
    data: {
      id: objIdToDelete,
      title: title,
      userId: userId
    }
  });

  dispatch({type: DELETE_COMMENT, payload: idTodelete});


}

export const createComment = (userId, comment, postArray, googleId) => async dispatch => {
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

  let objIdToDelete = null;
  postArray.forEach(dat => {
    if (dat.id == userId) {
      objIdToDelete = dat._id;
    }
  });

  const commentObj ={
    comment: comment,
    date: today,
    googleId: googleId
  }

  const response = await axios.post("https://www.concussioncompetencies.com:5001/api/addArrayElement",{
    id: objIdToDelete,
    comment: commentObj,
  });

  dispatch({type: CREATE_COMMENT, payload: response.data});
}
