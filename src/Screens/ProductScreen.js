import React from 'react';
import CardsInfo from '../static/CardsInfo';

function ProductScreen(props) {
  const product = CardsInfo.find(x => x._id === props.match.params.id);
  return (
<h1>{product.title}</h1>
  );
}

export default ProductScreen;