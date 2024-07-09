import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './ProductItem.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddCartButton, { AddCartButtonTypes } from '../AddCartButton/AddCartButton';

interface ProductItemProps {
  product: {
    name: string;
    url: string;
  };
  inCart: boolean;
  onAdd: () => void;
  onRemove: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, inCart, onAdd, onRemove }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode='contain' source={{ uri: 'https://via.placeholder.com/150' }} />
      <Text style={styles.text}>{product.name}</Text>
      {inCart ? (
        <AddCartButton type={AddCartButtonTypes.Remove} onPress={onRemove} />
      ) : (
        <AddCartButton type={AddCartButtonTypes.Add} onPress={onAdd} />
      )}
    </View>
  );
};

export default ProductItem;
