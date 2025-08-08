import { useNavigate } from 'react-router';
import tecnolayImg from '../../../../assets/img/tecnology.png';
import CommonBtn from '../../../../globalComponents/CommonBtn';
const Technology: React.FC = () => {
  const naviget = useNavigate();
  const handleRoute = () => {
    naviget('/blog');
  };
  return (
    <section className="container">
      <div className="py-[131px]">
        <div className="">
          <img
            src={tecnolayImg}
            alt="tecnolayImg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center relative justify-end">
          <div className="bg-white pr-20 absolute shadow-2xl -top-[250px] right-0 p-[32px] w-[920px] rounded-[16px]">
            <div className="flex items-center gap-x-[8px]">
              <span className="uppercase text-balck01 font-Roboto text-[12px] font-bold leading-[18px]">
                DEVELOPMENT
              </span>
              <span className="uppercase text-balck01 font-Roboto text-[12px] font-bold leading-[18px]">
                16 March 2023
              </span>
            </div>
            <div className="mt-[25px]">
              <h2 className="text-balck01 font-Ralwway text-[32px] font-bold leading-[45px]">
                How to make a Game look more attractive with New VR & AI
                Technology
              </h2>
              <p className="text-white01 opacity-50 font-Roboto text-base leading-[24px] mt-[10px] ">
                Google has been investing in AI for many years and bringing its
                benefits to individuals, businesses and communities. Whether
                it’s publishing state-of-the-art research, building helpful
                products or developing tools and resources that enable others,
                we’re committed to making AI accessible to everyone.
              </p>
            </div>
            <div className="mt-[38px]">
              <CommonBtn
                onClick={handleRoute}
                children="Read more"
                className="bg-primary text-white py-[16px] px-[48px] text-balck font-Ralwway text-sm font-semibold leading-[24px] rounded-[8px] cursor-pointer"
              ></CommonBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
