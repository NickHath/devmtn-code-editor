import React, { Component } from 'react';


// the parent class to all tokens we can put any logic in here 
// that is standard across all tokens, like handling events, animations
// and even validating input (in a standardized way)

export default class Token extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // validateInput(input, expected, type) {
  //   if (typeof input !== type) { alert(`Wrong type... you used ${typeof input}`); }
  //   if (input !== expected) { alert(`Right type, wrong input`); }
  // }

  handleClick(locked) {
    if (locked) {
      alert('You cannot update this token');
    } else {
      const input = prompt('Enter some value: ', 'Value here');
      this.setState({ display: input });      
    }
  }
}