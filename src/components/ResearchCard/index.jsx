import { Link } from "react-router-dom";
import "./ResearchCard.css";

const ResearchCard = ({ reverse = false, research }) => {
  const query = new URLSearchParams({
    r: research.title,
  }).toString();
  return (
    <div className={reverse ? "research-card-reverse" : "research-card"}>
      <div className="research-img">
        <img src={research.image} alt="Research image" />
      </div>
      <div className="research-details">
        <h3>{research.title}</h3>
        <p>
          {research.summary}
          <br />
          <Link to={`/research?${query}`}>read more</Link>
        </p>
      </div>
    </div>
  );
};

export default ResearchCard;
