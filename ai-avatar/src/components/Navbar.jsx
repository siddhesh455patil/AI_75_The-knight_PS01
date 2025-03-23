import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">AI Avatar</h1>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
