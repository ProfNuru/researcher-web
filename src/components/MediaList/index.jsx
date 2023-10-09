import MediaItem from "../MediaItem";
import "./MediaList.css";

const MediaList = ({ media }) => {
  return (
    <div className="media-list">
      {media.map((m, i) => (
        <MediaItem reverse={i % 2 === 0} key={i} media={m} />
      ))}
    </div>
  );
};

export default MediaList;
