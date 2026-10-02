import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';

const products = [
  {
    name: 'Wireless Headphones',
    description: 'High-quality wireless sound and seamless connectivity.',
    price: 99.99,
    image: 'https://img.freepik.com/fotos-premium/par-auriculares-luces-neon-ellos_1143130-5044.jpg', 
  },
  {
    name: 'Smartwatch',
    description: 'Track your fitness and notifications on the go.',
    price: 199.99,
    image: 'https://www.pc-tablet.co.in/wp-content/uploads/2024/01/Samsung-galaxy-watch6.webp', 
  },
  {
    name: 'Portable Speaker',
    description: 'Experience powerful audio wherever you are.',
    price: 49.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf84uzFZzjLJvBdmKg7HbNpwV6fVhEmInudQ&s', 
  },
];

const TodoList = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        E-Commerce Product Showcase
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {products.map((product, index) => (
          <Grid item key={index}>
            <Card style={cardStyle}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const cardStyle = {
  maxWidth: 300,
  margin: '15px',
  border: '1px solid #ddd',
  borderRadius: '8px',
};

export default TodoList;

