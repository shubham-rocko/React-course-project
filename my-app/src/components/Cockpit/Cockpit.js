import React from "react";
import classes from "./Cockpit.css";
import Aux from "../../hoc/Aux";

const cockpit = props => {
  let assignedClasses = [];
  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Button, classes.red].join(" ");
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <Aux>
      <h3>{props.appTitle}</h3>
      <p className={assignedClasses.join(" ")}>It's really working</p>
      <button className={btnClass} onClick={props.clicked}>
        {" "}
        Toggle Person{" "}
      </button>
    </Aux>
  );
};

export default cockpit;
