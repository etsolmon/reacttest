import HeroSection from "../../HeroSection"
import React from 'react';
import {homeObjOne} from './Data';

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />

        </>
    )
}

export default Home
