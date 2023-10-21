import { formatDate } from "@/utils/strapi.utils";

const ArticleIntro = ({ article }) => {
  return (
    <div className="article-intro">
      <div className="article-intro__background">
        <img src={article.featuredImage} alt="" />
      </div>
      <h3 className="article-intro__headline">{article.headline}</h3>
      <p className="copy-small bold">{formatDate(article.publishedAt)}</p>
      <p className="copy-small">{article.author}</p>
    </div>
  );
};
export default ArticleIntro;
