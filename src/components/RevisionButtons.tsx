"use client";

import { useRevisionManager } from "@/hooks/useRevisionManager";
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/solid";

function RevisionButtons() {
  const revisionManager = useRevisionManager();

  return (
    <div className="mb-4 flex gap-2">
      <button
        onClick={revisionManager.undo}
        disabled={!revisionManager.hasRevisions.undo}
        className="inline-flex aspect-square h-10 w-full items-center justify-center gap-2 rounded-md bg-slate-200 text-sm font-semibold uppercase text-black hover:bg-slate-300 disabled:text-slate-500 disabled:hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 dark:disabled:text-slate-400 dark:disabled:hover:bg-slate-700"
      >
        <ArrowUturnLeftIcon height={18} width={18} />
        <span>Undo</span>
      </button>
      <button
        onClick={revisionManager.redo}
        disabled={!revisionManager.hasRevisions.redo}
        className="inline-flex aspect-square h-10 w-full items-center justify-center gap-2 rounded-md bg-slate-200 text-sm font-semibold uppercase text-black hover:bg-slate-300 disabled:text-slate-500 disabled:hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 dark:disabled:text-slate-400 dark:disabled:hover:bg-slate-700"
      >
        <span>Redo</span>
        <ArrowUturnRightIcon height={18} width={18} />
      </button>
    </div>
  );
}

export default RevisionButtons;
