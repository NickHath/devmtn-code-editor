import React from 'react';
import Token from '../Token';

// we could use a list of valid inputs to test what they give us
const validOperators = ['+', '-', '*', '/'];

export default class StringToken extends Token {
  constructor() {
    super();
    this.state = {
      // this is what will be shown in the editor
      display: ''
    };
  }

  render() {
    const { defaultValue, locked } = this.props;
    const { display } = this.state;
    return (
      <div className='token string' onClick={ () => this.handleClick.call(this, locked) }>
        { display || defaultValue || <div className='input-box' /> }
      </div>
    );
  }
}