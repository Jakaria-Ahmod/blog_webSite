import Baner from './components/Banner';
import RecentPost from './components/RecentPost';
import Technology from './components/Technology';

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <Baner></Baner>
        <Technology></Technology>
        <RecentPost></RecentPost>
      </div>
    </div>
  );
};

export default Home;
