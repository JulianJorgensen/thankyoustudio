import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

export const initialState = {
  activeSlide: {
    key: 0,
    id: 'ThankYou',
    contentColor: 'white'
  }
}

export function initializeStore () {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
