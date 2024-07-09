import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import ProductList from '../../components/ProductList/ProductList';
import CartButton from '../../components/CartButton/CartButton';
import { useCart } from '../../context/CartContext';
import styles from './HomeScreen.style';

interface Product {
  name: string;
  url: string;
}

const HomeScreen = ({ navigation }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => setProducts(response.data.results))
      .catch(error => console.error(error));
  }, []);

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

export default HomeScreen;
