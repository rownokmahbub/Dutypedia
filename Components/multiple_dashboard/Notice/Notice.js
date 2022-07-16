import React from 'react'
import Image from 'next/image'
import calendar from '/public/Assets/icon/calendar.svg'
import printer from '/public/Assets/icon/printer.svg'
import path from '/public/Assets/icon/edit-new.svg'
import share from '/public/Assets/icon/delete.svg'
import DateInput from '@components/global/DateInput'
function Notice({goNext}) {
    const  [startDate, setStartDate] = React.useState(new Date());
  return (
  <div className='container max-w-screen-xl mx-auto mt-10'>

   <div className='relative w-full  rounded-2xl shadow-4xl md:shadow-3xl bg-white mb-4 h-auto'>
       <div className="flex justify-around items-center w-[117px] pt-10 absolute right-6 pb-20 mx-auto">
            <button className="outline-none border-none bg-transparent cursor-pointer">
            <Image  src={printer} width={23} height={23} alt='printer'/>
            </button>
            <button onClick={goNext} className="outline-none border-none bg-transparent cursor-pointer">
            <Image  src={path} width={23} height={23} alt='path'/>
            </button>
            <button className="outline-none border-none bg-transparent cursor-pointer">
            <Image  src={share} width={23} height={23} alt='share'/>
            </button>
       </div>
     
       <h3 className='mt-24 mb-2 text-[#666666] text-lg pt-24 text-center' htmlFor="">Rasel Swimming Training Center</h3>
       <div className=' mt-10 flex-shrink  w-[95%] mx-auto bg-[#CCCCCC] h-[1px]'></div>
       <div className=' mt-1 flex-shrink  w-[95%] mx-auto bg-[#CCCCCC] h-[1px] visible md:invisible'></div>
       
   <div className="flex justify-between items-center mx-auto w-[95%]">
   <div className="flex  flex-col ">
           <p className='mt-5 mb-2'>Id/record number</p>
           <p className=' mb-2  text-[#666666] text-xs ' htmlFor="">OM/102-SM701</p>
       </div>
       <div className="flex  flex-col  ">
           <p className='mt-5 mb-2 '>Date:15/08/2021</p>
           
       </div>
   </div>
       
       <div className="flex items-center  w-full mx-auto  shadow-3xl  my-5">
           <h1 className=' mb-2 ml-4 text-xl text-start text-[#313131]'>SUBJECT: ADMISSION NOTICE 2021-2022</h1>
           
       </div>
     <div className="px-6">
     <p className='mt-5 mb-2  text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque laudantium ducimus unde nostrum voluptas harum temporibus consectetur, possimus commodi provident corporis delectus! Eum praesentium in, cupiditate eligendi minima velit neque consequatur illo eveniet fuga possimus nemo nulla. Blanditiis laboriosam ipsa iusto, modi facilis ullam nemo, quos at in tempora distinctio nam perferendis, quaerat temporibus nulla nisi inventore dolorum exercitationem dolore architecto praesentium a numquam totam repellat? Eos ut, est ipsam amet minus corporis impedit, facere consequuntur ullam natus iusto, dolorem molestiae laudantium laboriosam illum ipsum doloremque neque corrupti. Ab quia, aliquam eius tempora consequatur neque unde officia dolorum maxime ipsam quas sit iste dolorem ut possimus. Consequuntur exercitationem aut, suscipit impedit doloribus tenetur dolor esse deserunt dolore voluptatibus odio. Iste voluptatem error maiores, quos deleniti ratione. Fugit nihil veritatis dicta? Corporis optio quis non accusantium quo adipisci sapiente, deleniti, veniam, ducimus possimus eveniet quas doloremque ab! Neque vel sint dolorum facere eaque enim, cumque dicta, facilis odio hic quas velit tenetur. Nulla, debitis ea quisquam saepe eveniet natus nobis perferendis ratione! Inventore facere architecto molestiae sit natus maxime quae quaerat blanditiis cumque et, vel temporibus optio, quidem eligendi? Necessitatibus minima dolores aspernatur ad nihil? Provident, veniam praesentium atque ratione doloribus sed impedit maiores repellendus labore? Ipsa laudantium quisquam adipisci illum. Dolorum, totam. Obcaecati expedita impedit tempora laborum possimus magnam! Quos repellendus illo, dolor quam aliquam suscipit, voluptatum quis, fuga cum voluptas neque laboriosam facilis! Vero eum non fugit, quo maiores maxime quaerat, rerum eligendi expedita quasi fugiat, impedit ratione! Neque esse facilis nisi est. Harum beatae fuga libero ut quas commodi molestiae minus quia, accusantium ea, dolore porro nulla nostrum deserunt sunt quod exercitationem culpa ipsa, perspiciatis vitae sint vel quae repellat! Architecto laudantium autem obcaecati quis fugiat vel sint officia modi asperiores? Fugiat earum ratione possimus ex temporibus.</p>
           <div className="flex flex-col text-end">
           <p className='mt-10 mb-1' htmlFor="">Md Rased Kamal</p>
           <p className='mb-2 text-sm text-[#666666]' htmlFor="">Director</p>
          
       </div>
      
   
  
     </div>
        

 
      
    
       
   
   
      
     
   </div>
  </div>
   
  )
}

export default Notice