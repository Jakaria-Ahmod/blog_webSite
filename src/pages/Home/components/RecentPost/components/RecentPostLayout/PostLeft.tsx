import RecentPostImg from '../../../../../../assets/img/recentPost.png';

const PostLeft: React.FC = () => {
  return (
    <section>
      <div className="w-full max-w-[712px] h-auto md:h-[456px] rounded-[16px] overflow-hidden">
        <img
          src={RecentPostImg}
          alt="img"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default PostLeft;
