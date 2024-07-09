import React from 'react';
import { View, FlatList, Button, Text } from 'react-native';
import { useCart } from '../../context/CartContext';
import styles from './CartScreen.style';


const CartScreen: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Button title="Remove" onPress={() => removeFromCart(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};


export default CartScreen;