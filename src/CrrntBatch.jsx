

function CrrntBatch() {

  let Batch =[
    {BName:"Frontend/Sunny/23-sep",  Date:"2023-09-23 To 2023-1231", Time:" 10:00AM- 12:00 PM"},
    {BName:"Frontend/Sunny/23-sep",  Date:"2023-09-23 To 2023-1231", Time:" 10:00AM- 12:00 PM"},
    {BName:"Frontend/Sunny/23-sep",  Date:"2023-09-23 To 2023-1231", Time:" 10:00AM- 12:00 PM"},
    {BName:"Frontend/Sunny/23-sep",  Date:"2023-09-23 To 2023-1231", Time:" 10:00AM- 12:00 PM"},
    {BName:"Frontend/Sunny/23-sep",  Date:"2023-09-23 To 2023-1231", Time:" 10:00AM- 12:00 PM"},
    {BName:"Frontend/Sunny/23-sep",  Date:"2023-09-23 To 2023-1231", Time:" 10:00AM- 12:00 PM"},
 ]
  return (
    <>

       <div className="flex  gap-12  flex-wrap">
    
    {Batch.map((Data)=>{
       
     return ( 
      
       <div className="  rounded-2xl mt-8 w-72 leading-6 p-3 text-xs font-bold shadow-md border-t-8 border-blue-950 bg-white transition-transform transform hover:scale-[1.05]">
        <div className="text-blue-950 text-sm">{Data.BName}</div>
        <div><i className="fa-solid fa-graduation-cap"></i> &nbsp; MERN  STACK</div>
        <div> <i className="fa-solid fa-user"></i>  &nbsp; sunny chauhan</div>
        <div><i className="fa-regular fa-calendar-days"></i> &nbsp; {Data.Date}</div>
        <div className="border-b border-dashed border-black"> <i className="fa-solid fa-clock"></i> &nbsp; {Data.Time}4:30 PM - 06:30 PM</div>
        <button className="text-white bg-blue-900 px-2 rounded-md outline-none mt-2 border-0">View Details</button>
      </div> 
     
      )

    })}
     </div>
    </>
  )
}

export default CrrntBatch
