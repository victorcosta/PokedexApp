import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './Loading.style';

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <ActivityIndicator testID="loading-indicator" size={'large'} />
      </View>
    </View>
  );
};

export default Loading;
