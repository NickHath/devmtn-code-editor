import React from 'react';
import { Route, Switch } from 'react-router-dom';

// my components
import Landing from './components/Landing/Landing';
import CodeEditor from './components/CodeEditor/CodeEditor';

// object parsed from JSON that represents the tokens for each
// lesson (formatted like lesson-1.1)
import lessonOne from './lessons/lessonOne.json';


// to add a new part to a lesson, you can add a route that renders 
// CodeEditor and passes it the correct tokens
export default (
  <Switch>
    <Route exact path='/' component={ Landing } />
    <Route path='/1/1' render={ () => <CodeEditor tokens={ lessonOne[`lesson-1.1`] } next={ `2` }/> } />
    <Route path='/1/2' render={ () => <CodeEditor tokens={ lessonOne[`lesson-1.2`] } next={ `3` }/> } />
    <Route path='/1/3' render={ () => <CodeEditor tokens={ lessonOne[`lesson-1.3`] } /> } />
  </Switch>
);
