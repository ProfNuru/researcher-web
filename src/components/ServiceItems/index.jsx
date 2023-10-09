import "./ServiceItems.css";

const ServiceItems = ({ title, servicesList }) => {
  return (
    <div className="service-items">
      <h3>{title}</h3>
      <ul>
        {servicesList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceItems;
