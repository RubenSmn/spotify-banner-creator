import { BannerStyle } from './interfaces';

interface ConfigProps {
  [category: string]: {
    displayText: string;
    props: {
      [prop: string]: {
        displayText: string;
        options: { [key: string]: string };
        defaultValue: string;
      };
    };
  };
}

export const configProps: ConfigProps = {
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
        defaultValue: 'normal',
      },
      color: {
        displayText: 'Text Color',
        options: {},
        defaultValue: '#666',
      },
      fontWeight: {
        displayText: 'Font Weight',
        options: {
          normal: '400',
          bold: '700',
        },
        defaultValue: 'bold',
      },
    },
  },
  banner: {
    displayText: 'Banner Style',
    props: {
      backgroundColor: {
        displayText: 'Background Color',
        options: {},
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
    lineHeight:
      configProps.typography.props.lineHeight.options[
        configProps.typography.props.lineHeight.defaultValue
      ],
    color: configProps.typography.props.color.defaultValue,
    fontWeight:
      configProps.typography.props.fontWeight.options[
        configProps.typography.props.fontWeight.defaultValue
      ],
  },
  banner: {
    backgroundColor: configProps.banner.props.backgroundColor.defaultValue,
    justifyContent:
      configProps.banner.props.justifyContent.options[
        configProps.banner.props.justifyContent.defaultValue
      ],
    alignItems:
      configProps.banner.props.alignItems.options[
        configProps.banner.props.alignItems.defaultValue
      ],
  },
};
