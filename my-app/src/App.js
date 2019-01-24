import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person.js";

class App extends Component {

  state = {
    persons: [
      {name: "Shubham", age: 23},
      {name: "Renil", age: 33},
      {name: "Priya", age: 28}
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Shubham", age: 22},
        {name: event.target.value, age: 33},
        {name: "Priya", age: 28}
      ]
    });
  }

  toggleNameHandler = () => {
    var doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
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
      person = (<div>
                   <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                   <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
                   clicked={this.switchNameHandler.bind(this, "Shubham!")}
                   changed={this.nameChangedHandler}>My hobbie: Racing</Person>
                   <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
                 </div>);
    }

    return (
      <div className="App">
        <h3>React project</h3>
        <p>It's really working</p>
        <button style={style}
        onClick={this.toggleNameHandler}> Switch Name </button>
       {person}
      </div>
    );
  }
}

export default App;
