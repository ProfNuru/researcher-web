import FilterForm from "../components/FilterForm";
import Heading from "../components/Heading";
import AllPublications from "../components/FeaturedPublications";

const Publications = () => {
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
      </div>
      <AllPublications mainPage={true} />
    </>
  );
};

export default Publications;
