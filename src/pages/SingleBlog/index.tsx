import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import BlogCard from '../../globalComponents/BlogCard';
import CommonBtn from '../../globalComponents/CommonBtn';
import CTA from '../Home/components/CTA';
import { resentPost } from '../Home/components/RecentPost/components/RecentApi';

const SingleBlog: React.FC = () => {
  const naviget = useNavigate();
  const handleroute = () => {
    naviget('/blog');
  };
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  interface singleBlog {
    Tarvel: string;
    date: string;
    title: string;
    img: string;
    descript02: string;
    descript03: string;
    description: string;
    descripton04: string;
    desimgTitle: string;
    descImg: string;
  }

  const singleBlog = resentPost.find(item => item.id === Number(id));

  if (!singleBlog) {
    return <div>Blog not found</div>;
  }

  const {
    Tarvel,
    date,
    title,
    img,
    descript02,
    descript03,
    descripton04,
    desimgTitle,
    descImg,
  } = singleBlog;

  return (
    <section>
      <div className="container px-4 md:px-24">
        <div className="my-[117px]">
          <div>
            <div className="flex gap-x-4 text-[12px] font-Roboto font-bold leading-[18px]">
              <span className="uppercase text-balck01">{Tarvel}</span>
              <span className="text-[#999]">{date}</span>
            </div>
            <div className="w-full md:w-[1024px]">
              <h3 className="text-balck01 font-Roboto mt-8 text-3xl md:text-[48px] font-bold leading-tight md:leading-[63px]">
                {title}
              </h3>
            </div>
          </div>
          <div>
            <div className="w-full md:w-[1232px] h-[300px] md:h-[608px] mt-14 bg-black rounded-[16px] overflow-hidden">
              <img src={img} alt="img" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="mt-16 md:px-0 px-2 max-w-[720px] mx-auto">
            <p className="text-[#666] font-Roboto text-base font-normal leading-[24px]">
              {descript02}
            </p>
            <br />
            <br />
            <p className="text-[#666] font-Roboto text-base font-normal leading-[24px]">
              {descript03}
            </p>
          </div>
          <div className="max-w-[720px] mx-auto px-2 mt-20">
            <p className="text-[#666] font-Roboto text-base font-normal leading-[24px]">
              {descripton04}
            </p>
          </div>
          <div>
            <div className="w-full md:w-[816px] h-[180px] md:h-[312px] mt-14 bg-black mx-auto rounded-[16px] overflow-hidden">
              <img
                src={descImg}
                alt="img"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center mt-10">
            <p className="text-balck01 font-Roboto text-base font-normal leading-[24px]">
              {desimgTitle}
            </p>
          </div>
        </div>

        {/* Popular Post Section */}
        <div className="pt-[81px]">
          <div className="flex justify-between items-center">
            <h2 className="text-balck01 font-Raleway text-2xl md:text-[48px] font-bold leading-[50px]">
              Popular Post
            </h2>
            <CommonBtn
              children="View All"
              onClick={handleroute}
              className="bg-primary py-4 px-12 text-white font-Ralwway text-sm font-semibold leading-6 rounded-[8px] cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
            {resentPost.slice(0, 3).map(item => (
              <div key={item.id}>
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
      </div>
      <CTA />
    </section>
  );
};

export default SingleBlog;
