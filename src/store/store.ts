import { combineReducers } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './auth';
import { recipesReducer } from './recipes';


const rootReducer = combineReducers({
    auth: authReducer,
    recipes: recipesReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk),
    ),
);