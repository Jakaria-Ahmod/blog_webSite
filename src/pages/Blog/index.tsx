import type React from 'react';
import BlogCard from '../../globalComponents/BlogCard';
import CTA from '../Home/components/CTA';
import { resentPost } from '../Home/components/RecentPost/components/RecentApi';

const Blog: React.FC = () => {
  return (
    <section>
      <div className="text-center container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="font-Roboto text-base font-bold leading-[24px] text-[#666] mt-[77px]">
          OUR BLOGS
        </p>
        <h2 className="mt-[25px] text-balck01 font-Roboto text-[36px] sm:text-[48px] font-bold leading-[42px] sm:leading-[63px]">
          Find our all blogs from here
        </h2>
        <div className="flex items-center justify-center mt-[25px] px-4">
          <h3 className="max-w-[756px] text-[#666] text-center font-Roboto text-sm sm:text-base font-normal leading-[20px] sm:leading-[24px]">
            Our blogs are written from very research research and well known
            writers writers so that we can provide you the best blogs and
            articles articles for you to read them all along.
          </h3>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-[64px]">
          {resentPost.map(item => (
            <div key={item?.id}>
              <BlogCard
                img={item?.img}
                id={item?.id}
                Tarvel={item?.Tarvel}
                date={item?.date}
                title={item?.title}
                description={item?.description}
              />
            </div>
          ))}
        </div>
      </div>
      <CTA />
    </section>
  );
};

export default Blog;
