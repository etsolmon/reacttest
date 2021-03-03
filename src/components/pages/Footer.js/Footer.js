import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src='images/logo-cargo.png' alt='Cargo-Delivery.mn' className='' />
            </Link>
          </div>
          <small className='website-rights'>Cargo-Delivery.mn - Хүргэлтийн үйлчилгээ © 2021</small>
          <div className='social-icons'>
              <a href='https://www.facebook.com/cargodelivery.mn' target='_blank'><FaFacebook /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
