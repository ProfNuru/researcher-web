import Heading from "../components/Heading";
import CoursesList from "../components/CoursesList";

const Teaching = () => {
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
        <Heading title="teaching" center={true} />
        <p style={{ textAlign: "center" }}>
          I teach about how we understand marginalized populations in the world.
          In my classes, students work to unpack the misconceptions we have
          about populations we understud— the ones we aren’t necessarily exposed
          to in our everyday lives. That’s why I research the politics of Africa
          and the Global South. My students have opportunities to work with me
          on my research.
        </p>
      </div>

      <CoursesList />
    </>
  );
};

export default Teaching;
