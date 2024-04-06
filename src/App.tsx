import React, {useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'; // Import here
import 'react-native-gesture-handler';
import {AppState} from 'react-native';
import {TimerProvider} from './context/TimerContext';
import {UserDetailsProvider} from './context/UserDetails';
import {DailyStatsProvider} from './context/DailyStats';
import {AuthProvider} from './context/AuthContext';
import AppNavigator from './components/AppNavigator';
import {PaperProvider} from 'react-native-paper';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#6AA3CE',
  },
};
function App(): React.JSX.Element {
  useEffect(() => {
    const appStateListener = AppState.addEventListener(
      'change',
      nextAppState => {
        if (nextAppState !== 'active') {
          preventAppSwitch();
        }
      },
    );

    return () => {
      appStateListener.remove();
    };
  }, []);

  const preventAppSwitch = () => {
    console.log('App Switch Detected');
  };
  return (
    <PaperProvider>
      <UserDetailsProvider>
        <AuthProvider>
          <DailyStatsProvider>
            <TimerProvider>
              <NavigationContainer theme={MyTheme}>
                <AppNavigator />
              </NavigationContainer>
            </TimerProvider>
          </DailyStatsProvider>
        </AuthProvider>
      </UserDetailsProvider>
    </PaperProvider>
  );
}

export default App;
