import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems:'center',
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  contentItem: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'flex-start'
  },
  itemText: {
    fontSize: 18,
    textTransform:'capitalize',
    color: '#3D405B',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemRemove: {
    padding: 8,
  },
  textProducts: {
    paddingHorizontal: 16,
    fontSize: 18,
    color: '#3D405B',
  }
});

export default styles;
