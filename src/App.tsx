import React from 'react';
import type {PropsWithChildren} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {styled} from 'nativewind';
import HomeScreen from './screens/HomeScreen';

const StyledView = styled(View);
const StyledText = styled(Text);
function App(): React.JSX.Element {
  return (
    <StyledView className="flex items-center justify-center min-h-screen">
      <StyledText className="text-2xl">Test2</StyledText>
    </StyledView>
  );
}

const styles = StyleSheet.create({});

export default App;
