import blogImg from '../assets/img/blogImg.png';

const BlogCard: React.FC = () => {
  return (
    <section className="w-[400px] h-[630px] bg-white overflow-hidden">
      <div className="w-[400px] h-[360px]">
        <img
          src={blogImg}
          alt="blogImg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-[40px]">
        <div className="flex gap-x-3 items-center">
          <span className="text-balck01 font-Roboto text-[12px] font-bold leading-[18px]">
            Travel
          </span>
          <span className="text-[#999999] font-Roboto text-[12px] font-bold leading-[18px]">
            13 March 2023
          </span>
        </div>
        <div className="mt-[16px]">
          <h2 className="text-balck01 font-Roboto text-[24px] font-bold leading-[31px] capitalize">
            8 Rules of Travelling In Sea You Need To Know
          </h2>
        </div>
        <div>
          <p className="font-Roboto text-[#666666] text-base leading-[24px] mt-[7px]">
            Travelling in sea has many advantages. Some of the advantages of
            transporting goods by sea include: you can ship large volumes at
            costs
          </p>
        </div>
        <div className="mt-[19px]">
          <button className="text-primary font-Roboto text-[18px] font-bold leading-[27px] underline cursor-pointer">
            Read More...
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
