

function ModCard({Mod}) {

  return (
    <div className=" mt-12 ml-8 ">

      <div className=" w-80 p-2 rounded-full flex  items-center bg-white border border-gray-300 "><div className=" "><i class="fa-solid fa-magnifying-glass"></i> &nbsp;<input type="text" className="border-none outline-none w-64 bg-white" placeholder="Search Here..." /></div></div>


<div className="flex flex-wrap gap-[20px]">
      
        {Mod.map((Data)=>{
            return(
                <div>           
      <div className="  rounded-2xl mt-8 w-80 leading-6  p-3 text-xs font-bold shadow-black border-b-[6px] border-blue-950 bg-white transition-transform transform hover:scale-[1.05]"> 
        <div className="flex justify-between p-2 text-base text-cyan-800"><div>{Data.name}</div> <div><i className="fa-solid fa-pen"></i></div></div>

        <div className="flex text-center">
            <div className="rounded-md border-b-4 border-green-800 bg-slate-200 py-0.5 px-4 m-2 "><div>Duration</div> <div>{Data.duration}</div></div>
            <div className="rounded-md border-b-4 border-green-800 bg-slate-200 py-0.5 px-4 m-2"><div>Total Topic</div> <div>{Data.topic}</div></div>
            <div className="rounded-md border-b-4 border-green-800 bg-slate-200 py-0.5 px-4 m-2"><div>Fees</div> <div>{Data.fees}</div></div>
        </div>
      </div>
    </div>
            )
        })}
        </div>
    </div>
    
  )
}

export default ModCard
