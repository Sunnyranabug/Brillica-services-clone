import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MoCardMap from './MoCardMap' 
import Test from './Test'
import Resources from './Resources'
import Hmbrgr from './hmbrgr'
import AllTest from './AllTest'
import CreatTest from './CreatTest'
import TestResult from './TestResult'
import Card from './Card'
 

function MainSectn() {
  return (
<>
    <div className="flex bg-gray-100 w-[100% ] ">
<Hmbrgr></Hmbrgr> 
    <div className='bg-gray-100 w-[100%]'>

        <Routes>
   <Route path='module' element={<MoCardMap/>}></Route>
   <Route path='/' element={<Card/>}></Route>
   <Route path= "testModule" element={<Test/>}>
   <Route index element={<AllTest></AllTest>}></Route>
   <Route path="CreateTest" element={<CreatTest></CreatTest>}></Route>
   <Route path="TestResult" element={<TestResult></TestResult>}></Route>
   </Route>
   
   <Route path= "resources" element={<Resources/>}></Route>


        </Routes>
        
      
    </div>
    </div>
    </>
  )
}

export default MainSectn
