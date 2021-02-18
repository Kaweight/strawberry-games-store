import React, { useEffect, useState } from 'react';
import BestselleryCard from './BestselleryCard';
import HotNewsCarousel from './HotNewsCarousel';
import { Grid } from '@material-ui/core';
import HotNewsInfo from '../static/HotNewsInfo';
import axios from 'axios';

const Content = () => {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProduct(data)
    }
    fetchData();
    return () => {

    };
  }, [])

  const getBestselleryCard = (bestselleryCardObj) => {
    return (
      <Grid item xs={6} sm={4} md={2} key={products._id}>
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
      <Grid container spacing={2} key={products._id}>
        {products.map(bestselleryCardObj => getBestselleryCard(bestselleryCardObj))}
      </Grid>
    </Grid>
  )
};

export default Content;