export interface ConfigProps {
  [category: string]: {
    displayText: string;
    props: {
      [prop: string]:
        | StylePropFont
        | StylePropColor
        | StylePropSelect
        | StylePropSlider;
    };
  };
}

export interface BannerStyle {
  typography: {
    fontFamily: string;
    fontWeight: string;
    fontStyle: string;
    fontSize: string;
    color: string;
    letterSpacing: string;
    textAlign: string;
    lineHeight: string;
    textTransform: string;
  };
  icon: {
    fontSize: string;
    color: string;
  };
  banner: {
    background: string;
    justifyContent: string;
    alignItems: string;
  };
}

export enum PROPTYPES {
  COLOR = "color",
  SELECT = "select",
  SLIDER = "slider",
  FONT = "font",
  ICON = "icon",
}

export interface StyleProp {
  displayText: string;
  input: PROPTYPES;
  info?: string;
}

export interface StylePropColor extends StyleProp {
  input: PROPTYPES.COLOR;
  defaultValue: string;
}

export interface StylePropSelect extends StyleProp {
  input: PROPTYPES.SELECT;
  defaultValue: string;
  options: { [key: string]: string };
}

export interface StylePropSlider extends StyleProp {
  input: PROPTYPES.SLIDER;
  min: number;
  max: number;
  step: number;
  unit: string;
  defaultValue: number;
  helpers: { [name: string]: number }[];
}

export interface StylePropFont extends StyleProp {
  input: PROPTYPES.FONT;
  defaultValue: string;
  options: string[];
}

export interface StylePropIcon extends StyleProp {
  input: PROPTYPES.ICON;
}

export interface Featured {
  bannerUrl: string;
  creator?: string;
  spotifyPlaylistUrl?: string;
}
