import { type Atom, atom, useSetAtom } from "jotai";

export function useAtomValueManually<T>(atomToGetValueFrom: Atom<T>) {
  const callbackAtom = atom(null, (get) => get(atomToGetValueFrom));

  const cb = useSetAtom(callbackAtom);

  return cb;
}
