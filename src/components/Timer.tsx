import React, {useEffect, useState} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import CircularSlider from './CircularSlider';
import {useTimer} from '../context/TimerContext';
import {Dimensions} from 'react-native';

type TimerProps = {
  isActive: boolean;
  setIsActive: Function;
  onStart: Function;
};

const {width, height} = Dimensions.get('window');
export default function Timer() {
  const {isActive, setIsActive} = useTimer();

  // Time in minutes
  // const initialTime = 120 * 60;
  const [time, setTime] = useState(0);
  const [formattedTime, setFormattedTime] = useState('00:00');
  const [sliderValue, setSliderValue] = useState(0);
  const [isTimerStopped, setIsTimerStopped] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((seconds: number) => {
          if (seconds > 0) {
            setSliderValue(((seconds - 1) / 7200) * 360);
            return seconds - 1; // Update seconds every second
          } else {
            setIsTimerStopped(true); // Stop the timer
            if (interval) clearInterval(interval);
            return seconds;
          }
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
      // setTime(initialTime);
    };
  }, [isActive]);

  useEffect(() => {
    if (isTimerStopped) {
      setIsActive(false);
    }
    setIsTimerStopped(false);
  }, [isTimerStopped]);

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
    <View style={styles.container}>
      <View style={styles.slider}>
        <CircularSlider
          width={height / 2.6}
          height={height / 2.6}
          meterColor="#578DB7"
          textColor="#fff"
          value={sliderValue}
          onValueChange={value => setSliderValue(value)}
        />
      </View>
      <Text style={styles.text}>{formattedTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  slider: {
    position: 'relative',
    width: height / 2.6,
    height: height / 2.6,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 60,
    fontWeight: '200',
    color: 'white',
  },
});
