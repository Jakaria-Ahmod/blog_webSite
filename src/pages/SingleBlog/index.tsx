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

  const singleBlog = resentPost.find(item => item.id == Number(id));

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
      <div className="container">
        <div className=" px-[104px] my-[117px]">
          <div>
            <div className="flex gap-x-[16px] ">
              <span className="font-Roboto uppercase text-balck01 text-[12px] font-bold leading-[18px]">
                {Tarvel}
              </span>
              <span className="font-Roboto text-[#999] text-[12px] font-bold leading-[18px]">
                {date}
              </span>
            </div>
            <div className="w-[1024px]">
              <h3 className="text-balck01 font-Roboto mt-[33px] text-[48px] font-bold leading-[63px]">
                {title}
              </h3>
            </div>
          </div>
          <div>
            <div className="w-[1232px] h-[608px] mt-[56px] bg-black rounded-[16px] overflow-hidden">
              <img src={img} alt="img" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="px-[104px] mt-[65px]">
            <p className="text-[#666] font-Roboto text-base font-normal leading-[24px]">
              {descript02}
            </p>
            <br />
            <br />
            <p className="text-[#666] font-Roboto text-base font-normal leading-[24px]">
              {descript03}
            </p>
          </div>
          <div>
            <p className="text-[#666] font-Roboto text-base font-normal leading-[24px] mt-[80px]">
              {descripton04}
            </p>
          </div>
          <div>
            <div className="w-[816px] h-[312px] mt-[56px] bg-black mx-auto rounded-[16px] overflow-hidden">
              <img
                src={descImg}
                alt="img"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-balck01 mt-[40px] font-Roboto text-base font-normal leading-[24px] ">
              {desimgTitle}
            </p>
          </div>
        </div>
        <div>
          <div className="container pt-[81px]">
            <div className="flex justify-between">
              <h2 className="text-balck01 font-Raleway text-[48px] font-bold leading-[50px]">
                Popular Post
              </h2>
              <CommonBtn
                children="viwe All"
                onClick={handleroute}
                className="bg-primary py-[16px] px-[48px] text-white font-Ralwway text-sm font-semibold leading-[24px] rounded-[8px] cursor-pointer"
              ></CommonBtn>
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
        </div>
      </div>
      <CTA></CTA>
    </section>
  );
};

export default SingleBlog;
