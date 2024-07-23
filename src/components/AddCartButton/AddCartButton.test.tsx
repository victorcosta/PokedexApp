import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddCartButton, { AddCartButtonTypes } from './AddCartButton';

describe('AddCartButton Component', () => {
  it('Should render AddCartButton correctly', () => {
    const { getByTestId } = render(
      <AddCartButton
        type={AddCartButtonTypes.Add}
        onPress={jest.fn()}
        testID="addCart"
      />
    );

    expect(getByTestId('addCart')).toBeTruthy();
  });

  it('Should render remove button correctly', () => {
    const { getByTestId } = render(
      <AddCartButton
        type={AddCartButtonTypes.Remove}
        onPress={jest.fn()}
        testID="removeCart"
      />
    );

    expect(getByTestId('removeCart')).toBeTruthy();
  });

  it('Should call onPress addCart when button is pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <AddCartButton
        type={AddCartButtonTypes.Add}
        onPress={onPress}
        testID="addCart"
      />
    );

    fireEvent.press(getByTestId('addCart'));

    expect(onPress).toHaveBeenCalledWith();
  });

  it('Should call onPress RemoveCart when button is pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <AddCartButton
        type={AddCartButtonTypes.Remove}
        onPress={onPress}
        testID="removeCart"
      />
    );

    fireEvent.press(getByTestId('removeCart'));

    expect(onPress).toHaveBeenCalledWith();
  });
});
