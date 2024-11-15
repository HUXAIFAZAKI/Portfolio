import React from "react";

function Header() {
  return (
    <nav className="flex justify-between items-center p-4 w-[100vw] pl-24 pr-24 pt-4 pb-4 border-b border-neutral-800">
      <h1 className="huxaifa text-neutral-400 text-4xl font-bold hover:text-white duration-500 select-none">
        HUXAIFA
      </h1>
      <div className="flex gap-8 text-2xl font-bold select-none">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="https://github.com/HUXAIFAZAKI">Github</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Header;
