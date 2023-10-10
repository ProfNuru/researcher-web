import { useStateContext } from "../../store/StateContext";
import Heading from "../Heading";
import NewsItem from "../RecentNews/NewsItem";
import "./FeaturedPublications.css";

const FeaturedPublications = ({ mainPage = false, publications, title }) => {
  console.log(publications);
  const { publicationType, publicationYear, publicationFilter } =
    useStateContext();

  const filteredByType =
    publicationType === "all"
      ? publications
      : publications.filter(
          (p) => !!p.btnLinks.find((type) => type.label === publicationType)
        );
  const filterByTopic =
    publicationFilter === "" || publicationFilter === "all"
      ? filteredByType
      : filteredByType.filter((p) => p.tags.includes(publicationFilter));

  const filteredPublications = filterByTopic.filter((p) =>
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
            confname={news.conferencename}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPublications;
