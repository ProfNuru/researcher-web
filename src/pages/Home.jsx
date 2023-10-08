import { profile } from "../../constants";
import Profile from "../components/Profile";
import RecentNews from "../components/RecentNews";

const Home = () => {
  return (
    <>
      <Profile profile={profile} />
      <RecentNews />
    </>
  );
};

export default Home;
