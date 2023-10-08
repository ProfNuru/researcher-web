import Button from "../ui/Button";
import "./NewsItem.css";

const NewsItem = ({
  courses = false,
  month,
  year,
  text,
  btnLinks,
  courseTitle,
}) => {
  return (
    <div className={courses ? "course-item" : "news-item"}>
      {courses ? (
        <div className="course-title">
          <p>{`${month} ${year}`}</p>
          {courseTitle && <h3>{courseTitle}</h3>}
        </div>
      ) : (
        <div className="date-pill">
          <span>{month}</span>
          <span>{year}</span>
        </div>
      )}

      <div className={courses ? "course-detail" : "details"}>
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
