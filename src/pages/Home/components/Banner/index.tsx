import BannerLeft from './BannerLayout/BannerLeft';
import BannerRight from './BannerLayout/BannerRight';

const Baner: React.FC = () => {
  return (
    <section className="bg-primary py-[132px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[86px] gap-y-8">
          <div>
            <BannerLeft />
          </div>
          <div>
            <BannerRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Baner;
