import { useLocation } from "react-router-dom";
import { researches } from "../../constants";
import Heading from "../components/Heading";
import ResearchesList from "../components/ResearchesList";
import ToggleButtons from "../components/ui/ToggleButtons";
import IndividualResearchPage from "./IndividualResearchPage";
import { useStateContext, useUpdateStateContext } from "../store/StateContext";

const options = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Robotics",
    value: "robots",
  },
  {
    label: "Urban",
    value: "urban",
  },
];

const Research = () => {
  const { researchFilter } = useStateContext();
  const updateToggleState = useUpdateStateContext();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const individualResearch = query.get("r");
  console.log(individualResearch);

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
        <ToggleButtons
          options={options}
          initialValue={{
            label: "researchFilter",
            value: researchFilter,
          }}
          updateValue={updateToggleState}
        />
      </div>

      <ResearchesList researches={researches} />
    </>
  );
};

export default Research;
