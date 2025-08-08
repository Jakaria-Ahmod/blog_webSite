import bannerImg from '../../../../../assets/img/banner.png';

const BannerRight: React.FC = () => {
  return (
    <div>
      <div className="w-[610px] h-[575px] bg-amber-700 rounded-[16px]">
        <img
          src={bannerImg}
          alt="bannerImg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BannerRight;
