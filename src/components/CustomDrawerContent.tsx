import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {styled} from 'nativewind';

const StyledView = styled(View);

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
            <StyledView className="flex flex-row items-center gap-10 ml-">
              <Icon name={`${icons[index]}`} size={20} />
              <Text style={{fontSize: 20}}>{route.name}</Text>
            </StyledView>
          )}
          onPress={() => navigation.navigate(route.name)}
        />
      ))}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({});

export default CustomDrawerContent;
