import React from 'react';
import Token from '../Token';

export default class VarNameToken extends Token {
  constructor() {
    super();
    this.state = {
      // this is what will be shown in the editor
      display: ''
    };
  }

  render() {
    const { locked, defaultValue } = this.props;
    const { display } = this.state;
    return (
      <div className='token var-name' onClick={ () => this.handleClick.call(this, locked) }>
        { display || defaultValue || <div className='input-box' />}
      </div>
    );
  }
}