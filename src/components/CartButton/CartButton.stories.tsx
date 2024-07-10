import React from 'react';
import { Text, View } from 'react-native';
import { Meta, StoryObj } from '@storybook/react-native';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CartButton from './CartButton'; // ajuste o caminho conforme necessário

const Stack = createStackNavigator();

const MockedNavigator = ({ component }: { component: React.FC }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={component} />
        <Stack.Screen name="Cart" component={() => <View><Text>Cart Screen</Text></View>} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const meta: Meta = {
  title: 'CartButton',
  component: CartButton,
  decorators: [withKnobs],
};

export default meta;

type Story = StoryObj<typeof CartButton>;

export const Default: Story = {
  args: {
    cartCount: 3,
  },
  render: (args) => (
    <MockedNavigator component={() => <CartButton {...args} />} />
  ),
};

export const Secondary: Story = {
  args: {
    cartCount: 0,
  },
  render: (args) => (
    <MockedNavigator component={() => <CartButton {...args} />} />
  ),
};
