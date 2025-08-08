import Logo from './components/Logo';
import Menu from './components/Menu';

const Heder: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto flex  justify-between sticky top-0 left-0 w-full py-[21px]">
        <div>
          <Logo></Logo>
        </div>
        <div>
          <Menu></Menu>
        </div>
      </div>
    </div>
  );
};

export default Heder;
