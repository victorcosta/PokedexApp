import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import ProductList from '../../components/ProductList/ProductList';
import CartButton from '../../components/CartButton/CartButton';
import { useCart } from '../../context/CartContext';
import styles from './HomeScreen.style';
import { useApi } from '../../hooks/UseApi';

export interface Product {
  name: string;
  url: string;
}

const HomeScreen = ({ navigation }: any) => {
  const { data, error, isLoading } = useApi();
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <CartButton cartCount={cart.length} />
    });
  }, [cart]);

  return (
    <View style={styles.container}>
      {error && (
        <View style={styles.centerContent}>
          <Text style={styles.emptyText}>Ooops! SomeThing went wrong! </Text>
        </View>
      )}
      {isLoading && !error ? (
        <View style={styles.centerContent}>
          <ActivityIndicator testID="loading-indicator" size={'large'} />
        </View>
      ) : (
        <ProductList
          products={data}
          cart={cart}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
        />
      )}
    </View>
  );
};

export default HomeScreen;
