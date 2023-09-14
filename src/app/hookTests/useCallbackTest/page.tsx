'use client';

import { useEffect } from 'react'
import Header from "../../components/Header"

const useEffectTest = () => {
  const [count, setCount] = useState(1000)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prevCount) => prevCount - 1)
    }, 1000)

    return clearInterval(timerId)
  })
  return (
    <div>
      <div className='relative'><Header /></div>
      <div className='relative'>
        <div className='mx-3 space-x-4 flex'>
          <p className='text-xl'>Counter</p>
          <p>{count > 0 ? <p>{count}</p> : <p>Time up!</p>}</p>
        </div>
      </div>
    </div>
  )
}

export default useEffectTest;
