import Heading from "../components/Heading";
import { recentPublications, researches } from "../../constants";
import FeaturedPublications from "../components/FeaturedPublications";
import ResearchContributors from "../components/ResearchContributors";
import RecentNews from "../components/RecentNews";

const IndividualResearchPage = ({ researchName }) => {
  const selected_research = researches.find((r) => r.title === researchName);
  const related_news = selected_research.news.map((obj) => ({
    date: obj.date.includes(".")
      ? `${obj.date.toLowerCase().split(". ")[0].substring(0, 3)} ${
          obj.date.toLowerCase().split(". ")[1]
        }`
      : `${obj.date.toLowerCase().split(", ")[0].substring(0, 3)} ${
          obj.date.toLowerCase().split(", ")[1]
        }`,
    text: obj.text,
  }));
  const research = {
    ...selected_research,
    news: related_news,
  };
  console.log("Clicked research:", related_news);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {research ? (
        <>
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
            <Heading
              center={false}
              textCase={"capitalize"}
              title={researchName}
            />
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
            <ResearchContributors contributors={research.contributors} />
          </div>
          <RecentNews recentNews={research.news} title={"related news"} />
        </>
      ) : (
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10% 0px",
          }}
        >
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Research not found
          </h3>
        </div>
      )}
    </div>
  );
};

export default IndividualResearchPage;
