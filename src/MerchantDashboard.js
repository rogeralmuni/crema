// MerchantDashboard.js

import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

const MerchantDashboard = () => {
  const classes = useStyles();

  const handleAddProduct = () => {
    // Handle logic to add a new product
  };

  const handleManageProducts = () => {
    // Handle logic to manage products
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Merchant Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleAddProduct}
          >
            Add Product
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleManageProducts}
          >
            Manage Products
          </Button>
        </Grid>
        {/* Add more buttons or components for other dashboard features */}
      </Grid>
    </div>
  );
};

export default MerchantDashboard;
