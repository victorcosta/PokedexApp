import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import styles from './CartButton.style';

interface CartButtonProps {
  cartCount: number;
}

const CartButton: React.FC<CartButtonProps> = ({ cartCount }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
      <Text style={styles.text}><Icon name="cart-shopping" size={20}/> 
      <View style={styles.count}>
        <Text style={styles.countText} >
          {cartCount}
        </Text>
      </View>
      </Text>
    </TouchableOpacity>
  );
};


export default CartButton;
