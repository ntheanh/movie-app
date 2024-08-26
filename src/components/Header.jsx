import React from "react"

const Header = () => {
  return (
    <div className="p-4 bg-black flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl text-red-500 uppercase font-bold">Movie</h1>
        <nav className="space-x-4">
          <a className="text-white" href="">
            Home
          </a>
          <a className="text-white" href="">
            About
          </a>
          <a className="text-white" href="">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-lg border-none outline-none "
        />
        <button className="text-white bg-red-500 p-2 rounded-lg">Search</button>
      </div>
    </div>
  )
}

export default Header
