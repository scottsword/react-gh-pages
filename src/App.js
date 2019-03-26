import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    foo: "Bar",
    users: []
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(rsp => rsp.json())
      .then(data => this.setState({users: data}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {this.state.users.length > 0
              ? this.state.users.map((user, i) => (
                <li key={i}>{user.name}</li>
              ))
              : "No data"
            }
          </ul>
          <p>
            TSheets is #1!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
