



import React, { Component } from 'react';
import PageTitle from './PageTitle';
import Button from './Button';
import TextInputWithOutput from './TextInputWithOutput';
import List from './List';
import './App.css';

const NUMBERS = [{
  key: 1,
  value: 10,
}, {
  key: 2,
  value: 20,
}, {
  key: 3,
  value: 30,
}, {
  key: 4,
  value: 40,
}, {
  key: 5,
  value: 50,
}, {
  key: 6,
  value: 60,
},];

class App extends Component {
  handleClick = () => {
    alert('I am clicked');
  };

  render() {
    return (
      <div className="App">
        <PageTitle />
        <button onClick={this.handleClick}>
          Click me!
        </button>
          <br />
          <br />
          <Button
              name="Click Primary Button"
              type="submit"
              variant="primary"
              onClick={this.handleClick}
          />
          <br />
          <br />
          <Button
              name="Click Secondary Button"
              variant="secondary"
              onClick={this.handleClick}
          />
          <br />
          <br />
          <Button
              name="Click Danger Button"
              variant="danger"
              onClick={this.handleClick}
          />
          <br />
          <br />
          <Button
              name="Click Disabled Danger Button"
              variant="danger"
              isDisabled
              onClick={this.handleClick}
          />
          <br />
          <br />
        <TextInputWithOutput />
        <List items={NUMBERS} />
      </div>
    );
  }
}

export default App;
