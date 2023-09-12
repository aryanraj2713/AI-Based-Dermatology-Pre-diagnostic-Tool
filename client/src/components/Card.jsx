import './styles.css'

const Card = ({name,desc,Image}) => {
  return (
    <div className='flex flex-col w-[300px] h-[200px] bg-[#FFF] p-6 card my-6'>
        <div className='mx-auto'>
          <img src={Image} className='team__card rounded-[50%] mb-2 w-20 h-20 mx-auto text-center'/>
          <p className='text-center font-medium my'>{name}</p>
          <p className='text-center font-light'>{desc}</p>
        </div>
    </div>
  )
}

export default Card
