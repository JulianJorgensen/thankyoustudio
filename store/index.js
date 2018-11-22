import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

export const initialState = {
  navColor: 'black',
  hasMouseLeftNextSlide: true,
  slider: {
  }
};

export function initializeStore () {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
