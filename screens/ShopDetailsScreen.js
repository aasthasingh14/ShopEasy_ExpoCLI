import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ShopDetailScreens = ({ navigation, route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
      <Text style={styles.discount}>Discount: {product.discountPercentage}%</Text>
      <Text style={styles.rating}>Rating: {product.rating}</Text>
      <Text style={styles.stock}>Stock: {product.stock}</Text>
      <Text style={styles.brand}>Brand: {product.brand}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
    </View>
  );
};

export default ShopDetailScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  thumbnail: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
  },
  price: {
    marginBottom: 10,
  },
  discount: {
    marginBottom: 10,
  },
  rating: {
    marginBottom: 10,
  },
  stock: {
    marginBottom: 10,
  },
  brand: {
    marginBottom: 10,
  },
  category: {
    marginBottom: 10,
  },
});
