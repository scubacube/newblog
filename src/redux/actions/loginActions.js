import axios from "axios";
import {
    SET_USER,
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_UI,
    SET_UNAUTHENTICATED,
    SET_AUTHENTICATED, LOADING_UI_CLEAR
} from './../types';

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
};

export const loginUserAction = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
        .post('/login', userData)
        .then(res => {
            setAuthorizationHeader(res.data.token);
            dispatch({ type: SET_AUTHENTICATED });
            dispatch({ type: SET_USER });
            dispatch({ type: LOADING_UI_CLEAR });
            history.push('/');
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err
            });
            dispatch({type: CLEAR_ERRORS});
        });
}

export const logoutUser = (history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
    dispatch({ type: LOADING_UI_CLEAR });
    history.push('/');
};
