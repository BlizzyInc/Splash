import React from 'react';
import {Text, View} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function HomeScreen({navigation}: any) {
  return (
    <StyledView className="flex items-center justify-center min-h-screen bg-[#6AA3CE]">
      <StyledText className="text-2xl"></StyledText>
    </StyledView>
  );
}
