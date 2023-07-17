import Icon from "@/components/Icon";
import { featuredBanners } from "@/constants/featured-banners";
import { Featured } from "@/interfaces";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured banners",
  description: "Featured banners made by users.",
};

function Card({ creator, bannerUrl, spotifyPlaylistUrl }: Featured) {
  const decodedURI = decodeURIComponent(bannerUrl);
  const decodedString = atob(decodedURI);
  const style = JSON.parse(decodedString);

  const { bannerStyle, bannerName, bannerIcon, displayIcon } = style;

  const textStyle = {
    ...bannerStyle.typography,
    fontFamily: `var(--font-${bannerStyle.typography.fontFamily
      .replace(" ", "-")
      .toLowerCase()})`,
  } as React.CSSProperties;

  const bannerContent = displayIcon ? (
    <p style={bannerStyle.icon}>
      <Icon icon={bannerIcon} />
    </p>
  ) : (
    <p style={textStyle}>{bannerName}</p>
  );

  return (
    <section className="flex flex-col overflow-hidden rounded-md bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
      <div className="flex items-center justify-between p-4">
        <h3>
          {creator ?? null}
          {creator && spotifyPlaylistUrl && " - "}
          {spotifyPlaylistUrl && (
            <a
              href={spotifyPlaylistUrl}
              target="_blank"
              className="font-semibold text-green-900 hover:underline dark:text-green-300"
            >
              visit playlist
            </a>
          )}
        </h3>
        <a
          href={`/${bannerUrl}`}
          className="rounded-md px-2 py-1 hover:bg-slate-300 hover:dark:bg-slate-800"
        >
          Edit
        </a>
      </div>
      <div
        style={bannerStyle.banner}
        className="-order-1 flex aspect-square w-full p-8"
      >
        <div className="max-w-min">{bannerContent}</div>
      </div>
    </section>
  );
}

export default function Featured() {
  return (
    <main className="mx-auto w-full max-w-screen-xl px-4 pb-4 text-slate-800 dark:text-slate-300 md:px-8">
      <h2 className="mb-4 text-2xl font-semibold">
        Some banners created by creative minds.
      </h2>
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredBanners.map((featured) => (
          <Card key={featured.bannerUrl} {...featured} />
        ))}
      </div>
    </main>
  );
}
