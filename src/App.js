import React, { Component } from "react";
import "./App.css";
import Radium from 'radium';

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
    const btnToggleStyle = {
      border: "1px solid #346175",
      outline: "none",
      padding: "8px 20px",
      borderRadius: "4px",
      fontWeight: "600",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: 'rgb(52, 97, 117)',
        color: '#fff',
      }
    };

    const progressStyle = {
      width: "0%",
      backgroundColor: "#8dafbe",
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100%',
      transition: 'all 0.4s ease',
    };

    const appStyle = {
      '@media (max-width: 912px)': {
        width: '90%',
        backgroundColor: 'red'
      }
    }

    let Persons = null;
    if (this.state.users && this.state.users.length && this.state.showPersons) {

      let personsCount = this.state.users.length;

      progressStyle.width = Math.round((personsCount / 3) * 100) + '%';
      
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
      <div className="App" style={appStyle}>
        <div className="header">
          <button
            type="button"
            onClick={this.eventTogglePersons}
            style={btnToggleStyle}
          >
            Toggle Persons
          </button>

          <div className="progress-wrap">
            <div className="progress" style={progressStyle} />
          </div>
        </div>

        {Persons}
      </div>
    );
  }
}

export default Radium(App);
