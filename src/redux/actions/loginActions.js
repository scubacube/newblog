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
            history.push('/');
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err
            });
            dispatch({type: CLEAR_ERRORS});
        });
    dispatch({ type: LOADING_UI_CLEAR });
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
};

// export const getUserData = () => (dispatch) => {
//     dispatch({ type: LOADING_UI });
//     axios.get('/user').then(res => {
//         dispatch({type: SET_USER, payload: res.data})
//     }).catch(err => console.log(err));
//     dispatch({ type: LOADING_UI_CLEAR });
// }
