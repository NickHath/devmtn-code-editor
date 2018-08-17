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
      const { type, defaultValue, locked } = token;
      // this stores the correct component in a temporary variable to be rendered
      const CurrentToken = componentNames[type];
      return <CurrentToken defaultValue={ defaultValue } locked={ locked } />
    }
  });

  return (
    <div className='code-editor-wrapper'>
      <div className='lesson-json'>
        <span style={{ color: 'red' }}>JSON used for building the editor:</span> 
        <br/>
        { JSON.stringify(props.tokens) };
      </div>

      <div className='editor'>
        {/* WHERE THE MAGIC HAPPENS */}
        { tokenComponents }
      </div>

      <Link className='link' to='/'>
        <p className='button'>Back<br/>{'<'}</p>
      </Link>
    </div>
  );
} 
