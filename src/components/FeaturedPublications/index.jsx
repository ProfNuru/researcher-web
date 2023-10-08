import { recentPublications, allPublications } from "../../../constants";
import Heading from "../Heading";
import NewsItem from "../RecentNews/NewsItem";
import "./FeaturedPublications.css";

const FeaturedPublications = ({ mainPage = false }) => {
  const publications = mainPage ? allPublications : recentPublications;

  return (
    <div className={mainPage ? "all-publications" : "featured-publications"}>
      {!mainPage && (
        <Heading
          title="featured publications"
          center={false}
          link={"/publications"}
          linkName="see all publications"
        />
      )}
      <div className="publication-items">
        {publications.map((news, i) => (
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
