import React, {useEffect, useState} from 'react';
import {Image, View, Text} from 'react-native';
import {styled} from 'nativewind';
import {Slider} from '@miblanchard/react-native-slider';

const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledText = styled(Text);

type TimerProps = {
  isActive: boolean;
};

export default function Timer({isActive}: TimerProps) {
  // Time in minutes
  const initialTime = 120 * 60;
  const [time, setTime] = useState(initialTime);
  const [formattedTime, setFormattedTime] = useState('00:00');
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((minutes: number) => minutes - 1); // Update minutes every second
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
      setTime(initialTime);
    };
  }, [isActive]);

  useEffect(() => {
    setFormattedTime(formatTime(time));
  }, [time]);

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <StyledView className="flex items-center gap-10">
      <StyledImage source={require('../assets/placeholder.png')} />
      <StyledText className="text-6xl text-white font-extralight">
        {formattedTime}
      </StyledText>
    </StyledView>
  );
}
