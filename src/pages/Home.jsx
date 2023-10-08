import { profile } from "../../constants";
import Acknowledgements from "../components/Acknowledgements";
import FeaturedPublications from "../components/FeaturedPublications";
import Profile from "../components/Profile";
import RecentNews from "../components/RecentNews";

const Home = () => {
  return (
    <>
      <Profile profile={profile} />
      <RecentNews />
      <FeaturedPublications />
      <Acknowledgements />
    </>
  );
};

export default Home;
