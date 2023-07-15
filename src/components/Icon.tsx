import * as FaIcon from "react-icons/fa";
import { convertToFaIconName } from "@/utils/icon";

type IconProps = { icon: string } & React.SVGProps<HTMLOrSVGElement>;

export default function Icon({ icon, ...rest }: IconProps) {
  let iconName = convertToFaIconName(icon);
  const IconComponent = FaIcon[iconName];
  return <IconComponent {...rest} />;
}
