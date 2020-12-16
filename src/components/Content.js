import React from 'react';
import BestselleryCard from './BestselleryCard';
import HotNewsCarousel from './HotNewsCarousel';
import { Grid } from '@material-ui/core';
import CardsInfo from '../static/CardsInfo';
import HotNewsInfo from '../static/HotNewsInfo';

const Content = () => {

  const getBestselleryCard = (bestselleryCardObj) => {
    return (
      <Grid item xs={6} sm={4} md={2}>
        <BestselleryCard {...bestselleryCardObj} />
      </Grid>
    )
  }

  return (
    <Grid container
      justify="center"
      alignItems="center"
      spacing={2}>
      <Grid item xs={12} sm={8} md={8}>
        <HotNewsCarousel HotNewInfo={HotNewsInfo} />
      </Grid>
      <Grid container spacing={2}>
        {CardsInfo.map(bestselleryCardObj => getBestselleryCard(bestselleryCardObj))}
      </Grid>
    </Grid>
  )
};

export default Content;