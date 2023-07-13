import { ImageResponse } from "next/server";
import { defaultBannerName, defaultBannerStyle } from "@/constants";

export const runtime = "edge";

const defaultStyle = {
  bannerStyle: defaultBannerStyle,
  bannerName: defaultBannerName,
};

export function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const query = searchParams.has("q") ? searchParams.get("q") : false;

    let style = defaultStyle;
    if (query) {
      const decodedURI = decodeURIComponent(query);
      const decodedString = atob(decodedURI);
      style = JSON.parse(decodedString);
    }

    const { bannerStyle, bannerName } = style;

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
