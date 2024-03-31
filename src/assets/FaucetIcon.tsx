import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const FaucetIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={68}
    height={88}
    fill="none"
    {...props}>
    <Path
      fill="#275B81"
      d="M59.5 63S68 72.552 68 79.31c0 5.332-3.284 8.69-8.5 8.69S51 84.642 51 79.31C51 72.553 59.5 63 59.5 63Zm-.944 21.862v-1.448a3.507 3.507 0 0 1-2.504-1.062 3.666 3.666 0 0 1-1.038-2.559h-1.417a5.132 5.132 0 0 0 1.454 3.583 4.91 4.91 0 0 0 3.505 1.486ZM24 4v1.5L12 4C9.787 4 8 5.787 8 8s1.787 4 4 4l12-1.5 3.875-.488L28 10l.125.012L32 10.5 44 12c2.212 0 4-1.787 4-4s-1.788-4-4-4L32 5.5V4c0-2.212-1.788-4-4-4-2.212 0-4 1.788-4 4ZM4 24c-2.212 0-4 1.788-4 4v8c0 2.212 1.788 4 4 4h12.512c2.526 3.625 6.738 6 11.488 6 4.75 0 8.962-2.375 11.487-6H44c2.212 0 4 1.788 4 4 0 2.212 1.788 4 4 4h8c2.212 0 4-1.788 4-4 0-11.05-8.95-20-20-20h-4l-2.825-2.825A3.993 3.993 0 0 0 34.35 20H32v-5.475l-4-.5-4 .5V20h-2.337a3.993 3.993 0 0 0-2.826 1.175L16 24H4Z"
    />
  </Svg>
);
export default FaucetIcon;