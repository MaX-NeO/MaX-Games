import React from 'react'
import Loader from '../components/loader'

export default function Home() {
  return (
    <>
      <Loader />
      <div className='main'>
        <div className='test-high'>Hello World !</div>
      </div>
    </>
  )
}
