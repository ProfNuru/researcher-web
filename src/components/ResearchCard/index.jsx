import "./ResearchCard.css";

const ResearchCard = ({ reverse = false, research }) => {
  console.log(research);
  return (
    <div className={reverse ? "research-card-reverse" : "research-card"}>
      ResearchCard
    </div>
  );
};

export default ResearchCard;
