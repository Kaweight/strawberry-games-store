import React from 'react';
import CardsInfo from '../static/CardsInfo';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import ProductSaleCard from '../components/ProductSaleCard';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ShareOutlined, FavoriteBorderOutlined, AccountBalanceWalletOutlined, LanguageOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    flexGrow: 1,
    marginTop: '3rem',
    backgroundColor: 'grey',
  },
  UpperIcons: {

  },
  BuyNow: {
    marginBottom: 12,
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: '1.5rem',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.8rem',
  },
  PayPal: {
    marginBottom: 12,
    backgroundColor: '#74b9ff',
    padding: 8,
    borderRadius: '1.5rem',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
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
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.UpperIcons} variant="h5" component="h2">
          <LanguageOutlined />
          <ShareOutlined />
        </Typography>
        <Typography className={classes.BuyNow} gutterBottom>
          BUY NOW!
          {product.earlierPrice}
          {product.price}
        </Typography>
        <Typography className={classes.PayPal} color="textSecondary">
          KUP Z <i>PayPal</i>
        </Typography>
        <Typography variant="body2" component="p">
          <FavoriteBorderOutlined />
          <AccountBalanceWalletOutlined />
        </Typography>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default ProductScreen;