import { extractImageUrl } from "@/utils/strapi.utils";
import ReactMarkdown from "react-markdown";

const ImageTextComponent = ({ component }) => {
  const { paragraph, imageCaption, image, isLandscape, imageShowsRight } =
    component;
  return (
    <div
      className={`article-text-image ${
        isLandscape ? "" : "article-text-image--portrait"
      }
      ${imageShowsRight ? "" : "article-text-image--reversed"}`}
    >
      <ReactMarkdown className="copy article-text-image__text article-paragraph">
        {paragraph}
      </ReactMarkdown>
      <div className="article-text-image__container">
        <div className="article-text-image__image">
          <img src={extractImageUrl(image)} alt="" />
        </div>
        {imageCaption && (
          <p className="article-text-image__caption copy-small">
            {imageCaption}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageTextComponent;
