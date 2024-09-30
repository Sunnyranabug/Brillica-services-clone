import { Link, Outlet } from "react-router-dom"



function Test() {
  return (
    <>
    <div className="w-full my-12 flex items-center flex-wrap gap-4 flex flex-wrap">
        <Link to="/testModule"><button className="border mx-8 my-4 border-indigo-800 py-1 px-4 rounded-lg text-indigo-800 font-semibold bg-white transition-colors duration-300 hover:bg-[#4c4e8a] hover:text-white ">All Tests</button> </Link>
        <Link to="CreateTest"><button className="border mx-8 my-4 border-indigo-800 py-1 px-4 rounded-lg text-indigo-800 font-semibold bg-white transition-colors duration-300 hover:bg-[#4c4e8a] hover:text-white">Create Test</button></Link>
        <Link to="TestResult"><button className="border mx-8 my-4 border-indigo-800 py-1 px-4 rounded-lg text-indigo-800 font-semibold bg-white transition-colors duration-300 hover:bg-[#4c4e8a] hover:text-white">Test Results</button></Link>
    </div>

    <Outlet></Outlet>

    

  
    </>
  )
}

export default Test
