import Heading from "../Heading";
import Member from "../Member";
import "./MembersGrid.css";

const MembersGrid = ({ title, members }) => {
  return (
    <div className="members-grid">
      <Heading title={title} center={false} />

      <div className="members">
        {members.map((member, i) => (
          <Member key={i} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MembersGrid;
