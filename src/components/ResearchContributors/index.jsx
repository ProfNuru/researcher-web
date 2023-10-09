import ContributorCard from "../ContributorCard";
import "./ResearchContributors.css";

const ResearchContributors = ({ contributors }) => {
  return (
    <div className="contributors">
      {contributors.map((contributor, i) => (
        <ContributorCard key={i} contributor={contributor} />
      ))}
    </div>
  );
};

export default ResearchContributors;
