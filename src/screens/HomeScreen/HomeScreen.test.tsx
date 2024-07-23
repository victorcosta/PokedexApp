import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';
import axios from 'axios';
import { useCart } from '../../context/CartContext';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('axios');
jest.mock('../../context/CartContext');

const mockNavigation = {
  setOptions: jest.fn(),
};

const mockCart = {
  cart: [],
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();
  (useCart as jest.Mock).mockReturnValue(mockCart);
});
describe('Home Screen', () => {

  it('renders error state correctly', async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen navigation={mockNavigation} />
      </NavigationContainer>
    );

    await waitFor(() => {
      expect(getByText('Ooops! SomeThing went wrong!')).toBeTruthy();
    });
  });

  it('renders product list correctly', async () => {
    const products = [
      { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'Ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    ];
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: { results: products } });

    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen navigation={mockNavigation} />
      </NavigationContainer>
    );

    await waitFor(() => {
      expect(getByText('Bulbasaur')).toBeTruthy();
      expect(getByText('Ivysaur')).toBeTruthy();
    });
  });

  it('updates cart count in header', async () => {
    const products = [
      { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'Ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    ];
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: { results: products } });

    const { rerender } = render(
      <NavigationContainer>
        <HomeScreen navigation={mockNavigation} />
      </NavigationContainer>
    );

    await waitFor(() => {
      expect(mockNavigation.setOptions).toHaveBeenCalledWith({
        headerRight: expect.any(Function),
      });
    });

    (useCart as jest.Mock).mockReturnValue({
      ...mockCart,
      cart: [products[0]],
    });

    rerender(
      <NavigationContainer>
        <HomeScreen navigation={mockNavigation} />
      </NavigationContainer>
    );

    await waitFor(() => {
      expect(mockNavigation.setOptions).toHaveBeenCalledWith({
        headerRight: expect.any(Function),
      });
    });
  });
});
