import "./MediaItem.css";

const MediaItem = ({ media, reverse = false }) => {
  return (
    <div className={reverse ? "reverse-media-item" : "media-item"}>
      <div className="img">
        <img src={media.image} alt={media.title} />
      </div>
      <div className="txt">
        <h3>{media.title}</h3>
        <ul>
          {media.listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MediaItem;
