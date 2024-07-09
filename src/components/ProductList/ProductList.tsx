import React from 'react';
import { FlatList } from 'react-native';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductList.style';

interface ProductListProps {
  products: Array<{ name: string; url: string }>;
  cart: Array<{ name: string; url: string }>;
  onAddToCart: (product: { name: string; url: string }) => void;
  onRemoveFromCart: (product: { name: string; url: string }) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, cart, onAddToCart, onRemoveFromCart }) => {
  
  const renderItem = ({ item }: { item: { name: string; url: string } }) => {
    const inCart = cart.some(product => product.name === item.name);

    return (
      <ProductItem
        product={item}
        inCart={inCart}
        onAdd={() => onAddToCart(item)}
        onRemove={() => onRemoveFromCart(item)}
      />
    );
  };

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      contentContainerStyle={styles.list}
    />
  );
};

export default ProductList;