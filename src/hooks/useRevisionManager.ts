import type { ActionHandler } from "@/RevisionManager";
import { revisionAtom } from "@/components/Provider";
import { useAtomValue } from "jotai";

type RevisionOptions = {
  onUndo: ActionHandler | undefined;
  onRedo: ActionHandler | undefined;
};

export function useRevisionManager(options?: RevisionOptions) {
  const revisionManager = useAtomValue(revisionAtom);

  const update = <T>(path: string, value: T, previousValue: T) => {
    revisionManager.update(
      path,
      value,
      previousValue,
      options?.onUndo,
      options?.onRedo,
    );
  };

  return {
    undo: () => revisionManager.undo(),
    redo: () => revisionManager.redo(),
    update,
  };
}
