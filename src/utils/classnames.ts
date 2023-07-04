type ClassNameArg =
  | string
  | boolean
  | undefined
  | { [className: string]: boolean };

export function cn(...args: ClassNameArg[]) {
  return args
    .map((className) => {
      if (typeof className === "object") return cnAdvanced(className);
      return className;
    })
    .flat()
    .filter(Boolean)
    .join(" ");
}

export function cnAdvanced(classNames: { [className: string]: boolean }) {
  return Object.entries(classNames)
    .filter(([_, shouldInclude]) => shouldInclude)
    .map(([className]) => className);
}
