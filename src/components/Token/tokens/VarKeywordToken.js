import React from 'react';
import Token from '../Token';

export default class VarKeywordToken extends Token {
  constructor() {
    super();
    this.state = {
      input: '',
      display: ''
    };
  }

  render() {
    const { locked, defaultValue, expected } = this.props;
    const { input, display } = this.state;
    const boxStyle = ({ width: expected && `${expected.length}em`, borderColor: `#FD5FF1` });
    return (
      <div className='token var-keyword' onClick={ () => this.setState({ display: '' }) }>
        { display || defaultValue || <input autoFocus 
                                            onBlur={ this.validateToken.bind(this, input, expected, 'string') } 
                                            defaultValue={ input } 
                                            className='input-box' 
                                            onChange={ e => this.setState({ input: e.target.value }) } 
                                            style={ boxStyle }/>}
      </div>
    );
  }
}