import { services } from "../../constants";
import Heading from "../components/Heading";
import ServiceItems from "../components/ServiceItems";

const Services = () => {
  return (
    <>
      <div
        style={{
          marginTop: "5%",
          marginBottom: "3%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Heading title="services" center={true} />
        <p style={{ textAlign: "center" }}>
          I enjoy organizing events and creating resources that make the
          research community more open and welcoming.
        </p>
      </div>

      {services.map((service) => (
        <ServiceItems
          key={service.title}
          title={service.title}
          servicesList={service.items}
        />
      ))}
    </>
  );
};

export default Services;
