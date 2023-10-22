import ArticleHeadline from "./ArticleHeadline";
import ArticleParagraph from "./ArticleParagraph";
import ImageTextComponent from "./ImageTextComponent";
import LandscapeImage from "./LandscapeImage";

const ArticleComponent = ({ component }) => {
  const componentType = component.__component.split("blog-article.")[1];
  switch (componentType) {
    case "headline":
      return <ArticleHeadline headline={component} />;
    case "paragraph-with-image":
      return <ImageTextComponent component={component} />;
    case "paragraph":
      return <ArticleParagraph paragraph={component} />;
    case "landscape-image":
      return <LandscapeImage imageData={component} />;
    default:
      return <h1>Component not found</h1>;
  }
};

export default ArticleComponent;
