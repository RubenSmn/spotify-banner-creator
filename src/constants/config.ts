import { ConfigProps, PROPTYPES } from '../interfaces';

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
      fontSize: {
        displayText: 'Size',
        input: PROPTYPES.SLIDER,
        min: 3,
        max: 5,
        step: 0.2,
        defaultValue: 4,
        unit: 'rem',
        helpers: [{ small: 3 }, { large: 5 }],
      },
      letterSpacing: {
        displayText: 'Letter Spacing',
        input: PROPTYPES.SLIDER,
        min: -0.5,
        max: 0.5,
        step: 0.05,
        defaultValue: 0,
        unit: 'rem',
        helpers: [{ narrow: -0.5 }, { wide: 0.5 }],
      },
      fontWeight: {
        displayText: 'Font Weight',
        input: PROPTYPES.SLIDER,
        min: 100,
        max: 700,
        step: 100,
        defaultValue: 400,
        unit: '',
        helpers: [{ light: 200 }, { bold: 700 }],
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
        helpers: [{ small: 3 }, { large: 5 }],
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
  icon: {
    displayText: 'Icon Style',
    props: {
      fontSize: {
        displayText: 'Size',
        input: PROPTYPES.SLIDER,
        min: 4,
        max: 12,
        step: 0.2,
        defaultValue: 8,
        unit: 'rem',
        helpers: [{ small: 3 }, { large: 5 }],
      },
      color: {
        displayText: 'Color',
        input: PROPTYPES.COLOR,
        defaultValue: '#fff',
      },
    },
  },
  banner: {
    displayText: 'Banner Style',
    props: {
      background: {
        displayText: 'Background Color',
        input: PROPTYPES.COLOR,
        defaultValue: 'linear-gradient(45deg, #882322 0%, #d24442 100%)',
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
