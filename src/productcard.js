import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  media: {
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  price: {
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent className={classes.content}>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography variant="h6" className={classes.price}>
          ${product.price}
        </Typography>
      </CardContent>
      <Button variant="contained" color="primary">
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
