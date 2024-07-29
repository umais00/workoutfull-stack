import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-zinc-600 flex justify-around items-center h-[10%] ">
      <p className="text-3xl font-bold">LOGO</p>
      <Link to="/">home</Link>
    </nav>
  );
}
