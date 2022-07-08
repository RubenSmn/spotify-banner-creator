import React, { useState } from 'react';
import { configProps, defaultBannerStyle } from './constants';
import { PROPTYPES } from './interfaces';

interface Props {
  children: React.ReactNode;
}

const getDefaultFromConfig = () => {
  const style: any = {};
  Object.keys(configProps).map((category: string) => {
    const props = Object.entries(configProps[category].props);
    style[category] = props.reduce((acc: any, val) => {
      const [prop, values] = val;
      switch (values.input) {
        case PROPTYPES.SELECT:
          return { ...acc, [prop]: values.options[values.defaultValue] };
        case PROPTYPES.SLIDER:
          return { ...acc, [prop]: values.defaultValue + values.unit };
        default:
          return { ...acc, [prop]: values.defaultValue };
      }
    }, {});
  });
  return style;
};

const BannerContext = React.createContext<any>({});

const BannerProvider: React.FC<Props> = ({ children }) => {
  const [bannerStyle, setBannerStyle] = useState(defaultBannerStyle);
  const [bannerName, setBannerName] = useState('Funky Finesse');

  /**
   * set bannr style prop by path
   *
   * @example
   * setPropByPath('banner.backgroundColor', '#ff7')
   */
  const setPropByPath = (propPath: string, value: string) => {
    if (!value || !propPath) return null;
    const temp = { ...bannerStyle };
    propPath.split('.').reduce((acc: any, curr: any, _: any, src: any) => {
      if (curr === src[src.length - 1]) {
        acc[src[src.length - 1]] = value;
        return acc[src[src.length - 1]];
      }
      return acc[curr];
    }, temp);
    setBannerStyle(temp);
    return temp;
  };

  /**
   * get banner style prop by path
   *
   * @example
   * // returns #ff7
   * getPropByPath('banner.backgroundColor')
   */
  const getPropByPath = (propPath: string) => {
    if (!propPath) return null;
    return propPath
      .split('.')
      .reduce((acc: any, curr) => acc[curr], bannerStyle);
  };

  return (
    <BannerContext.Provider
      value={{
        bannerStyle,
        setBannerStyle,
        bannerName,
        setBannerName,
        getPropByPath,
        setPropByPath,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
};

export default BannerProvider;

export const useBannerStyle = () => {
  const { bannerStyle, setBannerStyle } = React.useContext(BannerContext);
  return [bannerStyle, setBannerStyle];
};

export const useBannerName = () => {
  const { bannerName, setBannerName } = React.useContext(BannerContext);
  return [bannerName, setBannerName];
};

export const useStyleUtils = () => {
  const { getPropByPath, setPropByPath } = React.useContext(BannerContext);
  return { getPropByPath, setPropByPath };
};
