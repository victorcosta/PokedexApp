import React from 'react';
import { View, FlatList, Button, Text, Image, TouchableOpacity } from 'react-native';
import { useCart } from '../../context/CartContext';
import Icon from 'react-native-vector-icons/FontAwesome6';
import styles from './CartScreen.style';
import CartItem from '../../components/CartItem/CartItem';


const CartScreen: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const renderItem = ({ item }: { item: any }) => (
    <CartItem product={item} removeFromCart={removeFromCart}  />
  );

  return (
    <View style={styles.container}>
      {cart?.length === 0 ? (
        <View style={styles.centerContent}>
          <Text style={styles.emptyText}>The cart is empty! </Text>
        </View>
      ) : (
        <>
          <Text style={styles.textProducts}>{cart.length} Produtos Adicionados</Text>
          <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.list}
          />
        </>
      )}
    </View>
  );
};


export default CartScreen;