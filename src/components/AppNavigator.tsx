import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import ProfileIcon from '../assets/ProfileIcon';
import LeaderboardIcon from '../assets/LeaderboardIcon';
import ShopIcon from '../assets/ShopIcon';
import {useAuthContext} from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const {user} = useAuthContext();
  const commonDrawerStyles = {
    drawerStyle: {
      backgroundColor: '#6AA3CE',
      paddingTop: 50,
    },
  };
  const icons = ['house', 'user', 'cog', 'info-circle'];

  return user ? (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} icons={icons} />}
      screenOptions={{
        header: navigation => (
          <View style={styles.headerStyles}>
            {navigation.route.name !== 'Profile' && (
              <TouchableOpacity>
                <Icon
                  name="bars"
                  size={30}
                  color="#000"
                  onPress={() => navigation.navigation.toggleDrawer()}
                />
              </TouchableOpacity>
            )}

            {navigation.route.name === 'Home' ? (
              <>
                <View style={styles.headerMiddleButton}>
                  <TouchableOpacity
                    onPress={() => navigation.navigation.navigate('Profile')}>
                    <ProfileIcon />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <LeaderboardIcon />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <ShopIcon />
                </TouchableOpacity>
              </>
            ) : null}
          </View>
        ),
      }}>
      <Drawer.Screen name="Home" options={commonDrawerStyles}>
        {props => <HomeScreen {...props} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={commonDrawerStyles}></Drawer.Screen>
    </Drawer.Navigator>
  ) : (
    <LoginScreen />
  );
};

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

export default AppNavigator;
