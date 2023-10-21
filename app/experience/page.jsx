import HeroSection from "../_components/HeroSection";
import InfoBlock from "./../_components/InfoBlock";
import { fetchDataFromStrapi, processInfoBlocks } from "@/utils/strapi.utils";

export default async function Home() {
  const data = await fetchDataFromStrapi("infoblocks-experience?populate=deep");
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
      <HeroSection
        imgSrc="/assets/hero-experience.png"
        headline={heroHeadline}
        theme="orange"
      />
      {infoBlockData.map((data) => (
        <InfoBlock key={data.id} data={data} />
      ))}
    </main>
  );
}

export const revalidate = 300;
