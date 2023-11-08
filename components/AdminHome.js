'use client'

import Sidebar from '@/app/dashboard/layout'
import React from 'react'

const AdminHome = () => {
  return (
    <>
      <div className="bg-[#edf2f4] h-screen">
        <Sidebar />
        <div className="pl-[20rem] ">
          <div className="">
            <h1 className="text-center capitalize pt-5">admin home</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHome
