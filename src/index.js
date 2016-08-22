import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';

//Data
var key = 0;
var currentStory = [
  { key: key++,
    textElements: [
      { key: key++,
        text: "You have found yourself within,",
        style: "italic",
      },
      { key: key++,
        text: "The Dankest Dungeon",
        style: "superbold",
        newline: true,
      },
    ],
    navElements: [
      { key: key++,
        text: String.fromCharCode(parseInt(4036993683,16)),
      },
    ],
  },
  { key: key++,
    width: 530,
    textElements: [
      { key: key++,
        text: "The floor is musty, the air is moist. Yup, this is definitely " +
              "a dank dungeon. Hobling up from your decrepit position, you look up " +
              "at the unfortunate hole you must have fallen through. Your composure regained, " +
              "you point upwards with the muster of a thousand soaring eagles and beseech, ",
      },
      { key: key++,
        text:  "\"That hole, is the hole, that I have fallen in through.\"",
        style: "bold",
        newline: true,
      },
    ],
    navElements: [
      { key: key++,
        text: "\u{25BC}",
      },
    ],
  },
  { key: key++,
    width: 660,
    textElements: [
      { key: key++,
        text: "Your smug feeling of keen awareness is shortly " +
              "disposed of by the sudden",
      },
      { key: key++,
        text: "thump, flunk, whoopash",
        style: "italic",
      },
      { key: key++,
        text: "of a falling shoe flinging off " +
              "your shoulder and rocketing off into the distance.",
      },
    ],
    navElements: [
      { key: key++,
        text: "\u{25BC}",
      },
    ],
  },
  { key: key++,
    textElements: [
      { key: key++,
        text: "Something truly incredible has occured.",
      },
    ],
    navElements: [
      { key: key++,
        text: "\u{25BC}",
      },
    ],
  },  
  { key: key++,
    textElements: [
      { key: key++,
        text: "You have turned into a beautiful rocket ship.",
      },
    ],
    navElements: [
      { key: key++,
        text: "\u{25BC}",
      },
    ],
  },
  { key: key++,
    width: 620,
    textElements: [
      { key: key++,
        text: "Author's Note:",
        style: "bold"
      },
      { key: key++,
        text: "My dear reader, I am concerned about your intentions." +
              " I must ask you a question, and I urge you to please respond honestly." +
              " There are.. there are certain things at stake here." +
              " Certain.. important things.. and if I could further italicize important, trust me," +
              " I would.",
        style: "italic",
        newline: true,
      },
      { key: key++,
        text: "When you find that shoe, what will you do?",
        style: "italic",
      },
    ],
    navElements: [
      { key: key++,
        text: "Eat The Shoe",
      },
      { key: key++,
        text: "Do Not Eat The Shoe",
      },
      { key: key++,
        text: "Punch The Shoe",
      },
      { key: key++,
        text: "There Is No Shoe",
      },
    ],
  },
]

//Reducers
var storyBlocks = (state = [], action) => { switch (action.type) {
  case "ADD_STORYBLOCK":
    return [
      ...state,
      action.storyBlock,
    ];
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
	  <App currentStory={store.getState().storyBlocks}/>,
	  document.getElementById('root')
	);
};

store.subscribe(render);

store.dispatch({
  type: 'ADD_STORYBLOCK',
  storyBlock: currentStory[0],
});

store.dispatch({
  type: 'ADD_STORYBLOCK',
  storyBlock: currentStory[1],
});

store.dispatch({
  type: 'ADD_STORYBLOCK',
  storyBlock: currentStory[2],
});

store.dispatch({
  type: 'ADD_STORYBLOCK',
  storyBlock: currentStory[3],
});

store.dispatch({
  type: 'ADD_STORYBLOCK',
  storyBlock: currentStory[4],
});

store.dispatch({
  type: 'ADD_STORYBLOCK',
  storyBlock: currentStory[5],
});

console.log('hi',store.getState());

