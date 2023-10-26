import ArticleComponent from "@/app/_components/Blog/ArticleComponent";
import ArticleIntro from "@/app/_components/Blog/ArticleIntro";
import ArticleOverview from "@/app/_components/Blog/ArticleOverview";
import FeaturedItems from "@/app/_components/FeaturedItems/FeaturedItems";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function Page({ params }) {
  const { article: slug } = params;

  const articles = await fetchBlogArticles();
  const article = articles.find((article) => article.slug === slug);

  const moreArticles = articles.filter((article) => article.slug !== slug);

  return (
    <main>
      <ArticleIntro article={article} />
      <section className="article-section">
        <ArticleOverview article={article} />
        {article.articleContent.map((component) => (
          <ArticleComponent key={component.id} component={component} />
        ))}
        <FeaturedItems
          items={moreArticles}
          headline={"Explore our other articles"}
        />
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  try {
    const articles = await fetchDataFromStrapi("blog-articles");

    return articles.map((article) => ({
      article: article.attributes.slug,
    }));
  } catch (err) {
    console.log("Error fetching slugs for articles", err);
  }
}

export const revalidate = 300;
