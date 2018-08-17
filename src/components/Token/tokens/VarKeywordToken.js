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
    const { locked, defaultValue, expected } = this.props;
    const { display } = this.state;
    const boxStyle = ({ width: expected && `${expected.length}em` });
    return (
      <div className='token var-keyword' onClick={ () => this.handleClick.call(this, locked) }>
        { display || defaultValue || <div className='input-box' style={ boxStyle }/> }
      </div>
    );
  }
}