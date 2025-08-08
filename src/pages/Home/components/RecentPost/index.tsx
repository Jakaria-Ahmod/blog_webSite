import { useNavigate } from 'react-router';
import BlogCard from '../../../../globalComponents/BlogCard';
import CommonBtn from '../../../../globalComponents/CommonBtn';
import { resentPost } from './components/RecentApi';
import Post from './components/RecentPostLayout/Post';
import PostLeft from './components/RecentPostLayout/PostLeft';

const RecentPost: React.FC = () => {
  const naviget = useNavigate();
  const handleroute = () => {
    naviget('/blog');
  };
  return (
    <section>
      <div className="container pt-[81px]">
        <div className="flex justify-between">
          <h2 className="text-balck01 font-Raleway text-[48px] font-bold leading-[50px]">
            Our Recent Post
          </h2>
          <CommonBtn
            children="viwe All"
            onClick={handleroute}
            className="bg-primary py-[16px] px-[48px] text-white font-Ralwway text-sm font-semibold leading-[24px] rounded-[8px] cursor-pointer"
          ></CommonBtn>
        </div>
        <div>
          <div className="mt-[90px] grid grid-cols-2 gap-x-[56px]">
            <PostLeft></PostLeft>
            <Post></Post>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-6 mt-[63px]">
            {resentPost.slice(0, 3).map(item => (
              <div>
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
  );
};

export default RecentPost;
