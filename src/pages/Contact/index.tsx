import ContactCard from '../../globalComponents/ContactCard';
import CTA from '../Home/components/CTA';
import { ContactApi } from './components/ContactApi';
import ContactFrom from './components/ContactFrom';
import ContactHeding from './components/ContactHeding';

const Contact: React.FC = () => {
  return (
    <section className="">
      <div className="container ">
        <div className="flex items-center justify-center mt-[106px]">
          <ContactHeding></ContactHeding>
        </div>
        <div className="grid grid-cols-4 mt-[57px] gap-[23px]">
          {ContactApi.map(item => (
            <ContactCard
              img={item?.img}
              title={item?.title}
              descrption={item?.descripiton}
            ></ContactCard>
          ))}
        </div>
        <div className="mt-[100px]">
          <ContactFrom></ContactFrom>
        </div>
      </div>
      <div className="mt-[100px]">
        <CTA></CTA>
      </div>
    </section>
  );
};

export default Contact;
