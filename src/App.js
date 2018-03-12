import React, { Component } from 'react';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import Timer from './Components/Timer';
import TodoApp from './Components/Todo';
import MarkdownEditor from './Components/MarkdownEditor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld  message="Hello World!"/>
        <Timer />
        <TodoApp />
        <MarkdownEditor />
      </div>
    );
  }
}

export default App;
