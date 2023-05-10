import React from 'react'
import Sidebar from '../Components/Sidebar'

export default function Support() {
  return (
    <>
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
        <div className=""><Sidebar/></div>
        <div className="p-4">
          <div className="bg-red-300">Header</div>
          <div>Support</div>
          <div className="bg-red-200">Footer</div>
        </div>
      </div>
    </>
  )
}
