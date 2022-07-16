
import Image from "next/image";
const AddTest = () => {
  return (
    <div className="container w-[90%]  mx-auto relative ">
    <div className="flex flex-col justify-center items-center  mt-16 h-auto rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md p-10">
      <div className="w-10 md:w-28 ">
      <Image
                      src="/Assets/icon/plus.svg"
                      className="cursor-pointer "
                      width={100}
                      height={100}
                      alt="calender"
                    />
      </div>

     <p className='text-center  md:text-2xl mt-5 '>Create A Rotine</p>

     
    </div>
  </div>
  )
}

export default AddTest