import { Link } from "react-router-dom"
import { site } from "../config/site"
import { products, formatTHB } from "../data/products"

const categories = [
  { key: "mouse", label: "Mouse", grad: "tile-grad-1" },
  { key: "keyboard", label: "Keyboards", grad: "tile-grad-2" },
  { key: "mousepad", label: "Mousepads", grad: "tile-grad-3" },
  { key: "headset", label: "Headsets", grad: "tile-grad-2" },
  { key: "iem", label: "IEMs", grad: "tile-grad-1" },
  { key: "accessory", label: "Accessories", grad: "tile-grad-4" },
]

export default function Home() {
  const latest = [...products].slice(0, 6)
  const best = [...products].reverse().slice(0, 6)

  return (
    <div>
      {/* HERO */}
      <section className="section py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <img src={site.logoSrc} alt={site.name} className="mx-auto w-24 h-24 object-contain mb-6 rounded-xl" />
          <h1 className="section-title text-gradient">{site.name}</h1>
          <p className="mt-3 text-lg text-base-content/80">{site.slogan}</p>
          <p className="mt-2 section-desc">{site.description}</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/products" className="btn btn-primary btn-lg rounded-xl">Shop Now</Link>
            <Link to="/guide" className="btn btn-outline btn-lg rounded-xl">Gear Guide</Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <div className="flex items-end justify-between mb-5">
          <h2 className="section-title">Browse by Category</h2>
          <Link to="/products" className="btn btn-sm btn-outline rounded-xl">View all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(c => (
            <Link key={c.key} to={`/products?category=${c.key}`} className={`tile ${c.grad} p-6 flex items-center justify-between`}>
              <div>
                <div className="text-xl font-bold mb-1">{c.label}</div>
                <div className="text-sm text-base-content/70">Explore {c.label}</div>
              </div>
              <span className="btn btn-sm btn-primary rounded-full">Shop</span>
            </Link>
          ))}
        </div>
      </section>

      {/* LATEST */}
      <section className="section mt-12">
        <div className="flex items-end justify-between mb-5">
          <h2 className="section-title">Latest Drops</h2>
          <Link to="/products?sort=newest" className="link link-hover">See all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {latest.map(p => (
            <Link key={p.id} to={`/products/${p.slug}`} className="tile card-hover">
              <figure className="aspect-[4/3] bg-base-300/30">
                <img src={p.image} alt={p.name} className="object-contain w-full h-full" />
              </figure>
              <div className="p-4">
                <div className="text-sm text-base-content/60">{p.brand}</div>
                <div className="font-semibold line-clamp-1">{p.name}</div>
                <div className="font-bold mt-1">{formatTHB(p.priceTHB)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BEST SELLERS (sample) */}
      <section className="section mt-12">
        <div className="flex items-end justify-between mb-5">
          <h2 className="section-title">Top Picks</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {best.map(p => (
            <Link key={p.id} to={`/products/${p.slug}`} className="tile card-hover">
              <figure className="aspect-[4/3] bg-base-300/30">
                <img src={p.image} alt={p.name} className="object-contain w-full h-full" />
              </figure>
              <div className="p-4">
                <div className="text-sm text-base-content/60">{p.brand}</div>
                <div className="font-semibold line-clamp-1">{p.name}</div>
                <div className="font-bold mt-1">{formatTHB(p.priceTHB)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
