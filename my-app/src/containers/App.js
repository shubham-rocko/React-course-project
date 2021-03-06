import React, { PureComponent } from "react";

import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass2 from "../hoc/withClass2";

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", this.props);
    this.state = {
      persons: [
        { name: "Shubham", age: 23, id: "ss1" },
        { name: "Renil", age: 33, id: "ss2" },
        { name: "Priya", age: 28, id: "ss3" }
      ],
      showPersons: false,
      togglePersonClicked: 0,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] Inside componentWillUpdate",
      nextProps,
      nextState
    );
  }
  
  getDerivedStateFromProps(nextProps, prevState){
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps', nextProps, prevState)
    return {prevState};
  }

  getSnapshotBeforeUpdate(){
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate");
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        togglePersonClicked: prevState.togglePersonClicked + 1
      };
    });
  };

  deletePersonHandler = personIndex => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log("[App.js] Inside render()");

    let person = null;

    if (this.state.showPersons) {
      person = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.toggleNameHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
        {person}
        </AuthContext.Provider> 
      </>
    );
  }
}

export default WithClass2(App, classes.App);
