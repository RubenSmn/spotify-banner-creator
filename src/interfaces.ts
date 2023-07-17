export interface ConfigProps {
  [category: string]: {
    displayText: string;
    props: {
      // [prop: string]: StylePropColor | StylePropSelect | StylePropSlider;
      [prop: string]: any;
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

export interface StylePropIcon extends StyleProp {
  input: PROPTYPES.ICON;
}

export interface Featured {
  bannerUrl: string;
  creator?: string;
  spotifyPlaylistUrl?: string;
}
