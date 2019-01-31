import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
           <h3>Angular project</h3>
           <p className={assignedClasses.join(" ")}>It's really working</p>
           <button className={btnClass}
            onClick={props.clicked}>
             {" "}
             Toggle Person{" "}
           </button>
        </div>
    );
}

export default cockpit;