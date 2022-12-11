import React, { useState } from "react"
import Grid from "./components/Grid"
import Navbar from "./components/Navbar"
import Searchbar from "./components/SearchBar"
import Sidebar from "./components/SideBar"
import { GrFormNext } from 'react-icons/gr'
import { RxCross2 } from 'react-icons/rx'

const App=()=>{
  
  return (
    <div>
      <Navbar/>
      <div className="flex flex-row items-center my-2 mx-4">Medical Darpan <GrFormNext/> Search <GrFormNext/> <span className="font-bold">Fabiflu Tablet</span></div>
      <Searchbar/>
      <div className="my-4 mx-4 flex  items-center gap-2">
        <span className="font-bold">Paracetamol</span> (128 Products) 
       <span className="bg-[#00a69a] rounded-lg text-white py-2 px-4">Acclofenac</span>
        <span className="font-bold text-[#6b0a0a] flex items-center ml-6" >Remove All <RxCross2/></span>
        </div>
      <div className="w-full flex flex-row justify-around gap-6">
        <Sidebar/>
        <Grid/>

      </div>
      
    </div>
  )
}

export default App
