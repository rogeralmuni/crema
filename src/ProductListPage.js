// ProductListPage.js

import React from 'react';
import ProductList from './productlist';

const ProductListPage = () => {
  // Sample product data for demonstration
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 9.99,
      image: 'https://example.com/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      image: 'https://example.com/product2.jpg',
    },
    // Add more product objects as needed
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ProductList products={products} />
    </div>
  );
};

export default ProductListPage;
