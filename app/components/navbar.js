"use client"

import Link from "next/link";
import "./styles/navbar.css";
import { useCart } from "../context/CartContext"; // ✅ Use useCart instead of direct import

export default function Navbar() {
  const { cart } = useCart(); // Get cart state

  return (
    <div>
      <div className="nav">
        <img src="/images/logo.png" alt="logo" id="logo" />
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/collaboration">Collaboration</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/cart">Cart ({cart.length})</Link> {/* ✅ Show cart count */}
      </div>
    </div>
  );
}
