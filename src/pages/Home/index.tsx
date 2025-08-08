import Baner from './components/Banner';
import CTA from './components/CTA';
import PopularPost from './components/PopularPost';
import RecentPost from './components/RecentPost';
import Technology from './components/Technology';

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <Baner></Baner>
        <Technology></Technology>
        <RecentPost></RecentPost>
        <PopularPost></PopularPost>
        <CTA></CTA>
      </div>
    </div>
  );
};

export default Home;
