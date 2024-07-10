import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
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
  const [loading, setLoading] = useState<Boolean>(false);
  const [hasError, setHasError] = useState<Boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    setLoading(true);
    const getApi = async () => {
      await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response => {
          setProducts(response.data.results)
          setLoading(false);
        })
        .catch(_ => {
          setLoading(false);
          setHasError(true);
        });
    }

    getApi();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <CartButton cartCount={cart.length} />,
    });
  }, [cart]);

  return (
    <View style={styles.container}>
      {hasError && (
        <View style={styles.centerContent}>
          <Text style={styles.emptyText}>Ooops! SomeThing went wrong! </Text>
        </View>
      )}
      {loading && !hasError ? (
        <View style={styles.centerContent}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ProductList
          products={products}
          cart={cart}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          />
      )}
    </View>
  );
};

export default HomeScreen;
