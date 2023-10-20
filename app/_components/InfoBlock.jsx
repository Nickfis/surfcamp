import ReactMarkdown from "react-markdown";

const InfoBlock = ({ data }) => {
  const { headline, text, showImageRight, imageSrc } = data;
  return (
    <div className={`info ${showImageRight ? "info--reversed" : ""}`}>
      <img
        className="info__image"
        src={imageSrc || "/info-blocks/rectangle.png"}
        alt=""
      />
      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        <ReactMarkdown className="copy">{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default InfoBlock;
