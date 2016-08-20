import React, { Component } from 'react';
import './App.css';

var key = 0;
var storyBlocks = [
  { key: key++,
    textElements: [
      { key: key++,
        paragraphs: [
          { key: key++,
            text: "You have found yourself within," },
          { key: key++,
            text: "The Dankest Dungeon",
            style: "bold",
          },
          { key: key++,
            text: "" },
        ],
      },
    ],
    navElements: [
      { key: key++,
        text: "Continue",

      },
    ],
  },
]

class App extends Component { render() { return (
  <div className="App">
    <Story storyBlocks={storyBlocks} />
  </div>
);}}

class Story extends Component { render() {
  let storyBlocks = this.props.storyBlocks.map((storyBlock) => 
    <StoryBlock {...storyBlock} />
  );
  return (
    <div>
      { storyBlocks }
    </div>
  );
}}

class StoryBlock extends Component { render() {
  let navElements = this.props.navElements.map((navElement) => 
    <NavElement {...navElement} />
  );
  let textElements = this.props.textElements.map((textElement) =>
    <TextElement {...textElement} />
  );
  return (
    <div className="StoryBlock">
      <div>
        { textElements }
      </div>
      <div>
        { navElements }
      </div>
    </div>
  );
}}

class TextElement extends Component { render() {
  let paragraphs = this.props.paragraphs.map((paragraph) => 
    <Paragraph {...paragraph}/>
  );
  return (
    <div>
      { paragraphs }
    </div>
  );
}}

import './Paragraph.css';

class Paragraph extends Component { render() { 
  let text = this.props.text;
  if (this.props.style == "bold") {
    text = (<b> { this.props.text } </b>);
  }

  return (
    <p> { text } </p>
);}}

class NavElement extends Component {
  render() { return (
    <button>{this.props.text}</button>
  );}
}

class TextBox extends Component {
  constructor() {
    super();
    this.onChange = (e) => console.log(e);
    this.state = {text: 'hello'};
  }

  render() { return (
  <form>
    <input onChange={this.onChange} value={this.state.text}/>
  </form>
);}}


export default App;