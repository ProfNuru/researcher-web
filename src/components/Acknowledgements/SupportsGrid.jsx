import { supports } from "../../../constants";
import "./SupportsGrid.css";

const SupportsGrid = () => {
  return (
    <div className="supports-grid">
      {supports.map((support, i) => (
        <div key={i} className="grid-item">
          <img src={support.image} alt="Support" />
        </div>
      ))}
    </div>
  );
};

export default SupportsGrid;
