export interface BannerStyle {
  typography: {
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
    color: string;
    letterSpacing: string;
    lineHeight: string;
    textTransform: string;
  },
  banner: {
    background: string;
    justifyContent: string;
    alignItems: string;
  },
}

export enum PROPTYPES {
  COLOR = 'color',
  SELECT = 'select',
  SLIDER = 'slider',
  FONT = 'font',
}

export interface StyleProp {
  displayText: string;
  input: PROPTYPES;
  defaultValue: string;
  info: string;
}

export interface StylePropColor extends StyleProp {
  input: PROPTYPES.COLOR;
}

export interface StylePropSelect extends StyleProp {
  input: PROPTYPES.SELECT;
  options: { [key: string]: string };
}

export interface StylePropSlider extends StyleProp {
  input: PROPTYPES.SLIDER;
  min: number;
  max: number;
  step: number;
  unit: string;
  helpers: { [name: string]: number }[];
}

export interface StylePropFont extends StyleProp {
  input: PROPTYPES.FONT;
  options: string[];
}
