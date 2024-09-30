import { Link } from "react-router-dom";
import { useState } from "react"


function Hmbrgr() {
  let [Clrchng, setClrchng]=useState(2);
  function LoaderA(a){
    let Clrchng=a;
    setClrchng(Clrchng);
  }

  return (
    <>
    <div className="border h-screen w-[13%]  font-black bg-white m-2 border-r-8  hidden min-[840px]:block">

        <Link to="module"><div onClick={()=> LoaderA(1)} className={`pl-6 py-3 hover:text-white hover:bg-cyan-950 hover:border-black mt-3 rounded-md ${Clrchng===1 ? "Active" : ""}`}><i className="fa-solid fa-circle-nodes"></i> Module</div></Link>

        <Link to="/"><div onClick={()=> LoaderA(2)} className={`pl-6 py-3 hover:text-white hover:bg-cyan-950  hover:border-black mt-3 rounded-md ${Clrchng===2 ? "Active" : ""}`}> <i className="fa-solid fa-image-portrait"></i> Batch</div></Link>

        <Link to="testModule"> <div onClick={()=> LoaderA(3)}  className={`pl-6 py-3 hover:text-white hover:bg-cyan-950  hover:border-black mt-3 rounded-md ${Clrchng===3 ? "Active" : ""}`}> <i className="fa-solid fa-square-pen"></i> Test Module</div></Link>

        <Link to="resources"><div onClick={()=> LoaderA(4)} className={`pl-6 py-3 hover:text-white hover:bg-cyan-950  hover:border-black mt-3 rounded-md ${Clrchng===4 ? "Active" : ""}`}> <i className="fa-solid fa-book"></i> Resource</div></Link>
      </div>

      <div className="w-full h-max flex fixed border z-10 bg-white text-4xl justify-evenly bottom-0 hidden max-[839px]:flex">
      <Link to="module"><div><i className="fa-solid fa-circle-nodes"></i></div></Link>
      <Link to="/"><div><i className="fa-solid fa-image-portrait"></i></div></Link>
      <Link to="testModule"> <div><i className="fa-solid fa-square-pen"></i></div></Link>
      <Link to="resources"> <div><i className="fa-solid fa-book"></i></div></Link>
      </div>
      </>
      
  )
};

export default Hmbrgr;
