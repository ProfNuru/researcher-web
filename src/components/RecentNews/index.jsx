import Heading from "../Heading";
import NewsItem from "./NewsItem";
import "./RecentNews.css";

const RecentNews = ({ recentNews, title }) => {
  return (
    <div className="recentNews">
      <Heading title={title} center={false} />
      <div className="news-items">
        {recentNews.map((news, i) => (
          <NewsItem
            key={i}
            month={news.date.split(" ")[0]}
            year={news.date.split(" ")[1]}
            text={news.text}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
