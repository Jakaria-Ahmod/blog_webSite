const CommonBtn = ({ children, className }) => {
  return (
    <div>
      <div>
        <button className={className}>{children}</button>
      </div>
    </div>
  );
};

export default CommonBtn;
