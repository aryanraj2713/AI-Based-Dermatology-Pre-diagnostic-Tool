import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';


import PptImage1 from '../assets/Heisenberg-SIH2023.pptx_page-0001.jpg'
import PptImage2 from '../assets/Heisenberg-SIH2023.pptx_page-0002.jpg'
import PptImage3 from '../assets/Heisenberg-SIH2023.pptx_page-0003.jpg'
import PptImage4 from '../assets/Heisenberg-SIH2023.pptx_page-0004.jpg'

const Slider = () => {
  return (
    <>
      <Swiper 
        navigation={true} 
        slidesPerView={1}
        modules={[Navigation]} 
        className="mySwiper my-8"
      >
        <SwiperSlide>
            <img src={PptImage1} alt="PPT-Image-1" className='w-full h-[80%] '/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={PptImage2} alt="PPT-Image-2" className='w-full h-[80%]'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={PptImage3} alt="PPT-Image-3" className='w-full h-[80%]'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={PptImage4} alt="PPT-Image-4" className='w-full h-[80%]'/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider