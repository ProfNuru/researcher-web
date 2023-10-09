import "./ContributorCard.css";

const ContributorCard = ({ contributor }) => {
  return (
    <div className="contributor-card">
      <div className="img">
        <img src={contributor.image} alt={contributor.name} />
      </div>
      <div className="text">
        <p>{contributor.title}</p>
        <h3>{contributor.name}</h3>
      </div>
    </div>
  );
};

export default ContributorCard;
