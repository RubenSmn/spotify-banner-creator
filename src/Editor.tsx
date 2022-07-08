import {
  Stack,
  Input,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from '@chakra-ui/react';
import { configProps } from './constants';
import PropInput from './PropInput';
import { useBannerName } from './Provider';

const Editor = () => {
  const categories = Object.entries(configProps);
  const [bannerName, setBannerName] = useBannerName();

  const handleChange = (e: any) => {
    const userInput = e.target.value;
    setBannerName(userInput);
  };

  return (
    <Stack width="344px" spacing={2}>
      <Input value={bannerName} onChange={handleChange} />
      <Tabs>
        <TabList>
          {categories.map(([categoryName, values]) => {
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
