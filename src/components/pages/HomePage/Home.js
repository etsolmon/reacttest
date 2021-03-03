import React from 'react';
import HeroSection from '../../HeroSection';
import HeroSection2 from '../../HeroSection2';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import Solution from '../../Solution';
import Carousel from "../../DemoCarousel";
import { render } from "react-dom";
import {Helmet} from "react-helmet";
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
//import DemoCarousel from '../../DemoCarousel';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('I love snacks.');
  };

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Home() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('I love snacks.');
  };

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };
  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Хүргэлтийн үйлчилгээ - Cargo-Delivery.mn</title>
                <link rel="canonical" href="http://www.cargo-delivery.mn" />
                <React.Fragment>
                  <Button onClick={handleClick}>Show snackbar</Button>
                  <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
                </React.Fragment>
            </Helmet>
      <HeroSection {...homeObjOne} />
      <Button variant="contained"  color="secondary">Default</Button>
      <Solution />
      <HeroSection {...homeObjTwo} />
      <Carousel />
      <HeroSection2 {...homeObjOne} />

    </>
  );
}

export default Home;
