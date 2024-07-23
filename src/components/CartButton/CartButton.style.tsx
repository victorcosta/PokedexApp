import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    marginRight: 16
  },
  icon: {
    marginRight: 5
  },
  badge: {
    backgroundColor: '#E07A5F',
    width: 15,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    position: 'absolute',
    top: -5,
    right: -10
  },
  badgeText: {
    fontSize: 10,
    color: '#fff'
  }
});

export default styles;
