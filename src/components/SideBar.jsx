import React from 'react'
import data from '../assets/data'
import SideCard from './SideCard'

const Sidebar = () => {
  console.log(data)
  return (
    <div className='sidebar flex flex-col gap-4 ml-4'>
      {data.map((item, index) => (
        <SideCard 
        key={index}
        heading={item.heading}
        items={item.items}/>

      ))}
    </div>
  )
}

export default Sidebar