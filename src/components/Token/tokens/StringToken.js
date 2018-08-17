import React from 'react';
import Token from '../Token';

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
      // we have to bind the parent's function to our "this" context
      // there might be an easier way to do this with .bind (if the method
      // is going to be reused)
      <div className='token string' onClick={ () => this.handleClick.call(this, locked) }>
        String Token
        <p>defaultValue: { defaultValue }</p>
        <p>locked: { JSON.stringify(locked) }</p>
        <p>I will display: <span style={{ color: 'red' }}>{ display || defaultValue || 'Nothing' }</span></p>
      </div>
    );
  }
}