"use client";

import { useEffect, useState } from "react";
import {
  Tabs,
  TabList,
  TabTrigger,
  TabContent,
  TabIndicator,
} from "@ark-ui/react";
import BannerContentInput from "@/components/inputs/BannerContentInput";
import { configProps } from "@/constants";
import PropInput from "./inputs/PropInput";
import { cn } from "@/utils/classnames";
import { useAtomValue } from "jotai";
import { displayIconAtom } from "./Provider";

const Editor = () => {
  const categories = Object.entries(configProps);
  const displayIcon = useAtomValue(displayIconAtom);
  const [currentTab, setCurrentTab] = useState(
    Object.keys(configProps)[0] ?? "",
  );
  const tabs: { [key: string]: number } = {};

  const handleTabChange = (details: { value: string | null }) => {
    setCurrentTab(details.value ?? "");
  };

  // useEffect(() => {
  //   if (displayIcon) return setCurrentTab(tabs["icon"]);
  //   setCurrentTab(tabs["typography"]);
  // }, [displayIcon]);

  return (
    <div className="w-full min-w-[300px]">
      <BannerContentInput />
      <Tabs value={currentTab} onChange={handleTabChange}>
        <TabList className="mb-4 grid grid-cols-3">
          {categories.map(([categoryName, values], idx: number) => {
            tabs[categoryName] = idx;
            const { displayText } = values;
            return (
              <TabTrigger
                key={`tlt-${categoryName}`}
                value={categoryName}
                className={cn("border-b-2 px-4 py-2 text-lg", {
                  "border-green-600 dark:border-green-400":
                    currentTab === categoryName,
                  "border-gray-300 dark:border-gray-600":
                    currentTab !== categoryName,
                })}
              >
                {displayText}
              </TabTrigger>
            );
          })}
        </TabList>
        {categories.map(([categoryName, values]) => {
          const { props } = values;
          return (
            <TabContent
              key={`tpc-${categoryName}`}
              value={categoryName}
              // className="overflow-scroll"
            >
              {Object.entries(props).map(([propName, prop]) => {
                return (
                  <PropInput
                    key={`pii-${propName}`}
                    path={`${categoryName}.${propName}`}
                    prop={prop}
                  />
                );
              })}
            </TabContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Editor;
