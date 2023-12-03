"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import { FaTrash } from "react-icons/fa6";
import { Deletetask } from '../apis';

function Removetask({id}) {
   const router = useRouter()
   function removeTask(){
    Deletetask(id)
    router.refresh()
   }

  return (
    
        <FaTrash cursor="pointer" className='text-danger' onClick={removeTask}/>
    
  )
}

export default Removetask