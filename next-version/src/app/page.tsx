import Image from "next/image";

import BannerProvider from "@/components/Provider";
import Preview from "@/components/Preview";
import Editor from "@/components/Editor";

export default function Home() {
  return (
    <BannerProvider>
      <main className="grid flex-1 grid-cols-2 gap-4 px-4 text-black dark:text-white">
        <Preview />
        <Editor />
      </main>
    </BannerProvider>
  );
}
