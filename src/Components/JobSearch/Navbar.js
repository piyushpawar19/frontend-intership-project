import React from 'react';

const Navbar = () => {
    const Items =<>
        <li><button className="btn btn-outline rounded-full border-pumpkinOrange hover:btn-pumpkinOrange">Register Now</button></li>
        <li className='font-semibold text-pumpkinOrange'><a>Login</a></li>
        <li><a>|</a></li>
        <li className='font-semibold'><a>For employers</a></li>
    </>
    return (
            <div className="navbar bg-base-100 px-16 shadow-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {Items}
      </ul>
    </div>
    <a className="btn btn-active normal-case text-xl">XcitEducation</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {Items}
    </ul>
  </div>
</div>
    );
};

export default Navbar;