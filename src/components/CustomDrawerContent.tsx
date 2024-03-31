import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

interface CustomDrawerContentProps extends DrawerContentComponentProps {
  icons: string[];
}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({
  state,
  navigation,
  icons,
}) => {
  return (
    <DrawerContentScrollView>
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
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
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
});

export default CustomDrawerContent;
