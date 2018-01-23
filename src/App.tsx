import * as React from 'react';
// import * as logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App" onClick={e => {console.log(e);}}>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started with TS, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
