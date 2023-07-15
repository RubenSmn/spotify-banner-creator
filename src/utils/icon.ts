import * as FaIcon from "react-icons/fa";

export function convertToFaIconName(str: string): keyof typeof FaIcon {
  const pascalName = str
    .split(/-/g)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  return `Fa${pascalName}` as keyof typeof FaIcon;
}
