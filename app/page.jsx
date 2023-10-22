import BlogPreview from "./_components/BlogPreview/BlogPreview";
import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";
import { fetchDataFromStrapi, processInfoBlocks } from "@/utils/strapi.utils";

export default async function Home() {
  const data = await fetchDataFromStrapi("infoblocks-landing?populate=deep");
  const infoBlockData = processInfoBlocks(data);

  const heroHeadline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );

  return (
    <main>
      <HeroSection headline={heroHeadline} />
      {infoBlockData.map((data) => (
        <InfoBlock key={data.id} data={data} />
      ))}
      <BlogPreview />
    </main>
  );
}

export const revalidate = 300;
