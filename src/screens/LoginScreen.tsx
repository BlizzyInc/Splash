import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useAuthContext} from '../context/AuthContext';

const LoginScreen = () => {
  const {signInWithFacebook, signOut} = useAuthContext();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please sign in to continue</Text>
      <TouchableOpacity onPress={signInWithFacebook} style={styles.button}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6AA3CE',
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 50,
    paddingVertical: 12,
    backgroundColor: '#578DB7',
    borderRadius: 50,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LoginScreen;
