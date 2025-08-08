type Title = {
  children: string;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CommonBtn: React.FC<Title> = ({ children, className, onClick }) => {
  return (
    <div>
      <div>
        <button onClick={onClick} className={className}>
          {children}
        </button>
      </div>
    </div>
  );
};

export default CommonBtn;
