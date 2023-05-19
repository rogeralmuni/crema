// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'inherit',
  },
  button: {
    marginLeft: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          className={classes.title}
        >
          Crema
        </Typography>
        <Button
          component={Link}
          to="/merchant-dashboard"
          color="inherit"
          className={classes.button}
        >
          Merchant Dashboard
        </Button>
        <Button
          component={Link}
          to="/user-registration"
          color="inherit"
          className={classes.button}
        >
          User Registration
        </Button>
        <Button
          component={Link}
          to="/product-list"
          color="inherit"
          className={classes.button}
        >
          Product List
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
