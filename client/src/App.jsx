import { useState } from 'react';
import { Element, Link } from 'react-scroll';
import { Toaster } from 'sonner';
import Logo1 from './assets/Ministry-of-AYUSH-logo-1-3.png';
import LogoBanner from './assets/SIH2023-logo-final.png';
import SRMLogo from './assets/srmlogo.jpg';
import About from './components/About';
import Footer from './components/Footer';
import FormComponent from './components/FormComponent';
import LoginModal from './components/LoginModal';
import Slider from './components/Slider';
import Team from './components/Team';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const changeModalState = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Element name="Home">
      <Toaster richColors closeButton expand />
      {isModalOpen ? <LoginModal /> : ''}
      <div>
        <header className="bg-[#F8F9FA] w-full h-20 sticky z-50 top-0">
          <nav className="flex justify-between items-center w-full mx-auto h-full px-10 py-2 max-md:px-4">
            <h1 className="font-semibold text-lg max-md:text-xs ">
              AI-Based Dermatological <br></br> Diagnosis Tool
            </h1>
            <div className="flex gap-10 justify-center items-center">
              <div className="flex gap-4 max-md:gap-2">
                <Link
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <p className="font-medium max-md:text-xs px-4 py-1 rounded-xl shadow-md bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-lime-100 ">
                    Home
                  </p>
                </Link>
                <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <p className="font-medium max-md:text-xs px-4 py-1 rounded-xl shadow-md bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-lime-100">
                    About
                  </p>
                </Link>
                <Link
                  to="Team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <p className="font-medium max-md:text-xs px-4 py-1 rounded-xl shadow-md bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-lime-100">
                    Team
                  </p>
                </Link>
              </div>
              <div className="flex gap-0 max-md:hidden">
                <a
                  target="_blank"
                  href="https://ayush.gov.in/"
                  rel="noreferrer"
                >
                  <img src={Logo1} alt="MOA" className="w-auto h-14" />
                </a>
                <a target="_blank" href="https://sih.gov.in/" rel="noreferrer">
                  <img
                    src={LogoBanner}
                    alt="logo banner"
                    className="w-auto h-14"
                  />
                </a>
              </div>
            </div>
          </nav>
        </header>
        <div className="h-10 my-4 flex justify-end items-center max-md:justify-between max-md:my-8">
          <a href="https://www.srmist.edu.in/" target="__blank">
            <div>
              <img
                className="w-36 bg-transparent h-auto max-md:hidden"
                src={SRMLogo}
                alt="srmlogo"
              />
            </div>
          </a>
          <Link to="Form" spy={true} smooth={true} offset={-40} duration={500}>
            <div className="flex gap-4 items-center w-fit mx-6 max-md:w-auto max-md:text-sm max-md:m-0 max-md:ml-4">
              <div className="bg-lime-100 hover:bg-lime-200 transition-all 0.2s ease-in-out cursor-pointer btn flex justify-center items-center px-6 py-2 text-[#000] rounded-full">
                Get Started
              </div>
            </div>
          </Link>
          <div className="flex gap-4 items-center w-fit mr-10 max-md:w-auto max-md:text-sm max-md:m-0 max-md:mr-4">
            <div
              onClick={changeModalState}
              className="bg-lime-100 hover:bg-lime-200 transition-all 0.2s ease-in-out cursor-pointer btn flex justify-center items-center px-6 py-2 text-[#000] rounded-full"
            >
              Login with Mobile Number
            </div>
          </div>
          {/* {console.log(isModelOpen)} */}
        </div>
        <Slider />
        <Element name="Form">
          <FormComponent id="Form" />
        </Element>
        <Element name="About">
          <About id="About" />
        </Element>
        <Element name="Team">
          <Team id="Team" />
        </Element>
        <Footer />
      </div>
    </Element>
  );
}
