import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import BlogCard from '../../../../globalComponents/BlogCard';
import CommonBtn from '../../../../globalComponents/CommonBtn';
import { resentPost } from './components/RecentApi';
import Post from './components/RecentPostLayout/Post';
import PostLeft from './components/RecentPostLayout/PostLeft';

const RecentPost: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleroute = () => {
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
            onClick={handleroute}
            className="bg-primary py-[16px] px-[48px] text-white font-Ralwway text-sm font-semibold leading-[24px] rounded-[8px] cursor-pointer"
          />
        </div>

        <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-x-[56px] gap-y-8">
          <PostLeft />
          <Post />
        </div>

        <div className="mt-[63px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {resentPost.slice(0, 3).map(item => (
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

export default RecentPost;
