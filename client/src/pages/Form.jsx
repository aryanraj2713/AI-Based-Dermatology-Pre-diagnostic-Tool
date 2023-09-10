import React from 'react';
import Logo1 from '../assets/Ministry-of-AYUSH-logo-1-3.jpg';
import LogoBanner from '../assets/SIH2023-logo-final.png';
import FormComponent from '../components/FormComponent.jsx';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }
  return (
    <div>
        <header className='bg-[#F8F9FA] w-full h-20'>
        <nav className='flex justify-between items-center w-full mx-auto h-full px-10 py-2'>
            <h1 className='font-semibold text-lg'>AI-Based Dermatological Diagnosis Tool</h1>
                <div className='flex gap-4'>
                    <p onClick={handleClick} className='font-medium px-12 py-1 text-lg rounded-xl shadow-md bg-[#c6afaff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-lime-100 '>Home</p>
                </div>
                <a className='flex gap-0'>
                    <a target="_blank" href="https://ayush.gov.in/"><img src={Logo1} alt="MOA" className='w-auto h-14 object-contain'/></a>
                    <a target="_blank" href="https://sih.gov.in/"><img src = {LogoBanner} alt="logo banner" className='w-auto h-14'/></a>
                </a>
        </nav>
    </header>
    <FormComponent/>
    </div>
  )
}

export default Form