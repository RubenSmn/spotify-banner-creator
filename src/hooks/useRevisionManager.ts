import type { ActionHandler } from "@/RevisionManager";
import { revisionAtom } from "@/components/Provider";
import { atom, useAtom, useAtomValue } from "jotai";
import { useCallback } from "react";

type RevisionOptions = {
  onUndo: ActionHandler | undefined;
  onRedo: ActionHandler | undefined;
};

const hasRevisionsAtom = atom({
  undo: false,
  redo: false,
});

export function useRevisionManager(options?: RevisionOptions) {
  const revisionManager = useAtomValue(revisionAtom);
  const [hasRevisions, setHasRevisions] = useAtom(hasRevisionsAtom);

  const updateHasRevisions = useCallback(() => {
    setHasRevisions({
      undo: revisionManager.hasUndoRevisions,
      redo: revisionManager.hasRedoRevisions,
    });
  }, [
    revisionManager.hasUndoRevisions,
    revisionManager.hasRedoRevisions,
    setHasRevisions,
  ]);

  const update = useCallback(
    <T>(path: string, value: T, previousValue: T) => {
      revisionManager.update(
        path,
        value,
        previousValue,
        options?.onUndo,
        options?.onRedo,
      );
      updateHasRevisions();
    },
    [options?.onUndo, options?.onRedo, revisionManager, updateHasRevisions],
  );

  return {
    undo: () => {
      revisionManager.undo();
      updateHasRevisions();
    },
    redo: () => {
      revisionManager.redo();
      updateHasRevisions();
    },
    update,
    hasRevisions,
  };
}
