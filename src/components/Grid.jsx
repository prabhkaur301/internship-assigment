import React from 'react'
import Card from './Card'
const Grid = () => {
  const n = 6
  return (
    <div className='flex flex-wrap sm:justify-start justify-center gap-4'>
        {
            Array.from({ length: n}).map((_, index)=>(
                <Card key={index}/>  
            ))
        }
        
    </div>
    
  )
}

export default Grid