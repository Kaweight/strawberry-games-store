// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import CardsInfo from '../static/CardsInfo';
// import { ShareOutlined, FavoriteBorderOutlined, AccountBalanceWalletOutlined, LanguageOutlined } from '@material-ui/icons';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 250,
//     flexGrow: 1,
//     marginTop: '3rem',
//     backgroundColor: 'grey',
//   },
//   UpperIcons: {

//   },
//   BuyNow: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//     backgroundColor: '#74b9ff',
//     padding: 8,
//     borderRadius: '1.5rem',
//     textAlign: 'center',
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: '1rem',
//   },
// });

// const ProductSaleCard = props => {
//   const classes = useStyles();
//   // const product = CardsInfo.find(x => x._id === props.match.params.id);
//   const { price, earlierPrice } = props;
//   return (
//     <Card className={classes.root} variant="outlined">
//       <CardContent>
//         <Typography className={classes.UpperIcons} variant="h5" component="h2">
//           <LanguageOutlined />
//           <ShareOutlined />
//         </Typography>
//         <Typography className={classes.BuyNow} color="textSecondary" gutterBottom>
//           BUY NOW!
//           {earlierPrice}
//           {price}
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           KUP Z <i>PayPal</i>
//         </Typography>
//         <Typography variant="body2" component="p">
//           <FavoriteBorderOutlined />
//           <AccountBalanceWalletOutlined />
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// export default ProductSaleCard;