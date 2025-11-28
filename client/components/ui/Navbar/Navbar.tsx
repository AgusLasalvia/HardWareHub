"use client"
import Link from "next/link";
import "./Navbar.css";
import Image from "next/image";
import { useState } from "react";




const Navbar = () => {

  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [search, setSearch] = useState<string>("")

  return (
    <nav>

      <Link href="/"></Link>

      <div className="search-container">
        <input className="search-input"
          onChange={
            (e) => {
              setSearch(e.target.value)
            }
          }
          value={search}
          placeholder="Search"
        />
        <i className="bi bi-search"></i>
      </div>

      <div >
        {/* User Profile */}
        <Link href="/profile" className="nav-icon">
          <i></i>
        </Link>

        {/* Shopping Cart */}
        <Link href="/cart" className="nav-icon">
          <i className="bi bi-cart4"></i>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
