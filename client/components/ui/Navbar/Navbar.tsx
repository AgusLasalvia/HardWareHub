"use client";

import Link from "next/link";
import "./Navbar.css";
import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Home", href: "/home" },
  { label: "Discounts", href: "/discounts" },
  { label: "Categories", href: "/categories" },
];



const Navbar = () => {

  const [isLogged, setIsLogged] = useState(null)

  return (
    <nav>
      <Link href="/" className="nav-logo">
        {/* <Image src="" width={20} height={20} alt="Company Logo" /> */}
      </Link>

      <ul>
        {links.map((link) => (
          <li key={link.href} className="nav-link">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {
        isLogged ?
          <div>
            <label>Profle</label>
          </div>
          :
          <Link href="/login">
            Login / Sing in
          </Link>
      }

    </nav>
  );
};

export default Navbar;
