import { BannerStyle } from "@/interfaces";
import { configProps } from "./config";

export const defaultBannerStyle: BannerStyle = {
  typography: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: "4rem",
    color: "#fff",
    letterSpacing: "0rem",
    lineHeight: "4rem",
    textTransform: "capitalize",
  },
  icon: {
    fontSize: "8rem",
    color: "#fff",
  },
  banner: {
    // background: 'linear-gradient(45deg, #882322 0%, #d24442 100%)',
    background:
      "linear-gradient(45deg, RGBA(3, 3, 68, 1) 0%, rgba(0,212,255,1) 100%)",
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

export const defaultBannerName = "Funky Finesse";
