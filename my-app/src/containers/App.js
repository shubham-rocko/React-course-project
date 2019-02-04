import React, { Component } from "react";

import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', this.props);
    this.state =  {
      persons: [
        { name: "Shubham", age: 23, id: "ss1" },
        { name: "Renil", age: 33, id: "ss2" },
        { name: "Priya", age: 28, id: "ss3" }
      ],
      showPersons: false
    };  
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }
  
  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  // state = {
  //   persons: [
  //     { name: "Shubham", age: 23, id: "ss1" },
  //     { name: "Renil", age: 33, id: "ss2" },
  //     { name: "Priya", age: 28, id: "ss3" }
  //   ],
  //   showPersons: false
  // };

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
    console.log("[App.js] Inside render()");

    let person = null;

    if (this.state.showPersons) {
      person = (<Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
         appTitle={this.props.title}
         showPersons={this.state.showPersons}
         persons = {this.state.persons}
         clicked = {this.toggleNameHandler}/>
        {person}
      </div>
    );
  }
}

export default App;
