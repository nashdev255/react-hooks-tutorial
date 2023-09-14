'use client';

import { useEffect } from 'react'
import Header from "../../components/Header"

const useEffectTest = () => {
  return (
    <div>
      <div className='relative'><Header /></div>
      <div className='relative'>
        <div className='mx-3 space-x-4 flex'>
          <p className='text-xl'>Counter</p>
        </div>
      </div>
    </div>
  )
}

export default useEffectTest;
