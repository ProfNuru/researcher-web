import { Link } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSize";
import "./Profile.css";

const Profile = ({ profile }) => {
  const screenSize = useScreenSize();
  return (
    <div className="profile-home">
      {screenSize.width <= 600 && (
        <div className="profile-intro">
          <h1>{profile.name}</h1>
          <h3>{`${profile.title} | ${profile.institution}`}</h3>
        </div>
      )}
      <div className="profile-img">
        <img src={profile.profilePic} alt={profile.name} />
        <ul className="icons">
          <li>
            <Link to={`mailto:${profile.email}`}>
              <img src="/email.png" alt={profile.email} />
            </Link>
          </li>
          {profile.socialMedia.map((icon) => (
            <li key={icon.link}>
              <Link to={icon.link}>
                <img src={icon.icon} alt={icon.name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="profile-description">
        {screenSize.width > 600 && (
          <div className="profile-intro">
            <h1>{profile.name}</h1>
            <h3>{`${profile.title} | ${profile.institution}`}</h3>
          </div>
        )}
        {profile.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Profile;
