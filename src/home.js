// Home.js

import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  description: {
    marginBottom: theme.spacing(4),
  },
  button: {
    textTransform: 'none',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        Welcome to Crema
      </Typography>
      <Typography variant="h6" className={classes.description}>
        Discover a world of products and start buying and selling today!
      </Typography>
      <Button variant="contained" color="primary" className={classes.button}>
        Explore Products
      </Button>
    </div>
  );
};

export default Home;
