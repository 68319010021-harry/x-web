import { Link } from "react-router-dom"
import { site } from "../config/site"

export default function Footer() {
  return (
    <footer className="bg-base-100 mt-16">
      <div className="container mx-auto py-8 grid md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <img src={site.logoSrc} alt={site.name} className="w-8 h-8 object-contain" />
            <div className="font-semibold">{site.name}</div>
          </div>
          <div className="text-sm text-base-content/70">{site.description}</div>
        </div>
        <div>
          <div className="font-semibold mb-2">เมนู</div>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="link link-hover">Home</Link></li>
            <li><Link to="/products" className="link link-hover">Products</Link></li>
            <li><Link to="/guide" className="link link-hover">Guide</Link></li>
            <li><Link to="/about" className="link link-hover">About</Link></li>
            <li><Link to="/contact" className="link link-hover">Contact</Link></li>
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
            <a className="link link-hover" href="/faq">FAQ</a>
            <a className="link link-hover" href="/shipping">Shipping</a>
            <a className="link link-hover" href="/returns">Returns</a>
            <a className="link link-hover" href="/warranty">Warranty</a>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">ติดต่อ</div>
          <ul className="space-y-1 text-sm">
            <li>โทร: {site.contacts.phone}</li>
            <li>อีเมล: {site.contacts.email}</li>
            <li>ไลน์: {site.contacts.line}</li>
            <li>ที่อยู่: {site.contacts.address}</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs py-6 text-base-content/60 divider-fade">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
