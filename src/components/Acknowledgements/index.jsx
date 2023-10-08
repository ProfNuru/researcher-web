import Heading from "../Heading";
import "./Acknowledgements.css";
import SupportsGrid from "./SupportsGrid";

const Acknowledgements = () => {
  return (
    <div className="acknowledgements">
      <Heading center={false} title="acknowledgements of supports" />
      <SupportsGrid />
    </div>
  );
};

export default Acknowledgements;
