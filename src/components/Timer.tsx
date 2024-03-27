import React, {useEffect, useState} from 'react';
import {Image, View, Text} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledText = styled(Text);

type TimerProps = {
  isActive: boolean;
  time: number;
  setTime: Function;
};

export default function Timer({isActive, time, setTime}: TimerProps) {
  const [timeInMinutes, setTimeInMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeInMinutes(prevTime => prevTime + 1);
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval);
  }, []);

  function convertMinutesToHHMM(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(remainingMinutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }
  const formattedTime = convertMinutesToHHMM(time);

  return (
    <StyledView className="flex items-center gap-10">
      <StyledImage source={require('../assets/placeholder.png')} />
      <StyledText className="text-6xl text-white font-extralight">
        {formattedTime}
      </StyledText>
    </StyledView>
  );
}
