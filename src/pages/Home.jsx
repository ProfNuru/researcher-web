import { profile, recentNews, recentPublications } from "../../constants";
import Acknowledgements from "../components/Acknowledgements";
import FeaturedPublications from "../components/FeaturedPublications";
import Profile from "../components/Profile";
import RecentNews from "../components/RecentNews";

const Home = () => {
  return (
    <>
      <Profile profile={profile} />
      <RecentNews title="recent news" recentNews={recentNews} />
      <FeaturedPublications
        publications={recentPublications}
        title="recent publications"
      />
      <Acknowledgements />
    </>
  );
};

export default Home;
