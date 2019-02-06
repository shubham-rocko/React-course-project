import React, {Component} from "react";

import classes from "./Person.css";
import WithClass2 from "../../../hoc/withClass2";
import PropTypes from "prop-types";

import { AuthContext } from "../../../containers/App";

class Person extends Component{

  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', this.props);  
    this.inputElement = React.createRef();
  }

  componentWillMount(){
    console.log('[Person.js] Inside componentWillMount()');
  }
  
  componentDidMount(){
    console.log('[Person.js] Inside componentDidMount()');
    if(this.props.position === 0){
      this.inputElement.current.focus();
    }
  }

  focusInEle(){
      this.inputElement.current.focus();
  }

  componentWillUnmount(){
    console.log('[Person.js] Inside componentWillUnmount()');
  }

  render() {    
    console.log('[Person.js] Inside render()')
      return (
        <>
        <AuthContext.Consumer>
        {auth => auth ? <p>I'm authenticated</p> : null}
        </AuthContext.Consumer>
          <p onClick={this.props.clicked}>
            Hi I'm {this.props.name} and I'm {this.props.age} years old.
          </p>
          <p>{this.props.children}</p>
          <input
          ref = {this.inputElement}
          type="text" 
          onChange={this.props.changed}
          value={this.props.name} />
        </>
      );

      // return [
      //   <p key="1" onClick={this.props.clicked}>Hi I'm {this.props.name} and I'm {this.props.age} years old.</p>,
      //   <p key="2">{this.props.children}</p>,
      //   <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
      // ]
  }
}

Person.propTypes = {
  clicked: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default WithClass2(Person, classes.Person);
