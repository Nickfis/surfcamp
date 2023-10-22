import ArticleHeadline from "./ArticleHeadline";
import ImageTextComponent from "./ImageTextComponent";

const ArticleComponent = ({ component }) => {
  const componentType = component.__component.split("blog-article.")[1];
  switch (componentType) {
    case "headline":
      return <ArticleHeadline headline={component} />;
    case "paragraph-with-image":
      return <ImageTextComponent component={component} />;
    case "paragraph":
      return <h1>Paragraph Component</h1>;
    case "landscape-image":
      return <h1>Landscape Image</h1>;
    default:
      return <h1>Component not found</h1>;
  }
};

export default ArticleComponent;
