import axios from "axios";
import HighlightArticle from "../_components/Blog/HighlightArticle";
import SubscribeToNewsletter from "../_components/Blog/SubscribeToNewsletter";
import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function Page() {
  const data = await fetchBlogArticles();

  const highlightArticleData = {
    headline: "3 tips for a super fast takeoff",
    excerpt: (
      <>
        Improving your take-off phase in surfing is a fundamental step toward
        riding waves with more confidence and style. Improving your take-off
        phase is a gradual process, and it may take time to master. Be patient,
        stay committed to practice, and enjoy the journey of becoming a better
        surfer. With dedication and persistence, you'll see progress and have
        more enjoyable rides. Here is how:
      </>
    ),
    slug: "takeoff",
    featuredImage: "/assets/hero-experience.png",
  };

  const featuredArticles = [
    {
      headline:
        "surfboard shaping  let us use proper words to lengthen this headline and design behind the scenes of crafting the perfect board",
      slug: "/blog/whatever",
      date: "Monday, 05th of June 2023",
      featuredImage: "/assets/hero-experience.png",
    },
    {
      headline:
        "surfboard shaping and design behind the scenes of crafting the perfect board",
      slug: "/blog/whatever",
      date: "Monday, 05th of June 2023",
      featuredImage: "/assets/hero-experience.png",
    },
    {
      headline:
        "surfboard shaping and design behind the scenes of crafting the perfect board",
      slug: "/blog/whatever",
      date: "Monday, 05th of June 2023",
      featuredImage: "/assets/hero-experience.png",
    },
    {
      headline:
        "surfboard shaping and design behind the scenes of crafting the perfect board",
      slug: "/blog/whatever",
      date: "Monday, 05th of June 2023",
      featuredImage: "/assets/hero-experience.png",
    },
    {
      headline:
        "surfboard shaping and design behind the scenes of crafting the perfect board",
      slug: "/blog/whatever",
      date: "Monday, 05th of June 2023",
      featuredImage: "/assets/hero-experience.png",
    },
    {
      headline:
        "surfboard shaping and design behind the scenes of crafting the perfect board",
      slug: "/blog/whatever",
      date: "Monday, 05th of June 2023",
      featuredImage: "/assets/hero-experience.png",
    },
  ];
  return (
    <main className="blog-page">
      <HighlightArticle data={highlightArticleData} />
      <SubscribeToNewsletter />
      <FeaturedItems items={featuredArticles} />
    </main>
  );
}
