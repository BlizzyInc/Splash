import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useTimer} from '../context/TimerContext';
import FaucetIcon from '../assets/FaucetIcon';
import Timer from '../components/Timer';
import {useAuthContext} from '../context/AuthContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    marginTop: 30,
    fontSize: 20,
    fontStyle: 'italic',
    color: 'white',
  },
  iconContainer: {
    alignSelf: 'flex-start',
    marginTop: 35,
    marginLeft: '15%',
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

interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({navigation}: HomeScreenProps) {
  const {user, signInWithFacebook, signOut} = useAuthContext();
  const {isActive, setIsActive} = useTimer();
  const onStart = () => {
    setIsActive(!isActive);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {isActive ? 'Put Down Your Phone' : 'Start Focusing Today'}
      </Text>
      <View style={styles.iconContainer}>
        <FaucetIcon />
      </View>
      <Timer />
      <TouchableOpacity onPress={() => onStart()} style={styles.button}>
        <Text style={styles.buttonText}>{isActive ? 'GIVE UP' : 'START'}</Text>
      </TouchableOpacity>
    </View>
  );
}
