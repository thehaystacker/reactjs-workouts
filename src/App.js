import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person.js";

class App extends Component {
  state = {
    users: [
      {name: 'Sangeeth', age: 24},
      {name: 'Sarath', age: 20},
      {name: 'Jithu', age: 28},
    ]
  }

  eventBtnToggle = () => {
    console.log('[eventBtnToggle]');
    
  }
  
  render() {
    let Persons = null;
    if (this.state.users && this.state.users.length) {
      Persons = this.state.users.map((person, i) => {
        return (
          <Person name={person.name} age={person.age} key={i} />
        )
      })
    }
    
    return (
      <div className="App">
        <button type="button" onClick={this.eventBtnToggle}>Toggle Persons</button>
        
        {Persons}
      </div>
    );
  }
}

export default App;
