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
    const { defaultValue, locked, expected } = this.props;
    const { display } = this.state;
    const boxStyle = ({ width: expected && `${expected.length}em`, borderColor: `#E6DB74` });
    return (
      <div className='token operator' onClick={ () => this.handleClick.call(this, locked) }>
        { display || defaultValue || <div className='input-box' style={ boxStyle }/> }
      </div>
    );
  }
}