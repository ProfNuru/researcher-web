import Button from "../ui/Button";
import "./NewsItem.css";

const NewsItem = ({
  courses = false,
  month,
  year,
  text,
  title,
  btnLinks,
  courseTitle,
  confname,
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
          <span>
            {confname ? confname.substring(0, confname.length - 2) : month}
          </span>
          <span>
            {confname
              ? confname.substring(confname.length - 2, confname.length)
              : year}
          </span>
        </div>
      )}

      <div className={courses ? "course-detail" : "details"}>
        {title && <h4>{title}</h4>}
        <div dangerouslySetInnerHTML={{ __html: `<p>${text}</p>` }} />
        <div className="resource-links">
          {btnLinks &&
            btnLinks.map((btnLink) => (
              <Button
                blankTab={
                  btnLink.link && btnLink.link !== "#" && btnLink.link !== ""
                }
                key={btnLink.label}
                text={btnLink.label}
                link={btnLink.link}
                fxn={() => {
                  if (
                    btnLink.link &&
                    btnLink.link !== "#" &&
                    btnLink.link !== ""
                  ) {
                    window.open(
                      btnLink.link,
                      title ? title : `${btnLink.label.capitalize()}`
                    );
                  }
                  return false;
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
