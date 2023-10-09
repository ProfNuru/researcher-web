import Heading from "../components/Heading";
import ToggleButtons from "../components/ui/ToggleButtons";

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
        <Heading title="research" center={true} />
        <ToggleButtons options={options} />
      </div>
    </>
  );
};

export default Research;
