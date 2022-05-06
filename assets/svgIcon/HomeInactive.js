import * as React from "react";
import Svg, { Path } from "react-native-svg";
import color from "../../theme/color";

function HomeInactive(props) {
  return (
    <Svg
      width={37}
      height={32}
      viewBox="0 0 37 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.5 1L1 15.943h6.029V31H15.1V20.948h6.798V31h8.072V15.943H36L18.5 1z"
        stroke={color.GRAY_300}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HomeInactive;
