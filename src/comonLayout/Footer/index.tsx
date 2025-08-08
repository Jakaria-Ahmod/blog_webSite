import { Link } from 'react-router';
import FooterLogo from '../../assets/img/blogLogo.png';

const Footer = () => {
  const dateAnd = new Date().getFullYear();
  return (
    <section className="container pt-[53px] flex items-center justify-center flex-col">
      <Link to="/">
        <img src={FooterLogo} alt="" />
      </Link>
      <div className="mt-[40px] flex items-center gap-x-[46px]">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">contact Us</Link>
      </div>
      <div className="w-full h-[1px] bg-primary mt-[60px]"></div>
      <div>
        <p className="mt-[40px] text-[#150E06] font-Roboto text-base font-normal leading-[24px]">
          Copyright Ideapeel Inc © {dateAnd} All Right Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
