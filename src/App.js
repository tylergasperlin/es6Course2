import React from 'react';
import './App.css';
import active from './es-six-lectures/find/find2-2'

class App extends React.Component {
  componentDidMount(){
    active()
  }
  render(){
    return (
      <div className="App" style={{marginTop: '50vh', color:'darkGreen'}}>
        Tyler's App Runs Code! <br/>
        See Console for Code :)
      </div>
    );
  }

}

export default App;
