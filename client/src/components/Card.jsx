import PropTypes from 'prop-types';
import './styles.css';

const Card = ({ name, desc }) => {
  return (
    <div className="flex flex-col w-[300px] h-[200px] bg-[#FFF] p-6 card my-6">
      <div className="mx-auto">
        <div className="bg-gray-500 rounded-[50%] mb-2 w-12 h-12 mx-auto text-center" />
        <p className="text-center font-medium my">{name}</p>
        <p className="text-center font-light">{desc}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Card;
