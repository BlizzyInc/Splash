import React, {useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'; // Import here
import HomeScreen from './screens/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import CustomDrawerContent from './components/CustomDrawerContent';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {TimerProvider} from './context/TimerContext';

const Drawer = createDrawerNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#6AA3CE',
  },
};
function App(): React.JSX.Element {
  const icons = ['house', 'user', 'cog', 'info-circle'];
  return (
    <TimerProvider>
      <NavigationContainer theme={MyTheme}>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => (
            <CustomDrawerContent {...props} icons={icons} />
          )}
          screenOptions={{
            header: navigation => (
              <View style={styles.headerStyles}>
                <TouchableOpacity>
                  <Icon
                    name="bars"
                    size={30}
                    color="#000"
                    onPress={() => navigation.navigation.toggleDrawer()}
                  />
                </TouchableOpacity>
                {navigation.route.name === 'Home' ? (
                  <>
                    <View style={styles.headerMiddleButton}>
                      <TouchableOpacity>
                        <Image source={require('./assets/profile.png')} />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image source={require('./assets/leaderboard.png')} />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                      <Image source={require('./assets/shop.png')} />
                    </TouchableOpacity>
                  </>
                ) : null}
              </View>
            ),
          }}>
          <Drawer.Screen
            name="Home"
            options={{
              drawerStyle: {
                backgroundColor: '#6AA3CE',
                paddingTop: 50,
              },
            }}>
            {props => <HomeScreen {...props} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </TimerProvider>
  );
}

const styles = StyleSheet.create({
  headerStyles: {
    backgroundColor: '#6AA3CE',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 55,
  },
  headerMiddleButton: {
    display: 'flex',
    borderWidth: 7,
    borderColor: '#fff',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    paddingLeft: 14,
    paddingHorizontal: 5,
    width: 150,
    height: 50,
  },
});

export default App;
