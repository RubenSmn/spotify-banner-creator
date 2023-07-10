import BannerProvider from "@/components/Provider";
import Preview from "@/components/Preview";
import Editor from "@/components/Editor";

export default function Home() {
  return (
    <BannerProvider>
      <main className="mx-auto grid max-w-screen-lg flex-1 grid-cols-1 gap-8 px-4 text-black dark:text-white md:grid-cols-2 md:gap-4">
        <Preview />
        <Editor />
      </main>
    </BannerProvider>
  );
}
