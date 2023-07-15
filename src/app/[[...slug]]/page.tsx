import BannerProvider from "@/components/Provider";
import Preview from "@/components/Preview";
import Editor from "@/components/Editor";
import { defaultMetadata } from "@/constants/metadata";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return slug !== undefined
    ? {
        openGraph: {
          title: "Spotify Banner",
          description: "I made this using the Spotify Banner Creator",
          images: [`/api/og?q=${slug}`],
        },
      }
    : { ...defaultMetadata };
}

export default function Home({ params }: PageProps) {
  return (
    <BannerProvider slug={params.slug}>
      <main className="mx-auto grid max-w-screen-lg flex-1 grid-cols-1 gap-8 px-4 text-black dark:text-white md:grid-cols-2 md:gap-4">
        <Preview />
        <Editor />
      </main>
    </BannerProvider>
  );
}
