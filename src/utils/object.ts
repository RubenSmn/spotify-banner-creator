type BaseObject = { [key: string]: any };

export function flattenObject<T extends BaseObject>(obj: T) {
  return Object.entries(obj)
    .map((entry) =>
      Object.keys(entry[1]).reduce((newObj, key) => {
        newObj[`${entry[0]}-${key}`] = entry[1][key];
        return newObj;
      }, {} as BaseObject),
    )
    .reduce((acc, entry) => ({ ...acc, ...entry }), {});
}
