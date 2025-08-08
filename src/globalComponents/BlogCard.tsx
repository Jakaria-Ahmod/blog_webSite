import { Link } from 'react-router';

interface BlogCard {
  img: string;
  Tarvel: string;
  date: string;
  title: string;
  description: string;
  id: number;
}

const BlogCard: React.FC<BlogCard> = ({
  img,
  Tarvel,
  title,
  date,
  description,
  id,
}) => {
  return (
    <section className="h-[630px] bg-white overflow-hidden">
      <div className="">
        <img
          src={img}
          alt="blogImg"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="mt-[40px]">
        <div className="flex gap-x-3 items-center">
          <span className="text-balck01 font-Roboto text-[12px] font-bold leading-[18px]">
            {Tarvel}
          </span>
          <span className="text-[#999999] font-Roboto text-[12px] font-bold leading-[18px]">
            {date}
          </span>
        </div>
        <div className="mt-[16px]">
          <h2 className="text-balck01 font-Roboto text-[24px] font-bold leading-[31px] capitalize">
            {title.substring(0, 50)}...
          </h2>
        </div>
        <div>
          <p className="font-Roboto text-[#666666] text-base leading-[24px] mt-[7px]">
            {description.substring(0, 150)}
          </p>
        </div>
        <div className="mt-[19px]">
          <Link
            to={`/single-blog/${id}`}
            className="text-primary font-Roboto text-[18px] font-bold leading-[27px] underline cursor-pointer"
          >
            Read More...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
