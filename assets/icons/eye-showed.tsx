import { Colors } from "@/shared/tokens"
import Svg, { Path, Circle } from "react-native-svg"
const EyeShowedIcon = () => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
  >
    <Path
      stroke={Colors.gray}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 12s4-8 11-8 11 8 11 8M1 12s4 8 11 8 11-8 11-8"
    />
    <Circle
      cx={12}
      cy={12}
      r={3}
      stroke={Colors.gray}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
)
export default EyeShowedIcon
