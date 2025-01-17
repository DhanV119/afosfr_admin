import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className='flex justify-center p-3 flex-row'>
      <h1 className="text-3xl  text-slate-900 font-bold align-baseline"> ADMIN PANEL</h1>
    </div>

    <div className=" mt-4  p-3 bg-black flex justify-center">
      <div className='m-4 p-4 bg-green-300 text-lg font-semibold cursor-pointer duration-150 hover:bg-green-400 '>
        <Link href="/foodstock">
        Food Stocks
      </Link>
        </div>
        
      <div className='m-4 p-4 bg-green-300 text-lg font-semibold cursor-pointer duration-150 hover:bg-green-400 '>
        <Link href="/liveorders">
        Live Orders
      </Link>
        </div >

      <div className='m-4 p-4 bg-green-300 text-lg font-semibold cursor-pointer duration-150 hover:bg-green-400 '>
        <Link href="/sales">
        Sales Insights
      </Link>
        </div>
    </div>
    
    </>
  )
}

export default page
