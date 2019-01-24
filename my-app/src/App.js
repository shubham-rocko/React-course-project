import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person.js";

class App extends Component {

  state = {
    persons: [
      {name: "Shubham", age: 23, id:"ss1"},
      {name: "Renil", age: 33, id:"ss2"},
      {name: "Priya", age: 28, id:"ss3"}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 22},
        {name: "Renil", age: 33},
        {name: "Priya", age: 28}
      ]
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons =  [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  toggleNameHandler = () => {
    var doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
             name={person.name}
             age={person.age}
             key={person.id}
             clicked={() => this.deletePersonHandler(index)}
             changed = {(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
        );
    }

    return (
      <div className="App">
        <h3>React project</h3>
        <p>It's really working</p>
        <button style={style}
        onClick={this.toggleNameHandler}> Toggle Person </button>
       {person}
      </div>
    );
  }
}

export default App;
