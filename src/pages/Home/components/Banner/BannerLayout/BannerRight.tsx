import bannerImg from '../../../../../assets/img/banner.png';

const BannerRight: React.FC = () => {
  return (
    <div>
      <div className="w-full max-w-[610px] h-auto md:h-[575px] rounded-[16px] overflow-hidden">
        <img
          src={bannerImg}
          alt="bannerImg"
          className="w-full h-full object-cover rounded-[16px]"
        />
      </div>
    </div>
  );
};

export default BannerRight;
