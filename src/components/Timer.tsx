import React, {useEffect, useState} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {styled} from 'nativewind';
import CircularSlider from './CircularSlider';

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
  const [sliderValue, setSliderValue] = useState(0);

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

  useEffect(() => {
    setTime(angleToSeconds(sliderValue));
  }, [sliderValue]);
  // Map 0-360 degrees to 0-7200 seconds
  const angleToSeconds = (angle: number) => {
    const totalSeconds = (angle / 360) * 7200;
    return Math.round(totalSeconds);
  };

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <StyledView className="flex items-center gap-10">
      <View style={styles.container}>
        <View style={styles.slider}>
          <CircularSlider
            content={
              <StyledImage
                className="flex items-center justify-center"
                source={require('../assets/placeholder.png')}
              />
            }
            width={300}
            height={300}
            meterColor="#578DB7"
            textColor="#fff"
            value={sliderValue}
            onValueChange={value => setSliderValue(value)}
          />
        </View>
      </View>

      {/* <StyledImage source={require('../assets/placeholder.png')} /> */}
      <StyledText className="text-6xl text-white font-extralight">
        {formattedTime}
      </StyledText>
    </StyledView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   height: 200,
  //   width: 300,
  //   borderRadius: 50,
  //   transform: [{rotate: '-90deg'}],
  // },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    position: 'relative',
    width: 300,
    height: 300,
  },
  slider: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
