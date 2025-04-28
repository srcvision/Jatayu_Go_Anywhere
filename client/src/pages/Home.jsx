import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="h-screen flex pt-8 justify-between flex-col w-full bg-red-400">
            <h1 className='font-bold text-5xl ml-8'>Jatayu</h1>
            <div className="bg-white py-5 px-7">
                <h2 className='font-bold text-2xl'>Get Started With Jatayu</h2>
                <button className='font-bold text-white px-21 py-2 bg-black mt-2'>Continue</button>
            </div>

        </div>
    </div>
  )
}

export default Home