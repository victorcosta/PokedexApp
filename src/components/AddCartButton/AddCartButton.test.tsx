import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddCartButton, { AddCartButtonTypes } from './AddCartButton';

test('renders add button correctly', () => {
  const { getByTestId } = render(
    <AddCartButton type={AddCartButtonTypes.Add} onPress={jest.fn()} testID="addCart" />
  );

  expect(getByTestId('addCart')).toBeTruthy();
});

test('renders remove button correctly', () => {
  const { getByTestId } = render(
    <AddCartButton type={AddCartButtonTypes.Remove} onPress={jest.fn()} testID="removeCart" />
  );

  expect(getByTestId('removeCart')).toBeTruthy();
});

test('calls onPress when button is pressed', () => {
  const onPress = jest.fn();
  const { getByTestId } = render(
    <AddCartButton type={AddCartButtonTypes.Add} onPress={onPress} testID="addCart" />
  );

  fireEvent.press(getByTestId('addCart'));

  expect(onPress).toHaveBeenCalledWith();
});
