import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { getStoryBlock } from './actions.js'

//Reducers
var storyBlocks = (state = [], action) => { switch (action.type) {
  case "ADD_STORYBLOCK":
    return [
      ...state,
      action.storyBlock,
    ];
  case "TOGGLE_STORYBLOCK":
  	return state.map(block => 
  		block.id === action.id ? {
  			...block,
  			disabled: !block.disabled
  		} : block
  	);
  default:
    return state;
}};

import { combineReducers, applyMiddleware } from 'redux';

const logger = store => next => action => {
	console.group();
	console.log('last state', store.getState());
	console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	console.groupEnd();

	return result;
}

const app = combineReducers({
	storyBlocks
})

const store = createStore(
	app,
	applyMiddleware(logger),
);

function render() {
		ReactDOM.render(
		  <App store={store} />,
		  document.getElementById('root')
		);
};

store.subscribe(render);

store.dispatch({
  type: 'ADD_STORYBLOCK',
  storyBlock: getStoryBlock("Start"),
});

console.log('hi',store.getState());