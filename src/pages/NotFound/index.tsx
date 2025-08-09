import CTA from '../Home/components/CTA';
import NotFoundConponets from './components';

const NotFound: React.FC = () => {
  return (
    <div>
      <div className="container px-4">
        <div className="my-[100px] sm:my-[151px]">
          <NotFoundConponets />
        </div>
      </div>
      <div>
        <CTA />
      </div>
    </div>
  );
};

export default NotFound;
