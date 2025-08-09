import { useEffect } from 'react';
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-[600px] sm:min-h-[550px] xs:min-h-[auto] bg-white overflow-hidden rounded-md shadow-md">
      <div className="h-[252px] sm:h-[200px] xs:h-[150px]">
        <img
          src={img}
          alt="blogImg"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="mt-10 sm:mt-6 xs:mt-4 px-4">
        <div className="flex gap-x-3 items-center">
          <span className="text-balck01 font-Roboto text-[12px] font-bold leading-[18px]">
            {Tarvel}
          </span>
          <span className="text-[#999999] font-Roboto text-[12px] font-bold leading-[18px]">
            {date}
          </span>
        </div>
        <div className="mt-4">
          <h2 className="text-balck01 font-Roboto text-[24px] sm:text-[20px] xs:text-[18px] font-bold leading-[31px] capitalize">
            {title.length > 50 ? title.substring(0, 50) + '...' : title}
          </h2>
        </div>
        <div>
          <p className="font-Roboto text-[#666666] text-base sm:text-sm xs:text-sm leading-[24px] mt-2">
            {description.length > 150
              ? description.substring(0, 150) + '...'
              : description}
          </p>
        </div>
        <div className="mt-5 sm:mt-3">
          <Link
            to={`/single-blog/${id}`}
            className="text-primary font-Roboto text-[18px] sm:text-[16px] xs:text-[14px] font-bold leading-[27px] underline cursor-pointer"
          >
            Read More...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
