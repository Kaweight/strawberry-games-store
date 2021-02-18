import React from 'react';
import data from '../static/CardsInfo';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 10,
    maxWidth: 100,
    color: 'green',
    justifyContent: 'space-around',
  },
  BuyNow: {
    minWidth: 165,
    maxHeight: 40,
    marginBottom: 12,
    backgroundColor: '#f39c12',
    padding: 8,
    borderRadius: '1.5rem',
    justifyContent: 'space-around',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    '& p:nth-child(2)': {
      fontWeight: 300,
      opacity: 0.7,
      textDecoration: 'line-through',
    },
    '& p:nth-child(3)': {
      fontSize: '1.3rem',
    },
  },
  PayPal: {
    minWidth: 165,
    maxHeight: 40,
    marginBottom: 12,
    backgroundColor: '#74b9ff',
    padding: 8,
    borderRadius: '1.5rem',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    justifyContent: 'space-around',
  },
  BottomIcons: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 100,
    color: 'white',
    justifyContent: 'space-around',
    '& svg:first-child': {
      color: 'red',
    },
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
  const product = data.find(x => x._id === props.match.params.id);
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
              <Typography className={classes.UpperIcons}>
                <LanguageOutlined />
                <ShareOutlined />
              </Typography>
              <Button className={classes.BuyNow}>
                <p>BUY NOW!</p>
                <p>{product.earlierPrice}</p>
                <p>{product.price}</p>
              </Button>
              <Button className={classes.PayPal} color="textSecondary">
                KUP Z <i>PayPal</i>
              </Button>
              <Typography className={classes.BottomIcons}>
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