import {applyMiddleware, createStore, compose, combineReducers} from "redux";
import {posts} from './reducers/postsReducer';
import thunk from "redux-thunk";
import {user} from "./reducers/userReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({posts, user}), composeEnhancers(
    applyMiddleware(thunk)
));

window.store = store;

export default store;