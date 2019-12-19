import React from 'react';
import './App.css';
import active from './es-six-lectures/rest-spread/rest-spread'

class App extends React.Component {
  componentDidMount(){
    active()
  }
  render(){
    return (
      <div className="App" style={{marginTop: '50vh', color:'darkGreen'}}>
        Tyler's App Runs ES6 Code! <br/>
        See Console for ES6 Code :)
      </div>
    );
  }
}

export default App;
