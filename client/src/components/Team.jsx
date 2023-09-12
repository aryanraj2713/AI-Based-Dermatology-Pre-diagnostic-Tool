import Card from './Card';
import './styles.css';

const Team = () => {
  return (
    <>
      <div className="team__header w-full flex justify-center items-center h-[100px] mt-32">
        <h1 class="team-title px-16 text-xl py-1 bg-white shadow-md rounded-full">
          <span>Team</span>
        </h1>
      </div>
      <div className="w-[100%]">
        <div className="mx-auto w-[70%] flex flex-row flex-wrap gap-10 my-6 justify-center items-center">
          <Card name="Aryan" desc="AI/ML Dev" />
          <Card name="Mathangy" desc="AI/ML Dev" />
          <Card name="Jatin" desc="Full Stack Dev" />
          <Card name="Ravikul" desc="Full Stack Dev" />
          <Card name="Aakash" desc="Full Stack Dev" />
          <Card name="Subbu" desc="Junior Dev" />
        </div>
      </div>
    </>
  );
};

export default Team;
