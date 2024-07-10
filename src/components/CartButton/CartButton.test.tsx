import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CartButton from './CartButton';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native');

const mockNavigate = jest.fn();

beforeEach(() => {
  (useNavigation as jest.Mock).mockReturnValue({
    navigate: mockNavigate,
  });
});

describe('CartButton Component', () => {
  test('Shoud renders CartButton correctly when cartCount is > 0', () => {
    const { getByTestId } = render(<CartButton cartCount={2} />);

    expect(getByTestId('badge')).toBeTruthy();
  });
  test('Shoud renders CartButton correctly when cartCount is 0', () => {
    const { queryByTestId } = render(<CartButton cartCount={0} />);

    expect(queryByTestId('badge')).toBeFalsy();
  });

  test('shoud navigate to CartScreen when pressed', () => {
    const { getByTestId } = render(<CartButton cartCount={1} />);

    fireEvent.press(getByTestId('badge'));

    expect(mockNavigate).toHaveBeenCalledWith('Cart');
  });
});
