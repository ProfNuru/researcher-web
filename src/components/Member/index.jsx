import { Link } from "react-router-dom";
import "./Member.css";

const Member = ({ member }) => {
  return (
    <div className="member">
      <div className="images">
        <img
          className="profile-pic"
          src={member.profilePic}
          alt="Profile picture"
        />
        <div className="social-media-icons">
          <Link href={member.email}>
            <img src="email.png" alt={member.email} />
          </Link>
          {member.socialMedia.map((icon) => (
            <Link key={icon.icon} href={icon.link}>
              <img src={icon.icon} alt={icon.name} />
            </Link>
          ))}
        </div>
      </div>

      <div className="description">
        <p className="title">{member.title}</p>
        <h3 className="name">{member.name}</h3>
        <p>{member.description}</p>
      </div>
    </div>
  );
};

export default Member;
