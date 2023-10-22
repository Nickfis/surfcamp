import { formatDate } from "@/utils/strapi.utils";

const BlogPreviewItem = ({ article }) => {
  return (
    <div className="blog-preview__item">
      <div className="blog-preview__image">
        <img src={article.featuredImage} alt="" />
      </div>
      <h5 className="blog-preview__headline">{article.headline}</h5>
      <p className="copy-small">{formatDate(article.publishedAt)}</p>
    </div>
  );
};

export default BlogPreviewItem;
