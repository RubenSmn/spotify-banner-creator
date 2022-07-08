import {
  PROPTYPES,
  BannerStyle,
  StylePropColor,
  StylePropSelect,
  StylePropSlider,
} from './interfaces';

interface ConfigProps {
  [category: string]: {
    displayText: string;
    props: {
      // [prop: string]: StylePropColor | StylePropSelect | StylePropSlider;
      [prop: string]: any;
    };
  };
}

export const configProps: ConfigProps = {
  typography: {
    displayText: 'Text Style',
    props: {
      fontFamily: {
        displayText: 'Font',
        input: PROPTYPES.FONT,
        options: [
          'Arial',
          'Roboto',
          'Lobster',
          'Finlandica',
          'Oswald',
          'Arima',
          'ZCOOL KuaiLe',
          'Cookie',
        ],
        defaultValue: 'Roboto',
      },
      letterSpacing: {
        displayText: 'Letter Spacing',
        input: PROPTYPES.SLIDER,
        min: -0.5,
        max: 0.5,
        step: 0.05,
        defaultValue: 0,
        unit: 'rem',
        helpers: [{ narrow: -0.5 }, { normal: 0 }, { wide: 0.5 }],
      },
      fontWeight: {
        displayText: 'Font Weight',
        input: PROPTYPES.SLIDER,
        min: 100,
        max: 700,
        step: 100,
        defaultValue: 400,
        unit: '',
        helpers: [{ light: 200 }, { normal: 400 }, { bold: 700 }],
        info: 'this can vary per font',
      },
      color: {
        displayText: 'Color',
        input: PROPTYPES.COLOR,
        defaultValue: '#fff',
      },
      fontStyle: {
        displayText: 'Text Style',
        input: PROPTYPES.SELECT,
        options: {
          italic: 'italic',
          normal: 'normal',
        },
        defaultValue: 'normal',
      },
      lineHeight: {
        displayText: 'Vertical Word Spacing',
        input: PROPTYPES.SLIDER,
        min: 3,
        max: 5,
        step: 0.1,
        defaultValue: 4,
        unit: 'rem',
        helpers: [{ small: 3 }, { normal: 4 }, { large: 5 }],
      },
      textTransform: {
        displayText: 'Text Transform',
        input: PROPTYPES.SELECT,
        options: {
          capitalize: 'capitalize',
          lowercase: 'lowercase',
          uppercase: 'uppercase',
        },
        defaultValue: 'capitalize',
      },
    },
  },
  banner: {
    displayText: 'Banner Style',
    props: {
      background: {
        displayText: 'Background Color',
        input: PROPTYPES.COLOR,
        defaultValue:
          'linear-gradient(45deg, #882322 0%, #d24442 100%)',
      },
      justifyContent: {
        displayText: 'Horizontal Text Position',
        input: PROPTYPES.SELECT,
        options: {
          left: 'start',
          center: 'center',
          right: 'end',
        },
        defaultValue: 'center',
      },
      alignItems: {
        displayText: 'Vertical Text Position',
        input: PROPTYPES.SELECT,
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
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#fff',
    letterSpacing: '0rem',
    lineHeight: '4rem',
    textTransform: 'capitalize',
  },
  banner: {
    background: 'linear-gradient(45deg, #882322 0%, #d24442 100%)',
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
