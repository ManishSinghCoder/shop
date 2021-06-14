import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux'
import auth from './reducers/auth'

const initialState = {};

const middleware = [thunk];
const rootReducer = combineReducers({
    auth
})

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;