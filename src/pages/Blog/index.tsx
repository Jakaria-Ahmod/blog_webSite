import type React from 'react';
import BlogCard from '../../globalComponents/BlogCard';
import CTA from '../Home/components/CTA';
import { resentPost } from '../Home/components/RecentPost/components/RecentApi';

const Blog: React.FC = () => {
  return (
    <section>
      <div className=" text-center container">
        <p className="font-Roboto text-base font-bold  leading-[24px] text-[#666] mt-[77px]">
          OUR BLOGS
        </p>
        <h2 className="mt-[25px] text-balck01 font-Roboto text-[48px] font-bold leading-[63px]">
          Find our all blogs from here
        </h2>
        <div className="flex items-center justify-center mt-[25px]">
          <h3 className="w-[756px] text-[#666]  text-center font-Roboto text-base font-normal leading-[24px]">
            our blogs are written from very research research and well known
            writers writers so that we can provide you the best blogs and
            articles articles for you to read them all along
          </h3>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-3 gap-[16px] mt-[114px]">
          {resentPost.map(item => (
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
      <div></div>
      <CTA></CTA>
    </section>
  );
};

export default Blog;
