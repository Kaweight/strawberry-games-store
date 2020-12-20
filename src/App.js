import { CssBaseline, Grid } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Content from './components/Content';
import Header from './components/Header';

import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/product/:id' component={ProductScreen}/>
    </BrowserRouter>
  );
}

export default App;
