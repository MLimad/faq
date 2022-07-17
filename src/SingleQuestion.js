import React, { useState } from 'react'
import {FaAngleDown,FaAngleUp} from 'react-icons/fa'


function SingleQuestion({title,answ}) {

    
    const [show,setShow] =  useState(false)


  return (

   

        <article>
            <div className="question">
            <h2>{title}</h2>
            <button onClick={()=>setShow(!show)}>
                {show ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            </div>
        <div className="answer">

            {show && <p>{answ}</p>}
           
        </div>
        </article>

  
  )
}


export default SingleQuestion