import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductItem from './ProductItem';

const product = { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' };
const onAdd = jest.fn();
const onRemove = jest.fn();


describe('ProductItem Component', () => {
  test('shoud render ProductItem correctly', () => {
    const { getByText, getByTestId } = render(
      <ProductItem
        product={product}
        inCart={false}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    );

    expect(getByText('Bulbasaur')).toBeTruthy();
    expect(getByTestId('itemImage')).toBeTruthy();
  });

  test('shoud call onAdd function when add button is pressed', () => {
    const { getByTestId } = render(
      <ProductItem
        product={product}
        inCart={false}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    );

    fireEvent.press(getByTestId('addCart'));

    expect(onAdd).toHaveBeenCalledWith();
  });

  test('shoud call onRemove function when remove button is pressed', () => {
    const { getByTestId } = render(
      <ProductItem
        product={product}
        inCart={true}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    );

    fireEvent.press(getByTestId('removeCart'));

    expect(onRemove).toHaveBeenCalledWith();
  });
});

