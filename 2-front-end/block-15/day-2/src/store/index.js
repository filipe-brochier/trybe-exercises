import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { signalReducer, carReducer } from '../reducers';

const rootReducer = combineReducers({ signalReducer, carReducer });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
