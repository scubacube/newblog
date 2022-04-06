import {SET_ALL_POSTS, CREATE_NEW_POST} from "../types";

let initState = {
  posts: [],
  postCount:  0
}

export const posts = (state = initState, action) => {
    switch (action.type) {
        case SET_ALL_POSTS: {
            return {
                ...state,
                posts: action.payload,
            }
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