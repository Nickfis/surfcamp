import ArticleIntro from "@/app/_components/Blog/ArticleIntro";
import ArticleOverview from "@/app/_components/Blog/ArticleOverview";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function Page({ params }) {
  const { article: slug } = params;

  const articles = await fetchBlogArticles();
  const article = articles.find((article) => article.slug === slug);

  return (
    <main>
      <ArticleIntro article={article} />
      <section className="article-section">
        <ArticleOverview article={article} />
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const articles = await fetchDataFromStrapi("blog-articles");

  return articles.map((article) => ({
    article: article.attributes.slug,
  }));
}

export const revalidate = 300;
