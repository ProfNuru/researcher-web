import Button from "../ui/Button";
import "./NewsItem.css";

const NewsItem = ({ month, year, text, btnLinks }) => {
  return (
    <div className="news-item">
      <div className="date-pill">
        <span>{month}</span>
        <span>{year}</span>
      </div>

      <div className="details">
        <div dangerouslySetInnerHTML={{ __html: `<p>${text}</p>` }} />
        <div className="resource-links">
          {btnLinks &&
            btnLinks.map((btnLink) => (
              <Button
                key={btnLink.label}
                text={btnLink.label}
                link={btnLink.link}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
