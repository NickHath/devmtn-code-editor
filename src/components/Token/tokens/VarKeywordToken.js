import React from 'react';
import Token from '../Token';

export default class VarKeywordToken extends Token {
  constructor() {
    super();
    this.state = {
      display: ''
    };
  }

  render() {
    const { locked, defaultValue } = this.props;
    const { display } = this.state;
    return (
      <div className='token var-keyword' onClick={ () => this.handleClick.call(this, locked) }>
        Var Keyword Token
        <p>defaultValue: { defaultValue }</p>
        <p>locked: { JSON.stringify(locked) }</p>
        <p>I will display: <span style={{ color: 'red' }}>{ display || defaultValue || 'Nothing' }</span></p>
      </div>
    );
  }
}