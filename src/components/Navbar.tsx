import React from "react";
import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white px-6 py-3 shadow-lg">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div className="flex items-center gap-6">
        <a href="#home" className="hover:text-gray-300 transition">Home</a>
        <a href="#about" className="hover:text-gray-300 transition">About</a>
        <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        <Button text="Login" variant="primary" />
      </div>
    </nav>
  );
};

export default Navbar;
