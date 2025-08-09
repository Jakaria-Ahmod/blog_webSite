import CTA from '../Home/components/CTA';
import NotFoundConponets from './components';

const NotFound: React.FC = () => {
  return (
    <div>
      <div className="container">
        <div className="my-[151px]">
          <NotFoundConponets></NotFoundConponets>
        </div>
      </div>
      <div>
        <CTA></CTA>
      </div>
    </div>
  );
};

export default NotFound;
