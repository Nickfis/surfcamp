import Image from "next/image";
import HeroSection from "./_components/HeroSection";

export default function Home() {
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
    </main>
  );
}
