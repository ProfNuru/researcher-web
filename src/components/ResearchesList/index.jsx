import ResearchCard from "../ResearchCard";
import "./ResearchesList.css";

const ResearchesList = ({ researches }) => {
  return (
    <div className="researches-list">
      {researches.map((research, i) => (
        <ResearchCard reverse={i % 2 === 1} key={i} research={research} />
      ))}
    </div>
  );
};

export default ResearchesList;
