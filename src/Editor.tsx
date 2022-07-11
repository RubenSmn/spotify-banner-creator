import { useEffect, useState } from 'react';
import {
  Stack,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from '@chakra-ui/react';
import BannerContentInput from './components/BannerContentInput';
import { configProps } from './constants';
import PropInput from './PropInput';
import { useDisplayIcon } from './Provider';

const Editor = () => {
  const categories = Object.entries(configProps);
  const [displayIcon] = useDisplayIcon();
  const [tabIndex, setTabIndex] = useState(0);
  const tabs: { [key: string]: number } = {};

  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };

  useEffect(() => {
    if (displayIcon) return setTabIndex(tabs['icon']);
    setTabIndex(tabs['typography']);
  }, [displayIcon]);

  return (
    <Stack width="344px" spacing={2}>
      <BannerContentInput />
      <Tabs index={tabIndex} onChange={handleTabChange}>
        <TabList>
          {categories.map(([categoryName, values], idx: number) => {
            tabs[categoryName] = idx;
            const { displayText } = values;
            return <Tab key={`tlt-${categoryName}`}>{displayText}</Tab>;
          })}
        </TabList>
        <TabPanels>
          {categories.map(([categoryName, values]) => {
            const { props } = values;
            return (
              <TabPanel
                key={`tpc-${categoryName}`}
                overflowY="scroll"
                height="79vh"
              >
                {Object.entries(props).map(([propName, prop]) => (
                  <PropInput
                    key={`pii-${propName}`}
                    path={`${categoryName}.${propName}`}
                    prop={prop}
                  />
                ))}
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default Editor;
