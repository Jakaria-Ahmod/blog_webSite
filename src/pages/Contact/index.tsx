import ContactCard from '../../globalComponents/ContactCard';
import CTA from '../Home/components/CTA';
import { ContactApi } from './components/ContactApi';
import ContactFrom from './components/ContactFrom';
import ContactHeding from './components/ContactHeding';

const Contact: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-center mt-[106px]">
          <ContactHeding />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-[57px] gap-6">
          {ContactApi.map((item, idx) => (
            <ContactCard
              key={idx}
              img={item?.img}
              title={item?.title}
              descrption={item?.descripiton}
            />
          ))}
        </div>
        <div className="mt-[100px]">
          <ContactFrom />
        </div>
      </div>
      <div className="mt-[100px]">
        <CTA />
      </div>
    </section>
  );
};

export default Contact;
