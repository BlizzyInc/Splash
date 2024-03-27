import React, {useEffect, useState} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {styled} from 'nativewind';
import {Slider} from '@miblanchard/react-native-slider';
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
  const [value, setValue] = useState(0);
  const [slider, setSlider] = useState(20);

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
      <View style={styles.container}>
        <View style={styles.slider}>
          <CircularSlider
            width={200}
            height={200}
            meterColor="#0cd"
            textColor="#fff"
            value={slider}
            onValueChange={value => setSlider(value)}
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
    width: 200,
    height: 200,
  },
  slider: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
