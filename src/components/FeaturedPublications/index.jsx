import { recentPublications } from "../../../constants";
import Heading from "../Heading";
import NewsItem from "../RecentNews/NewsItem";
import "./FeaturedPublications.css";

const FeaturedPublications = () => {
  return (
    <div className="featured-publications">
      <Heading
        title="featured publications"
        center={false}
        link={"/publications"}
        linkName="see all publications"
      />
      <div className="publication-items">
        {recentPublications.map((news, i) => (
          <NewsItem
            key={i}
            month={news.date.split(" ")[0]}
            year={news.date.split(" ")[1]}
            text={news.text}
            btnLinks={news.btnLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPublications;
