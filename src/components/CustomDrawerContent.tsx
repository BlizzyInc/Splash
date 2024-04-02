import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useAuthContext} from '../context/AuthContext';

interface CustomDrawerContentProps extends DrawerContentComponentProps {
  icons: string[];
}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({
  state,
  navigation,
  icons,
}) => {
  const {user, signOut} = useAuthContext();

  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <View style={styles.itemContainer}>
          {state.routes.map((route, index) => (
            <DrawerItem
              key={index}
              label={() => (
                <View style={styles.drawerItem}>
                  <Icon name={`${icons[index]}`} size={20} />
                  <Text style={styles.drawerItemText}>{route.name}</Text>
                </View>
              )}
              onPress={() => navigation.navigate(route.name)}
            />
          ))}
        </View>
      </DrawerContentScrollView>
      {user && (
        <View style={styles.bottomContainer}>
          <DrawerItem
            label={() => (
              <View style={styles.signOutButton}>
                <Text style={styles.logOutText}>LOG OUT</Text>
              </View>
            )}
            onPress={signOut}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  signOutButton: {
    padding: 10,
    alignItems: 'center',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  drawerItemText: {
    fontSize: 20,
    marginLeft: 10,
  },
  logOutText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'white',
  },
});

export default CustomDrawerContent;
