import React, { Component } from "react";
import styles from "./App.module.css";

import Person from "./Person/Person.js";

class App extends Component {
  state = {
    users: [
      { name: "Sangeeth", age: 24 },
      { name: "Sarath", age: 20 },
      { name: "Jithu", age: 28 }
    ],
    showPersons: false
  };

  eventTogglePersons = name => {
    let showPersons = !this.state.showPersons;
    this.setState({ showPersons });
  };

  fnInputChange = (event, index) => {
    // console.log('[fnInputChange > event]', event);

    let users = [...this.state.users];
    users[index].name = event.target.value;
    this.setState({ users });
  };

  fnInputOnblur = (event, index) => {
    let name = event.target.value;
    if (name === "") {
      name = "User";

      let users = [...this.state.users];
      users[index].name = name;
      this.setState({ users });
    }
  };

  fnDeletePerson = (event, index) => {
    let users = [...this.state.users];
    users.splice(index, 1);
    this.setState({ users });
  }

  render() {
    let Persons = null;
    if (this.state.users && this.state.users.length && this.state.showPersons) {
      
      Persons = this.state.users.map((person, i) => {
        return (
          <Person
            name={person.name}
            age={person.age}
            key={i}
            eventInputChange={event => this.fnInputChange(event, i)}
            eventInputOnblur={event => this.fnInputOnblur(event, i)}
            eventDeletePerson={event => this.fnDeletePerson(event, i)}
          />
        );
      });
    }

    return (
      <div className={styles.App}>
        <div className="header">
          <button
            type="button"
            onClick={this.eventTogglePersons}
          >
            Toggle Persons
          </button>

          <div className="progress-wrap">
            <div className="progress" />
          </div>
        </div>

        {Persons}
      </div>
    );
  }
}

export default App;
