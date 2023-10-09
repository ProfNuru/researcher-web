import { allMedia } from "../../constants";
import Heading from "../components/Heading";
import MediaList from "../components/MediaList";

const Media = () => {
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
        <Heading title="media" center={true} />
        <p style={{ textAlign: "center" }}>
          I enjoy organizing events and creating resources that make the
          research community more open and welcoming.
        </p>
      </div>

      <MediaList media={allMedia} />
    </>
  );
};

export default Media;
