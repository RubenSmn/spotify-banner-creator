import React from "react";

import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@/components/ui/Tooltip";

interface Props {
  title: string;
  isChanged: boolean;
  onReset: () => void;
  info?: string;
}

const InputHeader: React.FC<Props> = (props) => {
  const { title, info, isChanged, onReset } = props;

  return (
    <div className="flex h-6 items-center justify-between">
      <div className="inline-flex gap-2">
        <h3>{title}</h3>
        {info && (
          <Tooltip label={info}>
            <InformationCircleIcon height={24} width={24} />
          </Tooltip>
        )}
      </div>
      {isChanged && (
        <button
          aria-label="reset value"
          onClick={onReset}
          className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-black/20"
        >
          <ArrowPathIcon height={16} width={16} />
        </button>
      )}
    </div>
  );
};

export default InputHeader;
