import React, {useState} from 'react';
import {
  PanResponder,
  PanResponderGestureState,
  GestureResponderEvent,
} from 'react-native';
import Svg, {Path, Circle, G, Text, Image} from 'react-native-svg';

interface CircularSliderProps {
  width: number;
  height: number;
  value: number;
  meterColor: string;
  textColor: string;
  onValueChange: (value: number) => void;
  content: React.ReactNode;
}

const CircularSlider: React.FC<CircularSliderProps> = ({
  width,
  height,
  value,
  meterColor,
  textColor,
  onValueChange,
  content,
}) => {
  const [cx] = useState<number>(width / 2);
  const [cy] = useState<number>(height / 2);
  const [r] = useState<number>((Math.min(width, height) / 2) * 0.85);

  const polarToCartesian = (angle: number) => {
    const a = ((angle - 90) * Math.PI) / 180.0;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    return {x, y};
  };

  const cartesianToPolar = (x: number, y: number) => {
    return Math.round((Math.atan2(y - cy, x - cx) * 180) / Math.PI + 90);
  };

  const handlePanResponderMove = (
    event: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ) => {
    const angle = cartesianToPolar(
      event.nativeEvent.locationX,
      event.nativeEvent.locationY,
    );
    if (angle < 0) {
      onValueChange(360 + angle);
      return;
    }
    onValueChange(angle);
  };

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: handlePanResponderMove,
    }),
  ).current;

  const startCoord = polarToCartesian(0);
  const endCoord = polarToCartesian(value);

  return (
    <Svg width={width} height={height}>
      <Circle cx={cx} cy={cy} r={r} fill={'#D3B361'} />

      <Circle cx={cx} cy={cy} r={r} stroke="#eee" strokeWidth={8} fill="none" />
      <Path
        stroke={meterColor}
        strokeWidth={10}
        fill="none"
        d={`M${startCoord.x} ${startCoord.y} A ${r} ${r} 0 ${
          value > 180 ? 1 : 0
        } 1 ${endCoord.x} ${endCoord.y}`}
      />
      <G x={endCoord.x - 7.5} y={endCoord.y - 7.5}>
        <Circle
          cx={7.5}
          cy={7.5}
          r={10}
          fill={meterColor}
          {...panResponder.panHandlers}
        />
      </G>
      <G x={cx - 120} y={cy - 100}>
        <Image
          href={require('../assets/barrel.png')}
          width={240}
          height={240}
        />
      </G>
    </Svg>
  );
};

export default CircularSlider;
