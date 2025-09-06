import { Link } from "react-router-dom"
import { ALL_CATEGORIES, CATEGORY_LABELS } from "../data/products"
import { popularBrands } from "../config/menu"

export default function MobileMenu() {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost px-3 md:hidden" aria-label="Open menu">
        {/* hamburger icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"/></svg>
      </label>

      <div tabIndex={0} className="dropdown-content mt-2 w-80 bg-base-100/95 backdrop-blur-xl rounded-2xl border border-base-300/40 shadow-2xl p-4 md:hidden">
        {/* Quick links */}
        <div className="mb-3">
          <div className="font-semibold text-sm mb-1">Quick Links</div>
          <div className="grid grid-cols-2 gap-2">
            <Link to="/" className="btn btn-ghost btn-sm justify-start">Home</Link>
            <Link to="/products" className="btn btn-ghost btn-sm justify-start">Products</Link>
            <Link to="/guide" className="btn btn-ghost btn-sm justify-start">Guide</Link>
            <Link to="/cart" className="btn btn-ghost btn-sm justify-start">Cart</Link>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-3">
          <div className="font-semibold text-sm mb-1">Categories</div>
          <div className="grid grid-cols-2 gap-2">
            {ALL_CATEGORIES.map(c => (
              <a key={c} href={`/products?category=${c}`} className="btn btn-ghost btn-sm justify-start">
                {CATEGORY_LABELS[c]}
              </a>
            ))}
          </div>
        </div>

        {/* Popular brands */}
        <div className="mb-3">
          <div className="font-semibold text-sm mb-1">Popular Brands</div>
          <div className="grid grid-cols-2 gap-2">
            {popularBrands.map(b => (
              <a key={b} href={`/products?brand=${encodeURIComponent(b)}`} className="btn btn-ghost btn-sm justify-start">{b}</a>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-2">
          <a href="/about" className="btn btn-ghost btn-sm justify-start">About</a>
          <a href="/contact" className="btn btn-ghost btn-sm justify-start">Contact</a>
          <a href="/faq" className="btn btn-ghost btn-sm justify-start">FAQ</a>
          <a href="/shipping" className="btn btn-ghost btn-sm justify-start">Shipping</a>
          <a href="/returns" className="btn btn-ghost btn-sm justify-start">Returns</a>
          <a href="/warranty" className="btn btn-ghost btn-sm justify-start">Warranty</a>
          <a href="/settings" className="btn btn-ghost btn-sm justify-start">Settings</a>
        </div>
      </div>
    </div>
  )
}
