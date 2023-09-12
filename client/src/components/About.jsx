import '../index.css';

const About = () => {
  return (
    <div className="" id="About">
      <div className="about flex justify-center items-center p-2 w-full h-[100px]">
        <div className="title-wrapper -mt-[0.5rem]">
          <h1 className="about-title px-16 text-xl py-1 bg-white shadow-md rounded-full max-md:text-lg">
            <span>About</span>
          </h1>
        </div>
      </div>
      <div className="flex max-md:mx-auto max-md:flex-col max-md:gap-6 max-md:w-[90%] max-md:justify-center max-md:items-center my-10 w-full justify-evenly about__images relative max-w-md:h-auto">
        <div className="about__main rounded-md max-md:w-[90%] w-[30%] max-md:h-[40vh] h-[300px] bg-gray-500">
          Demo Video
        </div>
        <div className="flex flex-col gap-10 w-[30%] max-md:w-[90%]">
          <a
            href="https://github.com/aryanraj2713/SIH-2023"
            className="block max-md:mx-auto max-md:w-[60%]"
            target="__blank"
          >
            <div className="bg-[#24292F] flex gap-3 flex-row justify-evenly rounded-lg px-6 py-2 w-max max-md:w-[100%] text-[#ffffff] hover:bg-[#14171b] transition-all 0.2s ease-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  d="M11.7195 0C5.24784 0 0 5.24692 0 11.7195C0 16.8976 3.35799 21.2905 8.01455 22.8402C8.60023 22.9487 8.81531 22.586 8.81531 22.2764C8.81531 21.997 8.80437 21.0737 8.79941 20.0945C5.53893 20.8034 4.85096 18.7117 4.85096 18.7117C4.31785 17.3571 3.54973 16.997 3.54973 16.997C2.48646 16.2696 3.62988 16.2844 3.62988 16.2844C4.80675 16.3672 5.42643 17.4922 5.42643 17.4922C6.47168 19.2839 8.16805 18.7659 8.83682 18.4665C8.94197 17.7089 9.24574 17.192 9.58086 16.8993C6.97785 16.6029 4.24138 15.598 4.24138 11.1075C4.24138 9.82802 4.69921 8.7825 5.44895 7.96179C5.32726 7.66656 4.92614 6.47462 5.56246 4.86033C5.56246 4.86033 6.54659 4.54534 8.78617 6.06165C9.72094 5.8019 10.7235 5.67175 11.7195 5.66734C12.7155 5.67175 13.7188 5.8019 14.6554 6.06165C16.8924 4.54534 17.8751 4.86033 17.8751 4.86033C18.513 6.47462 18.1117 7.66656 17.99 7.96179C18.7414 8.7825 19.1961 9.82793 19.1961 11.1075C19.1961 15.6087 16.4545 16.5999 13.8449 16.89C14.2652 17.2537 14.6397 17.9669 14.6397 19.0602C14.6397 20.6283 14.6261 21.8904 14.6261 22.2764C14.6261 22.5883 14.8371 22.9537 15.4312 22.8387C20.0852 21.2872 23.439 16.8959 23.439 11.7195C23.439 5.24692 18.1918 0 11.7195 0Z"
                  fill="white"
                />
                <path
                  d="M4.38921 16.6942C4.36347 16.7524 4.27174 16.7699 4.18838 16.73C4.10336 16.6917 4.05556 16.6123 4.08313 16.5539C4.10841 16.4939 4.20014 16.4772 4.28498 16.5175C4.37018 16.5556 4.41871 16.6358 4.38921 16.6942ZM4.9657 17.2086C4.90981 17.2604 4.80053 17.2363 4.72635 17.1544C4.64969 17.0727 4.63536 16.9635 4.69207 16.9109C4.7497 16.8591 4.85567 16.8833 4.93251 16.9651C5.00917 17.0477 5.02406 17.1563 4.9656 17.2087M5.3612 17.8667C5.28933 17.9166 5.17186 17.8698 5.09934 17.7656C5.02755 17.6614 5.02755 17.5364 5.1009 17.4863C5.1737 17.4362 5.28933 17.4813 5.36286 17.5847C5.43455 17.6907 5.43455 17.8157 5.36111 17.8668M6.02997 18.6289C5.96572 18.6997 5.82895 18.6808 5.72877 18.5841C5.62637 18.4896 5.59779 18.3555 5.66222 18.2846C5.7272 18.2136 5.8648 18.2336 5.96572 18.3295C6.06747 18.4238 6.09854 18.5589 6.03006 18.6289M6.89433 18.8863C6.86611 18.978 6.73431 19.0197 6.60158 18.9808C6.46904 18.9406 6.38228 18.8331 6.40902 18.7403C6.4366 18.6479 6.56896 18.6045 6.70269 18.6462C6.83505 18.6862 6.922 18.7929 6.89442 18.8863M7.87818 18.9954C7.88149 19.0921 7.7689 19.1722 7.62955 19.174C7.48938 19.177 7.37605 19.0988 7.37458 19.0037C7.37458 18.9061 7.4846 18.8267 7.62468 18.8244C7.76402 18.8217 7.87818 18.8993 7.87818 18.9954ZM8.84457 18.9583C8.8613 19.0526 8.76442 19.1495 8.62609 19.1753C8.49005 19.2001 8.36413 19.1419 8.34676 19.0484C8.32985 18.9517 8.42856 18.8549 8.56432 18.8298C8.70293 18.8058 8.82692 18.8625 8.84457 18.9583Z"
                  fill="white"
                />
              </svg>
              <p className="text-sm">Github Code/Repo</p>
            </div>
          </a>
          <div className="about__text max:md-text-center w-[70%] max-lg:w-[90%] max-md:mx-auto">
            <p className="max-md:text-center">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 w-full flex justify-center items-center h-auto text-justify">
        <p className="w-[90%] text-lg my-5 max-md:text-[16px]">
          <span className="w-full font-medium block text-center my-2">
            About Short :{' '}
          </span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. What is Lorem Ipsum? Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. What is Lorem Ipsum? Lorem Ipsum is simply dummy text
          of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
      </div>
    </div>
  );
};

export default About;
