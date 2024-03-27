import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styled} from 'nativewind';
import Timer from '../components/Timer';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyleImage = styled(Image);
const StyledouchableOpacity = styled(TouchableOpacity);
interface HomeScreenProps {
  navigation: any;
  isActive: boolean;
  onStart: Function;
}

export default function HomeScreen({
  navigation,
  isActive,
  onStart,
}: HomeScreenProps) {
  return (
    <StyledView className="flex items-center">
      <StyledText className="mt-10 text-xl italic text-white">
        {isActive ? 'Put Down Your Phone' : 'Start Focusing Today'}
      </StyledText>

      <StyleImage
        className="self-start mt-10 ml-16"
        source={require('../assets/faucet.png')}
      />
      <Timer isActive={isActive} />
      <StyledouchableOpacity
        onPress={() => onStart()}
        className="px-14 py-3 bg-[#578DB7] rounded-full my-5">
        <StyledText className="text-lg font-bold text-white">
          {isActive ? 'GIVE UP' : 'START'}
        </StyledText>
      </StyledouchableOpacity>
    </StyledView>
  );
}
