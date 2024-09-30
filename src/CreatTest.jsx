

function CreatTest() {
  return (
    <>
  <div className="m-6 flex  flex-wrap min-[517px]:flex-col">
    <div className="flex w-[30rem] justify-between my-2 text-center flex-wrap"><div className="font-semibold">Test Name</div><input type="text" placeholder="Test Name" className="w-[50%] border rounded-md p-1 text-sm"/></div>
    <div className="flex w-[30rem] justify-between my-2 text-center flex-wrap"><div className="font-semibold text-sm">Test Duration (minutes)</div><input type="text" placeholder="Test Duration (minutes)" className="w-[50%] border rounded-md p-1 text-sm" /></div>
    <div className="flex w-[30rem] justify-between text-center flex-wrap"><div className="font-semibold">Select Course</div> <select name="Select Course" id="" className="w-[50%] border rounded-md p-1 text-sm font-bold">
        <option value="Javascript">Javascript</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        </select></div>
 </div>
    </>
    )
}

export default CreatTest
