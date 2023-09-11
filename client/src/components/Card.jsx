import './styles.css'

const Card = ({name,desc}) => {
  return (
    <div className='flex flex-col w-[300px] h-[200px] bg-[#FFF] p-6 card my-6'>
        <div className='bg-gray-500 rounded-[50%] w-12 h-12'/>
        <p>{name}</p>
        <p>{desc}</p>
    </div>
  )
}

export default Card