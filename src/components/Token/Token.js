import React, { Component } from 'react';


// the parent class to all tokens we can put any logic in here 
// that is standard across all tokens, like handling events, animations
// and even validating input (in a standardized way)

export default class Token extends Component {
  constructor() {
    super();
    this.state = {};
  }


  validateToken = (input, expected, type) => {
    if (!input) { return; }
    else if (typeof input !== type) { 
      return alert(`Use the right data type... you used${typeof input}`);
    }
    else if (expected && input && input !== expected) { 
      return alert(`Wrong value... we expected: ${expected}`); 
    }
    // all tests have passed, so we can update our display
    this.setState({ display: input });
  }

  // updateValue(locked) {
  //   if (locked) {
  //     alert('You cannot update this token');
  //   } else {
  //     const input = prompt('Enter some value: ', 'Value here');
  //     this.setState({ display: input });      
  //   }
  // }
}