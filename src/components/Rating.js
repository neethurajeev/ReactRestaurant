import React from 'react'

function Rating({data}) {
  return (
    <div className='rating'>
       {data.map((item)=>(
           <div>
               <div><span><h5>Name  : {item.name}</h5></span></div>
               <div>
                   <p>Date : {item.date}</p>
                   <p>Comments : {item.comments}</p>
                   <p>Rating : {item.rating}</p>
               </div>
           </div>

       ))}
        </div>
  )
}

export default Rating