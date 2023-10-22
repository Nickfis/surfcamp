import { formatDate } from "@/utils/strapi.utils";
import Link from "next/link";

const BlogPreviewItem = ({ article }) => {
  return (
    <Link href={`/blog/${article.slug}`} className="blog-preview__item">
      <div className="blog-preview__image">
        <img src={article.featuredImage} alt="" />
      </div>
      <h5 className="blog-preview__title">{article.headline}</h5>
      <p className="copy-small">{formatDate(article.publishedAt)}</p>
    </Link>
  );
};

export default BlogPreviewItem;
