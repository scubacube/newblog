import {
    SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_USER, LOADING_UI, LOADING_UI_CLEAR,
} from './../types';

const initialState = {
    authenticated: false,
    loading: false,
    credentials: {},
};

export const user = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return initialState;

        case SET_USER: {
            return {
                ...action.payload,
                authenticated: true,
            }
        }
        case LOADING_UI: {
          return {
              ...state,
              loading: true
          }
        }
        case LOADING_UI_CLEAR: {
          return {
              ...state,
              loading: false
          }
        }
        default : return state;
    }
}
