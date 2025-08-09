import TemCard from '../../globalComponents/TemCard';
import CTA from '../Home/components/CTA';
import AboutHead from './components/AboutHead';
import AboutImg from './components/AboutImg';
import { TemeCardApi } from './components/TemApi';
import Work from './components/Work';

const About: React.FC = () => {
  return (
    <div>
      <div className="container">
        <div className="mt-[74px]">
          <AboutHead></AboutHead>
        </div>
        <div>
          <AboutImg></AboutImg>
        </div>
        <div className="mt-[100px]">
          <Work></Work>
        </div>
        <div className="grid grid-cols-4 mt-[87px] gap-6">
          {TemeCardApi.map(item => (
            <TemCard
              number={item?.number}
              title={item?.title}
              description={item?.description}
            ></TemCard>
          ))}
        </div>
        <div></div>
      </div>
      <div className="mt-[161px]">
        <CTA></CTA>
      </div>
    </div>
  );
};

export default About;
