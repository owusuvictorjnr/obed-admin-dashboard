'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
  const router = useRouter()

  router.push('/dashboard')
  return (
    <>
      <div className="h-screen w-[15rem] bg-white shadow-lg fixed">
        <div className="">
          <h1 className="text-center mt-5 uppercase font-bold underline">
            admin dashboard
          </h1>
        </div>
        <div className="text-center">
          <div className="">
            <button
              onClick={() => router.push('/dashboard/about')}
              className=""
            >
              about
            </button>
          </div>
          <div className="">
            <button onClick={() => router.push('/dashboard')} className="">
              home
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
