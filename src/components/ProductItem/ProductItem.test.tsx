import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductItem from './ProductItem';

const product = {
  name: 'Bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/'
};
const onAdd = jest.fn();
const onRemove = jest.fn();

describe('ProductItem Component', () => {
  it('Should render ProductItem correctly', () => {
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

  it('Should call onAdd function when add button is pressed', () => {
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

  it('Should call onRemove function when remove button is pressed', () => {
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
