'use client';

import { useState } from 'react'
import Header from "../../components/Header"

const useStateTest = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div className='relative'><Header /></div>
      <div className='relative'>
        <div className='mx-3 space-x-4 flex'>
          <p className='text-xl'>Counter</p>
          <button onClick={() => setCount(count + 1)}>++</button>
          <p className='text-xl'>Count: {count}</p>
        </div>
      </div>
    </div>
  )
}

export default useStateTest;
