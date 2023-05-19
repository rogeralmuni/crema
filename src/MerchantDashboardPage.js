// MerchantDashboardPage.js

import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
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

const MerchantDashboardPage = () => {
  const classes = useStyles();

  const handleManageProducts = () => {
    // Handle logic for managing products
  };

  const handleManageOrders = () => {
    // Handle logic for managing orders
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
            onClick={handleManageProducts}
          >
            Manage Products
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleManageOrders}
          >
            Manage Orders
          </Button>
        </Grid>
        {/* Add more buttons or components for other dashboard features */}
      </Grid>
    </div>
  );
};

export default MerchantDashboardPage;
