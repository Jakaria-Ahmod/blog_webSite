import { Outlet } from 'react-router';
import Footer from '../comonLayout/Footer';
import Heder from '../comonLayout/Heder';

const RootComponetns: React.FC = () => {
  return (
    <div>
      <div>
        <div className="shadow">
          <Heder></Heder>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootComponetns;
