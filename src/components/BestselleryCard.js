import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 110,
    marginTop: 15,
  },
  media: {
    height: 140,
  },
});

const BestselleryCard = ({ CardInfo }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='/assets/cyberpunk1.jpg'
          title='blabla'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cyberpunk
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            $82
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
    </Button>
        <Button size="small" color="primary">
          Learn More
    </Button>
      </CardActions>
    </Card>
  )
};

export default BestselleryCard;