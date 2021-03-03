import React from 'react';
import './HeroSection2.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function HeroSection2({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div class="darkBg">
        <div class="cards2">
          <div class="card2">
              <p class="ph21">Хамтран ажиллах</p>        
              <p class="ph22">Үйлчилгээний танилцуулга</p>
              <p class="ph23">Бидэнтэй хамтран ажиллах, хүргэлтийн үйлчилгээний танилцуулгыг дараах холбоосоор татан авна уу</p>
              <a href='/pricing.pdf' download>Татаж авах</a>
          </div>
          <div class="card22">
              <p class="ph21">Холбоо тогтоох</p>        
              <p class="ph22">Холбоо барих</p>
              <p class="ph23">Хамтран ажиллах хүсэлтэй бүх хувь хүн болон аж ахуйн нэгжид            бид үргэлж нээлттэй</p>
              <a href='/pricing.pdf' download>Татаж авах</a>
          </div>    
            
        </div>
      </div>
    </>
  );
}

export default HeroSection2;
