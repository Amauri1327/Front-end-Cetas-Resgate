import React from 'react'
import { MdOutlineAddBox } from "react-icons/md"

export const Menu = () => {
  return (
    <div className='flex justify-center items-center mt-5'>
        <div className='text-center flex justify-center items-center gap-10 bg-red-200 h-16 max-w-2xl'>
            <div className='bg-blue-100'>cadastrar</div>
            <div className='bg-green-50'>Relatorio</div>
        </div>
    </div>
  )
}

export default Menu;