import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import styles from './AddCartButton.style';

export enum AddCartButtonTypes {
  Add,
  Remove
}

interface AddCartButtonProps {
  type: AddCartButtonTypes;
  onPress: () => void;
  testID: string;
}

const AddCartButton: React.FC<AddCartButtonProps> = ({ type, onPress, testID }) => {

  return (
    <TouchableOpacity 
      testID={testID}
      style={styles.button} 
      onPress={onPress}>
      <Text style={(type === AddCartButtonTypes.Add) ? styles.textAdd : styles.textRemove}>
        {(type === AddCartButtonTypes.Add) ? (
          <>
            <Icon name="plus" size={20}/>{' Add'}
          </>
        ) : (
          <>
            <Icon name="xmark" size={20}/>{' Remove'}
          </>
        )}
      </Text>
    </TouchableOpacity>
  );
};


export default AddCartButton;
