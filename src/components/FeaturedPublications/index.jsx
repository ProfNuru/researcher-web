import { useStateContext } from "../../store/StateContext";
import Heading from "../Heading";
import NewsItem from "../RecentNews/NewsItem";
import "./FeaturedPublications.css";

const FeaturedPublications = ({ mainPage = false, publications, title }) => {
  const { publicationType, publicationYear } = useStateContext();

  const filteredByType =
    publicationType === "all"
      ? publications
      : publications.filter(
          (p) => !!p.btnLinks.find((type) => type.label === publicationType)
        );

  const filteredPublications = filteredByType.filter((p) =>
    p.date.includes(publicationYear)
  );

  return (
    <div className={mainPage ? "all-publications" : "featured-publications"}>
      {!mainPage && (
        <Heading
          title={title}
          center={false}
          link={"/publications"}
          linkName="see all publications"
        />
      )}
      <div className="publication-items">
        {filteredPublications.map((news, i) => (
          <NewsItem
            key={i}
            month={news.date.split(" ")[0]}
            year={news.date.split(" ")[1]}
            text={news.text}
            title={news.title}
            btnLinks={news.btnLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPublications;
