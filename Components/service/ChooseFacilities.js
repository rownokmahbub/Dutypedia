import { sortBy } from "@lib/utils";
import { nanoid } from "nanoid";
import { BsPlusCircle } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
const Options=[
    {
        id:1,
        title:"rownokupiec",
        value:"rownokupiec",
    },
    {
        id:2,
        title:"rskdfd kjf",
        value:"rskdfd kjf",
    },
    {
        id:3,
        title:"amir hamaxa",
        value:"amir hamaxa",
    }
];

const ChooseFacilities = () => {
    const setOptions = sortBy(Options, "title");
    const [customOptions, setCustoeOptions]= useState([]);
    // here we will add options 
    const addCustomOption=()=>{
        setCustomeOptions([
            ...customOptions,
            {
                id:nanoid(),
                title:"",
            }
        ])
    };
    // here we will remove options
    const removeCustomOption=(id)=>{
        setCustoeOptions(customOptions.filter((option)=>option.id!==id));
    };
    // here we will update options
    const updateCustomOption=(id,title)=>{
        setCustoeOptions(customOptions.map((option)=>{
            if(option.id===id){
                return{
                    ...option,
                    title,
                }
            }
            return option;
        }));
    }
  return (
    <div className="container max-w-4xl mx-auto">
      <h1>Choose your business lawyer service from here</h1>
      <div className="max-w-xl mx-auto">
        <div className="rounded-lg overflow-hidden mt-8 border shadow-md">
          <div className="bg-primary py-3 px-3">
            <div className="flex-1 text-white text-center">
              select type of law
            </div>
            <div className="flex-shrink-0 text-white px-16">select</div>
          </div>
          <div className="divide-y-2">
              {sortOptions.map((option,i)=>(
  <div key={i} className="flex py-4 px-8">
  <div className="flex-1"></div>
  <div className="flex-shrink-0 px-8">checkbox</div>
</div>
              ))}
          {customOptions.map((option,i)=>(
                <div key={i} className="flex py-4 px-8">
                <input
                  type="text"
                  placeholder="give title"
                  className="bg-transparent border-0 w-full pr-4 focus:outline-none" onChange={(e)=>{
                      updateCustomOption(option.id,e.target.value);
                  }}
                   value={option.title}
                />
                <div className="flex-shrink-0 px-8">
                  <a onClick={()=>removeCustomOption(option.id)} 
                    href=""
                    className="text-red-500 text-xl duration-200 hover:text-red-700 cursor-pointer"
                  >
                      <MdDelete />
                  </a>
                </div>
              </div>
           )) }
          
          </div>
        </div>
        <button
          onClick={() => addCustomOption("test")}
          className="btn btn-link gap-2 p-0 text-gray-500 lowercase font-normal"
        >
          <BsPlusCircle />
          add more {customOptions.length}
        </button>
        <div className="mt-4 flex justify-end">
          <button className="btn btn-primary px-16">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ChooseFacilities;
