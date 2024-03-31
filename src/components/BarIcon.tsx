import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface Props {
  navigation: DrawerNavigationProp<any>;
}

const BarIcon: React.FC<Props> = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Icon name="bars" size={30} color="#000" />
    </TouchableOpacity>
  );
};

export default BarIcon;
