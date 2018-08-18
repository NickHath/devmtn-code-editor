import React from 'react';
import { Link } from 'react-router-dom';
import './CodeEditor.css';

// all tokens will be imported here
import VarKeywordToken from '../Token/tokens/VarKeywordToken';
import VarNameToken from '../Token/tokens/VarNameToken';
import StringToken from '../Token/tokens/StringToken';
import OperatorToken from '../Token/tokens/OperatorToken';

// object that maps from .json types to their appropriate class constructors
const componentNames = {
  'VarKeyword': VarKeywordToken,
  'VarName': VarNameToken,
  'String': StringToken,
  'Operator': OperatorToken
};

export default props => {
  const tokenComponents = props.tokens.map(token => {
    // the .json might include a string for formatting, like '{\n'
    if (typeof token === 'string') {
      return token;
    } else {
      // or it could be an object specifing a token component
      const { type, defaultValue, locked, expected } = token;
      // this stores the correct component in a temporary variable to be rendered
      const CurrentToken = componentNames[type];
      return <CurrentToken defaultValue={ defaultValue } locked={ locked } expected={ expected } />
    }
  });

  return (
    <div className='code-editor-wrapper'>

      <Link className='link' to='/'>
        <p className='nav-button'>Home<br/>{'<'}</p>
      </Link>
      {
        props.next ?
          <Link className='link' to={ `/1/${props.next}` }>
            <p className='nav-button'>Next<br/>{'>'}</p>
          </Link> :
          null
      }

      <div className='editor'>
        {/* WHERE THE MAGIC HAPPENS */}
        { tokenComponents }
      </div>

      <div className='lesson-json'>
        <span style={{ color: 'red' }}>JSON used to generate this code (each object is a component):</span> 
        <br/>
        { JSON.stringify(props.tokens) };
      </div>
    </div>
  );
} 
