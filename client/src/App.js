import React , {Component} from 'react';
import Data from './Component/data';
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Data />
        </header>
      </div>
    );
  }
}

export default App;