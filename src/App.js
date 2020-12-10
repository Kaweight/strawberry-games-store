import { CssBaseline, Grid } from '@material-ui/core';
import React from 'react';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  return (
    <Grid container direction='column'>
      <CssBaseline />
      <Grid item >
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;