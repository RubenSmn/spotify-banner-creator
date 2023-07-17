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
      <main className="mx-auto grid max-w-screen-lg flex-1 grid-cols-1 gap-8 px-4 pb-8 text-black dark:text-white md:grid-cols-2 md:gap-4">
        <Preview />
        <Editor />
        <section className="col-span-1 flex flex-col items-center gap-4 self-end text-center md:col-span-2">
          <p>Need some inspiration? Checkout the featured banners!</p>
          <a
            href="/featured"
            className="rounded-md border border-transparent bg-amber-600 px-3 py-2 text-lg font-medium text-white transition-colors duration-150 ease-in hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:bg-amber-300 dark:text-black dark:hover:bg-amber-400 dark:focus:ring-amber-200"
          >
            Featured banners
          </a>
        </section>
      </main>
    </BannerProvider>
  );
}
