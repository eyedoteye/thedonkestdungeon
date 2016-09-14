import React, { Component } from 'react';
import './App.css';
import { getStoryBlock } from './actions.js';

class App extends Component { render() { return (
  <div className="App">
    <Story
      store={this.props.store}
      currentStory={this.props.store.getState().storyBlocks}/>
  </div>
);}}

class Story extends Component {
  render() {
  let storyBlocks = this.props.currentStory.map((storyBlock) => 
    <StoryBlock store={this.props.store} {...storyBlock}/>
  );
  return (
    <div className="Story">
      { storyBlocks }
    </div>
  );
}}

class StoryBlock extends Component { render() {
  let navElements = this.props.navElements.map((navElement) => 
    <NavElement store={this.props.store} disabled={this.props.disabled} parentid={this.props.id} {...navElement} />
  );
  let style = {};
  if (this.props.width){
    style = {'maxWidth': this.props.width};
  }
  return (
    <div className="StoryBlock" style={style}>
      <div>
        <TextElements textElements={this.props.textElements} />
      </div>
      <div>
        { navElements }
      </div>
    </div>
  );
}}

class TextElements extends Component { render() {
  let textElements = this.props.textElements.map((textElement) =>
    <TextElement {...textElement} />
  );
  return (
    <div>
      { textElements }
    </div>
  );
}}

class TextElement extends Component { render() { 
  let text = this.props.text;
  switch (this.props.style) {
    case "bold":
      text = (<b> { text } </b>);
      break;
    case "superbold":
      text = (<h1> { text } </h1>);
      break;
    case "italic":
      text = (<i> { text } </i>);
      break;
    default:
      break;
  }
  if (this.props.newline) {
    text = (<div> { text } </div>);
  }

  return (
    <span>
      { text }
    </span>
);}}

class NavElement extends Component {
  render() { return (
    <button
      ref="navElement"
      className="NavElement"
      disabled={this.props.disabled}
      onClick={() => {
        this.props.store.dispatch({
          type: 'ADD_STORYBLOCK',
          storyBlock: getStoryBlock(this.props.keyToStoryBlock),
        });
        this.props.store.dispatch({
          type: 'TOGGLE_STORYBLOCK',
          id: this.props.parentid,
        });
      }}
    >
      {this.props.text}
    </button>
  );}
}

export default App;