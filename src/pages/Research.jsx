import { useLocation } from "react-router-dom";
import { researches } from "../../constants";
import Heading from "../components/Heading";
import ResearchesList from "../components/ResearchesList";
import ToggleButtons from "../components/ui/ToggleButtons";
import IndividualResearchPage from "./IndividualResearchPage";

const options = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Topic 1",
    value: "topic1",
  },
  {
    label: "Topic 2",
    value: "topic2",
  },
];

const Research = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const individualResearch = query.get("r");
  return individualResearch ? (
    <IndividualResearchPage researchName={individualResearch} />
  ) : (
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
        <Heading title="research" center={true} />
        <ToggleButtons options={options} />
      </div>

      <ResearchesList researches={researches} />
    </>
  );
};

export default Research;
