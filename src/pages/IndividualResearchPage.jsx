import Heading from "../components/Heading";
import {
  contributors,
  recentNews,
  recentPublications,
  researches,
} from "../../constants";
import FeaturedPublications from "../components/FeaturedPublications";
import ResearchContributors from "../components/ResearchContributors";
import RecentNews from "../components/RecentNews";

const IndividualResearchPage = ({ researchName }) => {
  const research = researches.find((r) => r.title === researchName);
  return research ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          marginTop: "5%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Heading center={false} textCase={"capitalize"} title={researchName} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "5%",
          width: "100%",
        }}
      >
        {research.images.map((img, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              flexGrow: 1,
              maxHeight: "400px",
              display: "flex",
            }}
          >
            <img style={{ width: "100%" }} src={img} alt={img} />
          </div>
        ))}
      </div>

      <div>
        <p>{research.detail}</p>
      </div>

      <div
        style={{
          margin: "30px 0px",
        }}
      >
        <Heading center={false} title={"publications"} />
        <FeaturedPublications
          mainPage={true}
          title="publications"
          publications={recentPublications}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <Heading center={false} title={"contributors"} />
        <ResearchContributors contributors={contributors} />
      </div>

      <RecentNews
        recentNews={[
          recentNews[recentNews.length - 1],
          recentNews[recentNews.length - 2],
        ]}
        title={"related news"}
      />
    </div>
  ) : (
    <h3>Research not found</h3>
  );
};

export default IndividualResearchPage;
