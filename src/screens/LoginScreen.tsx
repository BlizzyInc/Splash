import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useAuthContext} from '../context/AuthContext';
import Logo from '../assets/Logo';
import EmailPasswrodInput from '../components/shared/EmailPasswordInput';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const {signInWithFacebook, signOut, handleLogin, handleSignUp} =
    useAuthContext();

  const handleLoginOrSignUp = async () => {
    if (isSignUp) {
      await handleSignUp(email, password, userName);
    } else {
      await handleLogin(email, password);
    }
  };
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.Title}>Splash</Text>
      <View style={styles.logInSection}>
        <EmailPasswrodInput
          isSignUp={isSignUp}
          setEmail={setEmail}
          setPassword={setPassword}
          setUserName={setUserName}
        />
        <TouchableOpacity onPress={handleLoginOrSignUp} style={styles.button}>
          <Text style={styles.buttonText}>
            {isSignUp ? 'SIGN UP' : 'LOG IN'}
          </Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Text style={styles.text}>OR</Text>
          <Text style={styles.text}>
            {isSignUp ? 'SIGN UP ' : 'LOG IN '}
            WITH
          </Text>
        </View>
        {!isSignUp && (
          <View style={styles.oAuth}>
            <TouchableOpacity onPress={signInWithFacebook}>
              <Image
                source={require('../assets/logos_facebook.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/logos_google.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity>
          </View>
        )}
        <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Text style={{color: '#858484'}}>
              {isSignUp ? 'Already have an account' : "Don't have an account"}{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIsSignUp(!isSignUp);
              }}>
              <Text style={{color: '#588A84'}}>
                {isSignUp ? 'Log in' : 'Sign up'}
              </Text>
            </TouchableOpacity>
          </View>
          {!isSignUp && (
            <TouchableOpacity>
              <Text
                style={{
                  color: '#858484',
                  marginTop: 10,
                  textAlign: 'left',
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 30,
    marginTop: 30,
    marginBottom: 20,
  },
  logInSection: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6AA3CE',
    paddingTop: 70,
  },
  text: {
    fontSize: 13,
    color: 'gray',
    // fontStyle: 'italic',
  },
  oAuth: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    paddingHorizontal: 50,
    paddingVertical: 12,
    backgroundColor: '#578DB7',
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LoginScreen;
