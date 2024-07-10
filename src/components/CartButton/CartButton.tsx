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
    <TouchableOpacity style={styles.button} testID='cartButton' onPress={() => navigation.navigate('Cart')}>
      <Text style={styles.text}>
        <Icon name="cart-shopping" size={22}/> 
        {cartCount > 0 && (
          <View testID='badge' style={styles.badge}>
            <Text style={styles.badgeText} >
              {cartCount}
            </Text>
          </View>
        )}
      </Text>
    </TouchableOpacity>
  );
};


export default CartButton;
