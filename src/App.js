import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';

import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/product/:id' component={ProductScreen} />
    </BrowserRouter>
  );
}

export default App;
