import { allPublications } from "../../constants";
import FilterForm from "../components/FilterForm";
import Heading from "../components/Heading";
import AllPublications from "../components/FeaturedPublications";
import ToggleButtons from "../components/ui/ToggleButtons";
import { useStateContext, useUpdateStateContext } from "../store/StateContext";

const options = [
  {
    label: "All",
    value: "",
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

const Publications = () => {
  const { publicationFilter } = useStateContext();
  const updateToggleState = useUpdateStateContext();

  return (
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
        <Heading title="publications" />
        <FilterForm />

        <div
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <h5 style={{ textAlign: "center" }}>Filter by topic</h5>
          <ToggleButtons
            options={options}
            initialValue={{
              label: "publicationFilter",
              value: publicationFilter,
            }}
            updateValue={updateToggleState}
          />
        </div>
      </div>
      <AllPublications publications={allPublications} mainPage={true} />
    </>
  );
};

export default Publications;
