import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#ffffff] fixed w-full z-10  py-4 border-b-[1px] border-[#D9D9D9]">
      <div className="container ml-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + '/campfly-logo-black.png'}
            alt="CampFly Logo"
            className="h-8 w-auto"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;