import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { FullscreenExit } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import CardsInfo from '../static/CardsInfo';

const useStyles = makeStyles({
  root: {
    maxWidth: 110,
    margin: 'auto',
  },
  media: {
    height: 145,
  },
  titleBox: {
    padding: 3,
  },
  title: {
    fontSize: '0.8em',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  prices: {
    justifyContent: 'space-around',
    paddingTop: 1,
    paddingBottom: 3,
    backgroundColor: '#ff3f34',
  },
  earlierPrice: {
    fontSize: '0.7em',
    fontWeight: 'bold',
    textDecoration: 'line-through',
    color: 'RGBA(1,2,3,0.3)',
  },
  price: {
    padding: 0,
    fontSize: '0.8em',
    fontWeight: 'bold',
  },
});

const BestselleryCard = props => {
  const classes = useStyles();
  const { imageUrl, title, subtitle, price, earlierPrice, _id } = props
  return (
    <Card className={classes.root}>
      <CardActionArea>
      <Link to={'/product/' + _id}>
        <CardMedia
          className={classes.media}
          image={imageUrl}
        />
      </Link>
        <CardContent className={classes.titleBox}>
          <Typography className={classes.title}>
            {title}
          </Typography>
          <Typography className={classes.title}>
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.prices}>
        <Typography className={classes.earlierPrice}>
          {earlierPrice}
        </Typography>
        <Typography className={classes.price}>
          {price}
        </Typography>
      </CardActions>
    </Card>
  )
};

export default BestselleryCard;