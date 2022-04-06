import axios from "axios";
import {SET_ALL_POSTS, CREATE_NEW_POST, LOADING_UI, LOADING_UI_CLEAR} from "../types";

export const setAppPostAction = (payload) => {
    return {
        type: SET_ALL_POSTS,
        payload
    }
}
export const createNewPostAction = (payload) => {
  return {
      type: CREATE_NEW_POST,
      payload
  }
}

export const getAllPost = () => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios.get('/posts')
        .then(result => {
          dispatch(setAppPostAction(result.data));
        })
        .catch(err => console.log(err))
    dispatch({ type: LOADING_UI_CLEAR });
}

export const createNewPost = (post, history) => (dispatch) => {  
  dispatch({ type: LOADING_UI });
    axios.post('/newpost', post)
        .then(result => {
          dispatch(createNewPostAction(result.data));
          dispatch({ type: LOADING_UI_CLEAR });
          history.push('/')
        })
        .catch(err => console.log(err))
    
}