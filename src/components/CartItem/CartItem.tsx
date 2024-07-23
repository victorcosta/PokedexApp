import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import styles from './CartItem.style';

interface CartItemProps {
  product: {
    name: string;
    url: string;
  };
  removeFromCart: (product: any) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, removeFromCart }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
    product.url.split('/')[6]
  }.png`;
  return (
    <View style={styles.item}>
      <View style={styles.contentItem}>
        <Image
          testID="itemImage"
          style={styles.itemImage}
          resizeMode="contain"
          source={{ uri: imageUrl }}
        />
        <Text style={styles.itemText}>{product.name}</Text>
      </View>
      <TouchableOpacity
        testID="itemRemove"
        style={styles.itemRemove}
        onPress={() => removeFromCart(product)}>
        <Icon name="xmark" color="#E07A5F" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
