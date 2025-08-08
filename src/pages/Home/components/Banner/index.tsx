import BannerLeft from './BannerLayout/BannerLeft';
import BannerRight from './BannerLayout/BannerRight';

const Baner: React.FC = () => {
  return (
    <section className="bg-primary py-[132px]">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-[86px]">
          <div>
            <BannerLeft></BannerLeft>
          </div>
          <div>
            <BannerRight></BannerRight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Baner;
