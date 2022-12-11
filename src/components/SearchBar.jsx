import { useState } from "react";
import { FiSearch } from 'react-icons/fi'

const Searchbar = () => {
  const [searchTerm, setSearchTerm]= useState("");

  const handleSubmit= (e)=>{
    e.preventDefault(); //prevent reloading of page on form submission
  }
  return (
    <form 
    onSubmit={handleSubmit}
    className="text-gray-500">
      <div className="flex flex-row justify-start items-center bg-transparent border-2 border-black w-1/2 my-4 mx-4 rounded-lg ">
        <FiSearch className="w-6 h-6 ml-4" />
        <input
          name="search-field"
          id="search-field"
          value={searchTerm}
          placeholder="Search"
          type="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-300" />

        <button type="submit" className="bg-[#00a69a] text-white rounded-md py-2 px-4">Search</button>

      </div>
    </form>
  )
};

export default Searchbar;