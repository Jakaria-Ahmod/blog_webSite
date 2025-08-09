import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import BlogCard from '../../../../globalComponents/BlogCard';
import CommonBtn from '../../../../globalComponents/CommonBtn';
import { resentPost } from '../RecentPost/components/RecentApi';

const PopularPost: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleRoute = () => {
    navigate('/blog');
  };

  return (
    <section>
      <div className="container mx-auto px-4 pt-[81px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-balck01 font-Raleway text-[36px] md:text-[48px] font-bold leading-[40px] md:leading-[50px] mb-6 md:mb-0">
            Our Recent Post
          </h2>
          <CommonBtn
            children="View All"
            onClick={handleRoute}
            className="bg-primary py-[16px] px-[48px] text-white font-Ralwway text-sm font-semibold leading-[24px] rounded-[8px] cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-[63px]">
          {resentPost.slice(0, 9).map(item => (
            <div key={item.id}>
              <BlogCard
                img={item.img}
                id={item.id}
                Tarvel={item.Tarvel}
                date={item.date}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPost;
