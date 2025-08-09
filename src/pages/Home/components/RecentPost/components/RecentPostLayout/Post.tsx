import { useNavigate } from 'react-router';
import CommonBtn from '../../../../../../globalComponents/CommonBtn';

const Post = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate('/blog');
  };

  return (
    <section>
      <div>
        <div className="bg-white p-8 md:pr-20 rounded-[16px] max-w-full md:max-w-[700px] mx-auto md:mx-0">
          <div className="flex flex-wrap gap-2 md:gap-x-[8px] items-center">
            <span className="uppercase text-balck01 font-Roboto text-[12px] font-bold leading-[18px]">
              DEVELOPMENT
            </span>
            <span className="uppercase text-balck01 font-Roboto text-[12px] font-bold leading-[18px]">
              16 March 2023
            </span>
          </div>

          <div className="mt-[25px]">
            <h2 className="text-balck01 font-Ralwway text-[28px] md:text-[32px] font-bold leading-[36px] md:leading-[45px]">
              How to make a Game look more attractive with New VR & AI
              Technology
            </h2>
            <p className="text-white01 opacity-50 font-Roboto text-base leading-[24px] mt-[10px]">
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research, building helpful products or
              developing tools and resources that enable others, we’re committed
              to making AI accessible to everyone.
            </p>
          </div>

          <div className="mt-[38px]">
            <CommonBtn
              onClick={handleRoute}
              children="Read more"
              className="bg-primary text-white py-[16px] px-[48px] text-balck font-Ralwway text-sm font-semibold leading-[24px] rounded-[8px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
