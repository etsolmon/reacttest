import React from 'react';
import { Button } from './Button';
import './Solution.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Solution() {
  return (
    <>
      <div className='testrow'>
        <div className='testcolumn testleft'>
          <h2>Column 1</h2>
          <p>Some text..</p>
        </div>
        <div className='testcolumn testright'>
          <h2>Column 2</h2>
          <p>Some text..</p>
        </div>
      </div>
      <div className='testrow'>
        <div className='testcolumn testleft'>
          <h2>Column 1</h2>
          <p>Some text..</p>
        </div>
        <div className='testcolumn testright'>
          <h2>Column 2</h2>
          <p>Some text..</p>
        </div>
      </div>
      <div className='testrow'>
        <div className='testcolumn testleft'>
          <h2>Column 1</h2>
          <p>Some text..</p>
        </div>
        <div className='testcolumn testright'>
          <h2>Column 2</h2>
          <p>Some text..</p>
        </div>
      </div>
    </>  
      

  );
}
export default Solution;
