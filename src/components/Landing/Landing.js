import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className='landing'>
    <Link className='link' to='/1/1'>
      <p className='button'>Lesson 1.1</p>
    </Link>
    <Link className='link' to='/1/2'>
      <p className='button'>Lesson 1.2</p>
    </Link>
    <Link className='link' to='/1/3'>
      <p className='button'>Lesson 1.3</p>
    </Link>
    <Link className='link' to='/1/4'>
      <p className='button'>Lesson 1.4</p>
    </Link>
    <Link className='link' to='/1/5'>
      <p className='button'>Lesson 1.5</p>
    </Link>
  </div>
);