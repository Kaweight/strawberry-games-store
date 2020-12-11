import React from 'react';
import BestselleryCard from './BestselleryCard';
import HotNewsCarousel from './HotNewsCarousel';
import { Grid } from '@material-ui/core';
import CardsInfo from '../static/CardsInfo';
import HotNewsInfo from '../static/HotNewsInfo';

const Content = () => {

  const getBestselleryCard = (bestselleryCardObj) => {
    return (
      <Grid item xs={4} sm={4} md={2}>
        <BestselleryCard {...bestselleryCardObj} />
      </Grid>
    )
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8} md={8}>
        <HotNewsCarousel HotNewInfo={HotNewsInfo} />
      </Grid>
      {CardsInfo.map(bestselleryCardObj => getBestselleryCard(bestselleryCardObj))}
    </Grid>
  )
};

export default Content;