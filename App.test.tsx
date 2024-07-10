import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';

jest.mock('./src/context/CartContext', () => ({
  CartProvider: ({ children }:any) => children,
}));

test('renders without crashing', () => {
  render(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
});
