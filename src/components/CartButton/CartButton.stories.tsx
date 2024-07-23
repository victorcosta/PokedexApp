import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CartButton from './CartButton';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

export default {
  title: 'CartButton',
  component: CartButton
} as ComponentMeta<typeof CartButton>;

const Stack = createStackNavigator();

const MockedNavigator = ({ component }: { component: React.FC }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={component} />
        <Stack.Screen
          name="Cart"
          component={() => (
            <View>
              <Text>Cart Screen</Text>
            </View>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Template: ComponentStory<typeof CartButton> = args => (
  <MockedNavigator component={() => <CartButton {...args} />} />
);

export const EmptyCart = Template.bind({});
EmptyCart.args = {
  cartCount: 0
};

export const FilledCart = Template.bind({});
FilledCart.args = {
  cartCount: 3
};
