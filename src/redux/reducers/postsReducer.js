import {SET_ALL_POSTS, CREATE_NEW_POST} from "../types";

let initState = {
  posts: [],
  postCount:  0
}

export const posts = (state = initState, action) => {
    switch (action.type) {
        case SET_ALL_POSTS: {
          let stateCopy = {...state};
          stateCopy.posts = action.payload
          stateCopy.postCount = action.payload.length
          
          return stateCopy
        }
        case CREATE_NEW_POST: {
          return {
            ...state,
            ...state.posts.push(action.payload),
            ...state.postCount++
          }
      }
        default:  return state;
    }
}