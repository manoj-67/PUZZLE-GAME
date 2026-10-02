import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Loginn from './Loginn'
import Home1 from './Home1'
import Regiss from './Regiss'
import Game from './Game'
import Aboutus from './Aboutus'
import Help from './Help'


const Router1 = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<Regiss/>}></Route>
            <Route path='/Loginn' element={<Loginn/>}></Route>
            <Route path='/Home1' element={<Home1/>} ></Route>
            <Route path='/Game' element={<Game/>} ></Route>
            <Route path='/Aboutus' element={<Aboutus/>} ></Route>
            <Route path='/Help' element={<Help/>} ></Route>

        </Routes></BrowserRouter>
    </div>
  )
}

export default Router1