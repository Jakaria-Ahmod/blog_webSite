import { useNavigate } from 'react-router';
import BlogCard from '../../../../globalComponents/BlogCard';
import CommonBtn from '../../../../globalComponents/CommonBtn';
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
          <BlogCard></BlogCard>
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
