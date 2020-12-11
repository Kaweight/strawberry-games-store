import React from 'react';
import BestselleryCard from './BestselleryCard';
import HotNewsCarousel from './HotNewsCarousel';
import { Grid } from '@material-ui/core';
import CardsInfo from '../static/CardsInfo';

const Content = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8} md={8}>
        <HotNewsCarousel />
      </Grid>
      <Grid item xs={4} sm={4} md={2}>
        <BestselleryCard CardInfo={CardsInfo[0]} />
      </Grid>
      <Grid item xs={4} sm={4} md={2}>
        <BestselleryCard CardInfo={CardsInfo[1]} />
      </Grid>
    </Grid>
  )
};

export default Content;