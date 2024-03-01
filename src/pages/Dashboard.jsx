import React from 'react'
import { FaAlignJustify } from "react-icons/fa6";
import ImgBody from './../assets/imagenSliderEjemplo.jpg'

export const Dashboard = () => {
  return (
    <div>
        <div className="bg-[#39A900] w-full h-16 flex items-center">
            <FaAlignJustify size={30} className="ml-3 cursor-pointer" />
            <h2 className="text-white text-2xl font-bold ml-auto mr-10">
                Bienvenido user
            </h2>
            <FaAlignJustify size={30} className="flex mr-3 cursor-pointer"/>
        </div>
        <div className='w-full h-full fixed'>
            <img src={ImgBody} alt="" />
        </div>
    </div>
  )
}
