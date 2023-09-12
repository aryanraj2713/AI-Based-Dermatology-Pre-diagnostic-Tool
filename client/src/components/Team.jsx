import Card from './Card';
import './styles.css';
import Image1 from '../assets/JatinImg.jpg';
import Image2 from '../assets/AryanImg.jpg';
import Image3 from '../assets/MathangyImg.jpg';
import Image4 from '../assets/RavikulImg.jpg';
import Image5 from '../assets/AakashImg.png';
import Image6 from '../assets/SubbuImg.jpg';

const Team = () => {
  return (
    <>
      <div className="team__header w-full flex justify-center items-center h-[100px] mt-32">
        <h1 class="team-title px-16 text-xl py-1 bg-white shadow-md rounded-full">
          <span>Team</span>
        </h1>
      </div>
      <div className="w-[100%]">
        <div className="mx-auto w-[80%] max-xl:w-[90%] max-lg:w-[90%] flex flex-row flex-wrap gap-10 my-6 justify-center items-center">
          <Card Image={Image2} name="Aryan" desc="AI/ML Developer" />
          <Card Image={Image3} name="Mathangy" desc="AI/ML Developer" />
          <Card Image={Image1} name="Jatin" desc="Full Stack Developer" />
          <Card Image={Image4} name="Ravikul" desc="Full Stack Developer" />
          <Card Image={Image5} name="Aakash" desc="Full Stack Developer" />
          <Card Image={Image6} name="Subramanian" desc="Frontend Developer" />
        </div>
      </div>
    </>
  );
};

export default Team;
