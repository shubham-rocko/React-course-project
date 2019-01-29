import React, { Component } from "react";

import classes from "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  state = {
    persons: [
      { name: "Shubham", age: 23, id: "ss1" },
      { name: "Renil", age: 33, id: "ss2" },
      { name: "Priya", age: 28, id: "ss3" }
    ],
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: "Renil", age: 33 },
        { name: "Priya", age: 28 }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  toggleNameHandler = () => {
    var doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let person = null;
    let btnClass = '';

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                clicked={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass = classes.red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
        <div className={classes.App}>
          <h3>Angular project</h3>
          <p className={assignedClasses.join(" ")}>It's really working</p>
          <button 
          className={btnClass}
          onClick={this.toggleNameHandler}>
            {" "}
            Toggle Person{" "}
          </button>
          {person}
        </div>
    );
  }
}

export default App;
