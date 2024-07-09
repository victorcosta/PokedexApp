import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 32,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  text: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginVertical: 8,
    color: '#3D405B',
  },
});

export default styles;
