const AboutHead: React.FC = () => {
  return (
    <div>
      <section>
        <div className="text-center container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <p className="font-Roboto text-base font-bold leading-[24px] text-[#666] mt-[77px]">
            ABOUT US
          </p>
          <div className="flex items-center justify-center">
            <h2 className="mt-[25px] max-w-[728px] text-balck01 font-Roboto text-[32px] sm:text-[48px] font-bold leading-[40px] sm:leading-[63px]">
              Creative Blog Writting and publishing site
            </h2>
          </div>
          <div className="flex items-center justify-center mt-[25px] px-4">
            <h3 className="max-w-[1010px] text-[#666] text-center font-Roboto text-sm sm:text-base font-normal leading-[20px] sm:leading-[24px]">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHead;
