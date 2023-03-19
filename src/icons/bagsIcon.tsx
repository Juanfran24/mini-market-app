import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IIcon } from "./type";

function IconBxsShoppingBags(props: IIcon) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <Path d="M4 20h2V10a1 1 0 011-1h12V7a1 1 0 00-1-1h-3.051c-.252-2.244-2.139-4-4.449-4S6.303 3.756 6.051 6H3a1 1 0 00-1 1v11a2 2 0 002 2zm6.5-16c1.207 0 2.218.86 2.45 2h-4.9c.232-1.14 1.243-2 2.45-2z" />
      <Path d="M21 11H9a1 1 0 00-1 1v8a2 2 0 002 2h10a2 2 0 002-2v-8a1 1 0 00-1-1zm-6 7c-2.757 0-5-2.243-5-5h2c0 1.654 1.346 3 3 3s3-1.346 3-3h2c0 2.757-2.243 5-5 5z" />
    </Svg>
  );
}

export default IconBxsShoppingBags;