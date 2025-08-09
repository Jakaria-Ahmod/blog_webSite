import TemCard from '../../globalComponents/TemCard';
import CTA from '../Home/components/CTA';
import AboutHead from './components/AboutHead';
import AboutImg from './components/AboutImg';
import { TemeCardApi } from './components/TemApi';
import Work from './components/Work';

const About: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="mt-[74px]">
          <AboutHead />
        </div>
        <div>
          <AboutImg />
        </div>
        <div className="mt-[100px]">
          <Work />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[87px] gap-6">
          {TemeCardApi.map(item => (
            <TemCard
              key={item?.number}
              number={item?.number}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </div>
      </div>
      <div className="mt-[161px]">
        <CTA />
      </div>
    </div>
  );
};

export default About;
