import { ImageResponse } from "next/og";
import { defaultBannerName, defaultBannerStyle } from "@/constants";
import { IconType } from "react-icons";
import { convertToFaIconName } from "@/utils/icon";

const defaultStyle = {
  bannerStyle: defaultBannerStyle,
  bannerName: defaultBannerName,
  bannerIcon: "code",
  displayIcon: false,
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const query = searchParams.has("q") ? searchParams.get("q") : false;

    let style = defaultStyle;
    if (query) {
      const decodedURI = decodeURIComponent(query);
      const decodedString = atob(decodedURI);
      style = JSON.parse(decodedString);
    }

    const { bannerStyle, bannerName, bannerIcon, displayIcon } = style;

    let Icon: IconType | undefined = undefined;

    if (displayIcon) {
      const modifiedIconName = convertToFaIconName(bannerIcon);
      const icons = await import("react-icons/fa");
      Icon = icons[modifiedIconName] as IconType;
    }

    return new ImageResponse(
      (
        <div
          style={{
            ...bannerStyle.banner,
            height: "100%",
            width: "100%",
            display: "flex",
          }}
        >
          {displayIcon && Icon ? (
            <div
              style={{
                ...bannerStyle.icon,
                display: "flex",
              }}
            >
              <Icon />
            </div>
          ) : (
            <p
              style={
                {
                  ...bannerStyle.typography,
                  marginLeft: "50%",
                  transform: "translateX(-50%)",
                } as React.CSSProperties
              }
            >
              {bannerName}
            </p>
          )}
        </div>
      ),
      {
        width: 400,
        height: 400,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the banner`, {
      status: 500,
    });
  }
}
