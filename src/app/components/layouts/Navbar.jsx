"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";

const Navbar = () => {
const { user, logout } = useAuth();

const navLinks = (
<> <li> <Link href="/">Home</Link> </li>


  <li>
    <Link href="/items">Products</Link>
  </li>

  <li>
    <Link href="/collections">Collections</Link>
  </li>

  <li>
    <Link href="/about">About</Link>
  </li>

</>


);

return ( 
<div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4">
{/* Left Side */} <div className="navbar-start">
{/* Mobile Menu */} <div className="dropdown lg:hidden"> <label tabIndex={0} className="btn btn-ghost"> <svg
           xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor"
         > <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M4 6h16M4 12h8m-8 6h16"
           /> </svg> </label>


      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[100] w-52 rounded-box bg-base-100 p-2 shadow"
      >
        {navLinks}
      </ul>
    </div>

    {/* Logo */}
    <Link
      href="/"
      className="text-2xl font-bold text-primary"
    >
      ColorCraft
    </Link>
  </div>

  {/* Center Menu */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>

  {/* Right Side */}
  <div className="navbar-end">
    {!user ? (
      <div className="flex gap-2">
        <Link href="/login" className="btn btn-primary">
          Login
        </Link>

        <Link href="/register" className="btn btn-outline">
          Register
        </Link>
      </div>
    ) : (
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-ghost rounded-btn"
        >
          {user?.displayName || user?.email}
        </label>

        <ul
          tabIndex={0}
          className="menu dropdown-content z-[100] mt-3 w-64 rounded-box bg-base-100 p-2 shadow"
        >
          <li className="menu-title">
            <span>User Information</span>
          </li>

          <li>
            <span className="text-xs break-all">
              {user?.email}
            </span>
          </li>

          <div className="divider my-1"></div>

          <li>
            <Link href="/items/add">
              Add Product
            </Link>
          </li>

          <li>
            <Link href="/items/manage">
              Manage Products
            </Link>
          </li>

          <div className="divider my-1"></div>

          <li>
            <button onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    )}
  </div>
</div>


);
};

export default Navbar;
