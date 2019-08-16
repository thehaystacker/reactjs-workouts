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
        {Persons}
      </div>
    );
  }
}

export default App;
