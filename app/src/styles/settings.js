import { StyleSheet } from 'react-native';

const settingsStyle = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  },
  scrollContainer: {
    padding: 16
  },
  row: {
    marginBottom: 24,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  switchText: {
    width: '70%',
    justifyContent: 'center'
  },
  switchContainer: {
    width: '25%',
    justifyContent: 'center'
  },
  label: {
    fontSize: 14,
    fontFamily: 'Metropolis-Regular',
    lineHeight: 18
  },
  description: {
    color: '#aaaaaa',
    fontSize: 12,
    fontFamily: 'Metropolis-Regular',
    lineHeight: 18
  }
});

export default settingsStyle;