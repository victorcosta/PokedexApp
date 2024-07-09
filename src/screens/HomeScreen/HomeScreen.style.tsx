import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import ProductList from '../../components/ProductList/ProductList';
import CartButton from '../../components/CartButton/CartButton';

interface Product {
  name: string;
  url: string;
}

const HomeScreen = ({ navigation }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => setProducts(response.data.results))
      .catch(error => console.error(error));
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product: Product) => {
    setCart(cart.filter(item => item.name !== product.name));
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <CartButton cartCount={cart.length} />,
    });
  }, [cart]);

  return (
    <View style={styles.container}>
      <ProductList
        products={products}
        cart={cart}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
