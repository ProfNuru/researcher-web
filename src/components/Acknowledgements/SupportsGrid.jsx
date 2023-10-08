import { supports } from "../../../constants";
import "./SupportsGrid.css";

const SupportsGrid = () => {
  return (
    <div className="supports-grid">
      {supports.map((support) => (
        <div key={support.image} className="grid-item">
          <img src={support.image} alt="Support" />
        </div>
      ))}
    </div>
  );
};

export default SupportsGrid;
