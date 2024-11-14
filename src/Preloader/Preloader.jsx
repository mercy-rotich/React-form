import React from 'react'
import "./Preloader.css";

const Preloader  = () => {
  return (
    <div className='preloader h-[100vh] w-full fixed bg-blue-400 flex items-center justify-center'>
        <div className='flex'>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        </div>
        <p className='mt-[1.5rem] text-3xl font-semibold'>LOADING...</p>
    </div>
  )
}

export default Preloader;