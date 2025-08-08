import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import BlogCard from '../../../../globalComponents/BlogCard';
import CommonBtn from '../../../../globalComponents/CommonBtn';
import { resentPost } from '../RecentPost/components/RecentApi';

const PopularPost: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const naviget = useNavigate();
  const handleRoute = () => {
    naviget('/blog');
  };
  return (
    <div>
      <div>
        <section>
          <div className="container pt-[81px]">
            <div className="flex justify-between">
              <h2 className="text-balck01 font-Raleway text-[48px] font-bold leading-[50px]">
                Our Recent Post
              </h2>
              <CommonBtn
                children="viwe All"
                onClick={handleRoute}
                className="bg-primary py-[16px] px-[48px] text-white font-Ralwway text-sm font-semibold leading-[24px] rounded-[8px] cursor-pointer"
              ></CommonBtn>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-6 mt-[63px]">
                {resentPost.slice(0, 9).map(item => (
                  <div key={item?.id}>
                    <BlogCard
                      img={item?.img}
                      id={item?.id}
                      Tarvel={item?.Tarvel}
                      date={item?.date}
                      title={item?.title}
                      description={item?.description}
                    ></BlogCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PopularPost;
