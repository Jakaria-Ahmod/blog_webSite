type Title = {
  children: string;
  className: string;
};

const CommonBtn: React.FC<Title> = ({ children, className }) => {
  return (
    <div>
      <div>
        <button className={className}>{children}</button>
      </div>
    </div>
  );
};

export default CommonBtn;
