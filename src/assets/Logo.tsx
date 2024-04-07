import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const Logo = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={130}
    height={130}
    fill="none"
    {...props}>
    <Circle cx={65} cy={65} r={65} fill="#275B81" />
    <Path
      fill="#6AA3CE"
      d="M6.178 61.375c.138-7.333 8.826-18.544 25.14-18.239 16.315.306 27.453 18.16 39.226 24.356-10.733 5.084-12.024 11.055-27.758 14.902-17.933 4.384-24.806-9.223-36.608-21.02Z"
    />
    <Path
      fill="#1877F2"
      d="M124.091 60.728c0 32.635-26.456 59.091-59.091 59.091-32.635 0-59.09-26.456-59.09-59.091 16.544 15.5 31.908 38.09 59.09 2.5 23.636-20.683 24.818-25.546 59.091-2.5Z"
    />
  </Svg>
);
export default Logo;
