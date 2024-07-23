import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductList from './ProductList';

const products = [
  { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  { name: 'Ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' }
];

const cart = [
  { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
];

const onAddToCart = jest.fn();
const onRemoveFromCart = jest.fn();

describe('ProductList Component', () => {
  it('Should render ProductList correctly', () => {
    const { getByText } = render(
      <ProductList
        products={products}
        cart={cart}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
      />
    );

    expect(getByText('Bulbasaur')).toBeTruthy();
    expect(getByText('Ivysaur')).toBeTruthy();
  });

  it('should call onAddToCart funcion when add button is pressed', () => {
    const { getAllByTestId } = render(
      <ProductList
        products={products}
        cart={[]}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
      />
    );

    fireEvent.press(getAllByTestId('addCart')[0]);

    expect(onAddToCart).toHaveBeenCalledWith(products[0]);
  });

  it('Should call onRemoveFromCart function when remove button is pressed', () => {
    const { getByTestId } = render(
      <ProductList
        products={products}
        cart={cart}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
      />
    );

    fireEvent.press(getByTestId('removeCart'));

    expect(onRemoveFromCart).toHaveBeenCalledWith(products[0]);
  });
});
