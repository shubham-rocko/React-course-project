import React from "react";

import classes from "./Person.css";

const person = props => {

  var random = Math.random();
  if(random > 10){
    throw new Error('Something went wrong');
  }

  return (
    <div className={classes.Person}>
      <p onClick={props.clicked}>
        Hi I'm {props.name} and I'm {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
