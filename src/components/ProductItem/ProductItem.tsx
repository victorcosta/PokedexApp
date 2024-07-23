import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ProductItem.style';
import AddCartButton, {
  AddCartButtonTypes
} from '../AddCartButton/AddCartButton';

interface ProductItemProps {
  product: {
    name: string;
    url: string;
  };
  inCart: boolean;
  onAdd: () => void;
  onRemove: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  inCart,
  onAdd,
  onRemove
}) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
    product.url.split('/')[6]
  }.png`;
  return (
    <View style={styles.container}>
      <Image
        testID="itemImage"
        source={{ uri: imgUrl }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>{product.name}</Text>
      {inCart ? (
        <AddCartButton
          testID="removeCart"
          type={AddCartButtonTypes.Remove}
          onPress={onRemove}
        />
      ) : (
        <AddCartButton
          testID="addCart"
          type={AddCartButtonTypes.Add}
          onPress={onAdd}
        />
      )}
    </View>
  );
};

export default ProductItem;
