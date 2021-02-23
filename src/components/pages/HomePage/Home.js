import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import Solution from '../../Solution';
import Carousel from "../../DemoCarousel";
import { render } from "react-dom";
//import DemoCarousel from '../../DemoCarousel';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Solution />
      <HeroSection {...homeObjTwo} />
      <Carousel />
      <HeroSection {...homeObjThree} />
      <Solution />

    </>
  );
}

export default Home;
