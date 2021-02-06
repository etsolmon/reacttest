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
      <div class="cards">
        <div class="card">ХАМГИЙН ШУУРХАЙ ХҮРГЭЛТ</div>
        <div class="card">TWO</div>
        <div class="card">THREE</div>
        <div class="card">FOUR</div>
        <div class="card">FIVE</div>
        <div class="card">SIX</div>
        <div class="card">SEVEN</div>
        <div class="card">EIGHT</div>
        <div class="card">NINE</div>
        <div class="card">TEN</div>
        <div class="card">ELEVEN</div>
        <div class="card">TWELVE</div>
      </div>
    </>  
  );
}
export default Solution;
