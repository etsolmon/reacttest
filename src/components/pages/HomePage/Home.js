import React from 'react';
import HeroSection from '../../HeroSection';
import HeroSection2 from '../../HeroSection2';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import Solution from '../../Solution';
import Carousel from "../../DemoCarousel";
import { render } from "react-dom";
import {Helmet} from "react-helmet";

//import DemoCarousel from '../../DemoCarousel';

import { makeStyles } from '@material-ui/core/styles';


function Home() {



  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Хүргэлтийн үйлчилгээ - Cargo-Delivery.mn</title>
                <link rel="canonical" href="http://www.cargo-delivery.mn" />                
            </Helmet>
      <HeroSection {...homeObjOne} />
      <Solution />
      <HeroSection {...homeObjTwo} />
      <Carousel />
      <HeroSection2 {...homeObjOne} />

    </>
  );
}

export default Home;
