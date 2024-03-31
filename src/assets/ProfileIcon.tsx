import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ProfileIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={23}
    fill="none"
    {...props}>
    <Path
      fill="#000"
      d="M9 .5C5.893.5 3.375 2.962 3.375 6S5.893 11.5 9 11.5s5.625-2.462 5.625-5.5S12.107.5 9 .5ZM2.39 13.7c-.633 0-1.241.246-1.69.684a2.312 2.312 0 0 0-.7 1.653v.413c0 2.065 1.092 3.612 2.768 4.609C4.415 22.039 6.63 22.5 9 22.5s4.584-.46 6.232-1.441C16.909 20.062 18 18.515 18 16.45v-.413c0-.307-.062-.61-.182-.894a2.333 2.333 0 0 0-.518-.759 2.395 2.395 0 0 0-.776-.506c-.29-.118-.6-.178-.915-.178H2.391Z"
    />
  </Svg>
);
export default ProfileIcon;
