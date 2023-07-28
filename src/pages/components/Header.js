import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"

import { navbar } from "../../data/data"


export default function Header() {

  return (
    <>
      <header className="p-5 flex items-center justify-between xl:max-w-7xl lg:mx-auto 2xl:px-0">
        <div>
          <h2 className=" font-bold text-4xl text-gray-800">
            <Link to="/">BillEase</Link>
          </h2>
        </div>
        <div>
       
              <Link to={'/Newpages'}>
                   <button className=" bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
                    Contact Developer
              </button>
              </Link>
        </div>
      </header>
    </>
  )
}
