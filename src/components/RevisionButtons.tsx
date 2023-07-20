"use client";

import { useRevisionManager } from "@/hooks/useRevisionManager";
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/solid";

function RevisionButtons() {
  const revisionManager = useRevisionManager();

  const handleUndo = () => {
    revisionManager.undo();
  };

  const handleRedo = () => {
    revisionManager.redo();
  };

  return (
    <div className="sticky z-[9999] mb-4 flex gap-2">
      <button
        onClick={handleUndo}
        className="inline-flex aspect-square h-10 w-10 items-center justify-center gap-2 rounded-md bg-slate-200 font-semibold uppercase text-black hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 md:w-full"
      >
        <ArrowUturnLeftIcon height={18} width={18} />
        <span>Undo</span>
      </button>
      <button
        onClick={handleRedo}
        className="inline-flex aspect-square h-10 w-10 items-center justify-center gap-2 rounded-md bg-slate-200 font-semibold uppercase text-black hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 md:w-full"
      >
        <span>Redo</span>
        <ArrowUturnRightIcon height={18} width={18} />
      </button>
    </div>
  );
}

export default RevisionButtons;
