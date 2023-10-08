import { coursesTaught } from "../../../constants";
import Heading from "../Heading";
import NewsItem from "../RecentNews/NewsItem";
import "./CoursesList.css";

const CoursesList = () => {
  return (
    <div className="courses-list">
      <Heading title="courses taught" center={false} />
      <div className="courses">
        {coursesTaught.map((news, i) => (
          <NewsItem
            courses={true}
            key={i}
            month={news.date.split(" ")[0]}
            year={news.date.split(" ")[1]}
            text={news.text}
            btnLinks={news.btnLinks}
            courseTitle={news.title ? news.title : null}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
