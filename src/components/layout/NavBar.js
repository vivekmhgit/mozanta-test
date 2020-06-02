import React from "react";
import { MdPermMedia } from "react-icons/md";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <MdPermMedia color='#ec407a' size='30px' />
        <Link to='/' className='brand-logo'>
          Gallery App
        </Link>
      </div>
    </nav>
  );
};
