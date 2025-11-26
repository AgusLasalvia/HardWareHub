import Link from "next/link"
import "./Navbar.css"
import Image from "next/image"

const links = [
  { label: "Home", href: "/home" },
  { label: "Discounts", href: "/discounts" },
  { label: "Categories", href: "/categories" },
]


const Navbar = () => {
  return (
    <nav>
      <Link href="/home">
        <Image src="/" alt="Company Logo" />
      </Link>
    </nav>
  )
}
