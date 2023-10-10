import { useStateContext } from "../../store/StateContext";
import ResearchCard from "../ResearchCard";
import "./ResearchesList.css";

const ResearchesList = ({ researches }) => {
  const { researchFilter } = useStateContext();
  const filteredResearches =
    researchFilter === "all"
      ? researches
      : researches.filter((research) =>
          research.title.toLowerCase().includes(researchFilter)
        );

  return (
    <div className="researches-list">
      {filteredResearches.map((research, i) => (
        <ResearchCard reverse={i % 2 === 1} key={i} research={research} />
      ))}
    </div>
  );
};

export default ResearchesList;
