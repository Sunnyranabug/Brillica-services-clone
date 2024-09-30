import { useState } from "react"
import CrrntBatch from "./CrrntBatch";
import UpcmBatch from "./UpcmBatch";
import CompBatch from "./CompBatch";
import './App.css'

function Card() {
  let [component, setComponent]= useState(1);
   let [Clrchng, setClrchng]=useState(1);
  function Loader(a){
    let comp = a;
    let Clrchng=a;
    setComponent(comp)
    setClrchng(Clrchng);
  }
  
  return (
    <> 
    <div className="mt-12 ml-8">
    <div className=" w-80 p-2 rounded-full flex bg-white items-center"><div className="w-64 "><input type="text" className="border-none outline-none" placeholder="Search Here..." /></div><i class="fa-solid fa-magnifying-glass"></i></div>

    
    <div className="w-full mt-12  mb-12 flex items-center flex-wrap gap-4">
        <div onClick={()=> Loader(1)} className={` ${Clrchng===1 ? "Active" : ""} bg-slate-50 px-4 py-0.5 border-2 border-[#4c4e8a] transition-colors duration-300 hover:bg-[#083344] hover:text-white cursor-pointer rounded-lg font-semibold`}>
          <i className="fa-regular fa-calendar mr-2"></i>Current
        </div>
        
        <div onClick={()=> Loader(2)} className={` ${Clrchng===2 ? "Active" : ""} bg-slate-50 px-4 py-0.5 border-2 border-[#4c4e8a] transition-colors duration-300 hover:bg-[#083344] hover:text-white hover:border-[#4c4e8a] cursor-pointer rounded-lg font-semibold`}>
          <i className="fa-regular fa-calendar-plus mr-2"></i>Upcomming
        </div>

        <div onClick={()=> Loader(3)} className={` ${Clrchng===3 ? "Active" : ""} bg-slate-50 px-4 py-0.5 border-2 border-[#4c4e8a] transition-colors duration-300 hover:bg-[#083344] hover:text-white hover:border-[#4c4e8a] cursor-pointer rounded-lg font-semibold`}>
          <i className="fa-regular fa-calendar-check mr-2"></i>
          Compleated
        </div>
       </div>
      </div>
        <span>
           {component === 1 && <CrrntBatch/>}
           {component === 2 && <UpcmBatch/>}
           {component === 3 && <CompBatch/>}
        </span>

    
    
    </>

   
  )
    
   
  
}

export default Card
