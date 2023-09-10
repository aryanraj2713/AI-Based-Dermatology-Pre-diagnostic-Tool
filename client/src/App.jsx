import About from "./components/About";
// import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Logo1 from './assets/Ministry-of-AYUSH-logo-1-3.jpg';
import LogoBanner from './assets/SIH2023-logo-final.png';
import {Link,Element} from 'react-scroll';
import Team from "./components/Team";
import { useNavigate } from "react-router-dom";

export function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form");
  }
  return (
    <Element name="Home">
    <div>
       <header className='bg-[#F8F9FA] w-full h-20 sticky z-50 top-0'>
        <nav className='flex justify-between items-center w-full mx-auto h-full px-10 py-2'>
            <h1 className='font-semibold text-lg max-md:text-[16px]'>AI-Based Dermatological Diagnosis Tool</h1>
            <div className='flex gap-10 justify-center items-center'>
                <div className='flex gap-4'>
                    <Link to='Home' spy={true} smooth={true} offset={-100} duration={500}>
                        <p className='font-medium px-4 py-1 rounded-xl shadow-md bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-lime-100 '>Home</p>
                    </Link>
                    <Link to='About' spy={true} smooth={true} offset={-70} duration={500}>
                      <p className='font-medium px-4 py-1 rounded-xl shadow-md bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-lime-100'>About</p>
                    </Link>
                    <Link to='Team' spy={true} smooth={true} offset={-70} duration={500}>
                    <p className='font-medium px-4 py-1 rounded-xl shadow-md bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-lime-100'>Team</p>
                    </Link>
                </div>
                <a className='flex gap-0'>
                    <a target="_blank" href="https://ayush.gov.in/"><img src={Logo1} alt="MOA" className='w-auto h-14'/></a>
                    <a target="_blank" href="https://sih.gov.in/"><img src = {LogoBanner} alt="logo banner" className='w-auto h-14'/></a>
                </a>
            </div>
        </nav>
      </header>
      <div className='h-10 my-4 flex justify-end'>
              <div onClick={handleClick} className='flex gap-4 items-center w-fit mx-6'>
                  <div className='bg-lime-100 hover:bg-lime-200 transition-all 0.2s ease-in-out cursor-pointer btn flex justify-center items-center px-6 py-2 text-[#000] rounded-full'>Get Started</div>
              </div>
            <div className='flex gap-4 items-center w-fit mr-10'>
                <div className='bg-lime-100 hover:bg-lime-200 transition-all 0.2s ease-in-out cursor-pointer btn flex justify-center items-center px-6 py-2 text-[#000] rounded-full'>Login with Mobile Number</div>
            </div>
        </div>
      <Slider/>
      <Element name="About">
        <About id="About" />
      </Element>
      <Element name="Team">
        <Team/>
      </Element>
    </div>
    </Element>
  );
}
