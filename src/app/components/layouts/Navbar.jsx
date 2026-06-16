import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md">
  <div className="navbar-start">
    <a className="text-2xl font-bold text-primary">
      ColorCraft
    </a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Products</a></li>
      <li><a>Collections</a></li>
      <li><a>About</a></li>
    </ul>
  </div>

  <div className="navbar-end">
    <button className="btn btn-primary">
      Login
    </button>
  </div>
</div>
  )
}

export default Navbar