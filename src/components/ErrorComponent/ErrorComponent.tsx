import React from 'react';
import { Text, View } from 'react-native';

import styles from './ErrorComponent.style';

const ErrorComponent: React.FC = () => {
  return (
    <View style={styles.centerContent}>
      <Text style={styles.emptyText}>Ooops! SomeThing went wrong! </Text>
    </View>
  );
};

export default ErrorComponent;
