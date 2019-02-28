



import React, { Component } from 'react';
import FilmsListContainer from './FilmsList/FilmsListContainer';
import './App.css';

class App extends Component {
  handleClick = () => {
    alert('I am clicked');
  };

  render() {
    return (
      <div className="App">
        <FilmsListContainer />
      </div>
    );
  }
}

export default App;
