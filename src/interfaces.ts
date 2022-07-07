export interface BannerStyle {
  typography: {
    lineHeight: string;
    color: string;
    fontWeight: string;
  };
  banner: {
    background: string;
    justifyContent: string;
    alignItems: string;
  };
}

export interface StyleProp {
  displayText: string;
  input: string;
  defaultValue: string;
}

export interface StylePropSelect extends StyleProp {
  options: { [key: string]: string };
}

export interface StylePropSlider extends StyleProp {
  min: number;
  max: number;
  step: number;
  unit: string;
  helpers: { [name: string]: number }[];
}
