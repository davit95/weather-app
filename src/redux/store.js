import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk));

export default store;
