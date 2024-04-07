import {StyleSheet} from 'react-native';

export const inputStyles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  textInputWithLabel: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: 'white',
    width: '45%',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#858484',
  },
  inputText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'left',
    minWidth: '30%',
  },
});
