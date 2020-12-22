import React from 'react';
import CardsInfo from '../static/CardsInfo';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import ProductSaleCard from '../components/ProductSaleCard';

const useStyles = makeStyles({
  image: {
    maxWidth: 400,
    maxHeight: 400,
    margin: 'auto',
    marginTop: '3rem',
    border: '2px solid blue',
    borderRadius: 15,
  },
  });

const ProductScreen = props => {
  const classes = useStyles();
  const product = CardsInfo.find(x => x._id === props.match.params.id);
  const { imageUrl } = props;
  return (
    <Grid container direction='column'>
      <CssBaseline />
      <Grid item>
        <Header />
      </Grid>
      <Grid container
      justify="center"
      alignItems="center"
      spacing={2}>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={6}>
          <img className={classes.image} src={product.imageUrl} />
        </Grid>
        <Grid item xs={12} sm={2}>
        <ProductSaleCard />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default ProductScreen;