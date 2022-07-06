import { BannerStyle } from './interfaces';

export const configProps = {
  typography: {
    displayText: 'Text Style',
    props: {
      lineHeight: {
        displayText: 'Vertical Word Spacing',
        options: {
          small: '3rem',
          normal: '4rem',
          large: '5rem',
        },
        defaultValue: '4rem',
      },
      color: {
        displayText: 'Text Color',
        options: [],
        defaultValue: '#666',
      },
    },
  },
  banner: {
    displayText: 'Banner Style',
    props: {
      backgroundColor: {
        displayText: 'Background Color',
        options: [],
        defaultValue: '#ff7',
      },
      justifyContent: {
        displayText: 'Horizontal Text Position',
        options: {
          left: 'start',
          center: 'center',
          right: 'end',
        },
        defaultValue: 'center',
      },
      alignItems: {
        displayText: 'Vertical Text Position',
        options: {
          top: 'start',
          center: 'center',
          bottom: 'end',
        },
        defaultValue: 'center',
      },
    },
  },
};

export const defaultBannerStyle: BannerStyle = {
  typography: {
    lineHeight: configProps.typography.props.lineHeight.defaultValue,
    color: configProps.typography.props.color.defaultValue,
  },
  banner: {
    backgroundColor: configProps.banner.props.backgroundColor.defaultValue,
    justifyContent: configProps.banner.props.justifyContent.defaultValue,
    alignItems: configProps.banner.props.alignItems.defaultValue,
  },
};
