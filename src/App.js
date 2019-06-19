import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { CSSTransition } from 'react-transition-group';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }
  handleToggle() {
    this.setState({
      show: this.state.show ? false : true
    })
  }
}


export default App;
