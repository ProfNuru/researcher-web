import { members } from "../../constants";
import Heading from "../components/Heading";
import MembersGrid from "../components/MembersGrid";

const Members = () => {
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
        <Heading title="members" center={true} />
        <p style={{ textAlign: "center" }}>
          Behind the work showcased on this personal academic website lies a
          dynamic and diverse group of individuals who are driven by a shared
          passion for knowledge and discovery. Our team is comprised of
          dedicated researchers, educators, and thinkers, each contributing
          their unique expertise and insights to our collective pursuit of
          academic excellence.
        </p>
      </div>

      <MembersGrid title={"current members"} members={members} />
      <MembersGrid title={"past members"} members={members} />
    </>
  );
};

export default Members;
