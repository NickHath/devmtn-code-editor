import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className='landing'>
    <Link className='link' to='/1/1'>
      <p className='button'>Lesson One, Part One</p>
    </Link>
    <Link className='link' to='/1/2'>
      <p className='button'>Lesson One, Part Two</p>
    </Link>
    <Link className='link' to='/1/3'>
      <p className='button'>Lesson One, Part Three</p>
    </Link>
  </div>
);