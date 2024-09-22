"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [list,setList] = useState([]);
  const [name, setName] = useState('');

 

  const handleAdd = () => {
    setList([...list,name]);
    console.log(list);
  }

  const handleChange =(e)=>{
  
    setName(e.target.value)
    // console.log(name);
  }
  const handleDelete = (index) => {
    const updatedItems = list.filter((_, i) => i !== index);
    setList(updatedItems); 
  };
  


  return (
   <>
   <form className="flex flex-col m-20 gap-10">
    <h1 className="text-center font-mono text-3xl">Todo-list</h1>
    
    <input type="text" className="text-black h-8 rounded-2xl px-6 text-lg " value={name} onChange={handleChange}/>
    <div className="flex justify-center">
      
      <div className="bg-yellow-500 rounded-xl  text-center font-bold w-40 cursor-pointer  h-10 flex items-center justify-center" onClick={handleAdd} >Add Task</div>
  
      
      </div>
    
   
   </form>

   <div className="bg-slate-500 h-[40vh] mr-10 ml-10 rounded-2xl overflow-scroll">
  
    {
        list.map((item,idx)=>(
          <div className="flex justify-between p-5">
            <span className="text-white text-2xl font-mono" key={idx}>{item} </span>
            <button className="bg-red-600 rounded p-2" onClick={() => handleDelete(idx)}>Delete</button>
            </div>
        ))
      }


      
   </div>
   </>
  );
}
