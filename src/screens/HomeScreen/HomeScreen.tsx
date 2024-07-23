import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useCart } from '../../context/CartContext';
import { useHomeApi } from '../../hooks/UseHomeApi';
import ProductList from '../../components/ProductList/ProductList';
import CartButton from '../../components/CartButton/CartButton';
import Loading from '../../components/Loading/Loading';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

import styles from './HomeScreen.style';

export interface Product {
  name: string;
  url: string;
}

const HomeScreen = ({ navigation }: any) => {
  const { data, error, isLoading } = useHomeApi();
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <CartButton cartCount={cart.length} />
    });
  }, [cart]);

  if (isLoading && !error) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <View style={styles.container}>
      <ProductList
        products={data}
        cart={cart}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
      />
    </View>
  );
};

export default HomeScreen;
