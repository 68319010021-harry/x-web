import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { findProduct, formatTHB } from "../data/products"
import { warrantyLabel, DEFAULT_WARRANTY_MONTHS } from "../data/products"
import { useCart } from "../context/CartContext"

export default function ProductDetail() {
  const { idOrSlug } = useParams()
  const navigate = useNavigate()
  const { add } = useCart()
  const product = findProduct(idOrSlug)

  const [currentImage, setCurrentImage] = useState<string | undefined>(product?.image)
  useEffect(() => setCurrentImage(product?.image), [product?.image])

  if (!product) {
    return (
      <div className="container mx-auto p-6">
        <div className="prose">
          <h2>ไม่พบสินค้า</h2>
          <Link to="/products" className="btn">กลับไปหน้า Products</Link>
        </div>
      </div>
    )
  }

  const fallback = (e: React.SyntheticEvent<HTMLImageElement>) => {
    (e.currentTarget as HTMLImageElement).src = "https://placehold.co/800x600?text=No+Image"
  }

  const handleAdd = () => add(product.id, 1)
  const handleBuyNow = () => { add(product.id, 1); navigate("/cart") }

  const thumbs = product.images ?? []

  return (
    <div className="container mx-auto p-6">
      {/* 2 คอลัมน์: ซ้าย = รูป (sticky บนจอใหญ่), ขวา = ข้อความเลื่อนอิสระ */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* LEFT: รูปหลัก + thumbnails ใต้รูป (sticky เฉพาะ lg+) */}
        <div className="self-start lg:sticky lg:top-24 space-y-3">
          {/* กรอบรูปหลัก (ล็อกอยู่กับที่) */}
          <div className="rounded-2xl overflow-hidden border border-base-300/40 bg-base-200">
            <div className="relative aspect-[4/3]">
              <img
                src={currentImage || product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-contain block"
                onError={fallback}
              />
            </div>
          </div>

          {/* แถวรูปย่อย อยู่ใต้รูปหลัก */}
          {thumbs.length > 0 && (
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
              {thumbs.map((src) => {
                const active = (currentImage || product.image) === src
                return (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setCurrentImage(src)}
                    className={
                      "rounded-xl overflow-hidden border aspect-square transition " +
                      (active
                        ? "border-primary ring-2 ring-primary/40"
                        : "border-base-300/40 hover:ring-1 hover:ring-base-300")
                    }
                    aria-pressed={active}
                  >
                    <img
                      src={src}
                      alt={`${product.name} thumbnail`}
                      className="object-contain w-full h-full block"
                      onError={fallback}
                    />
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* RIGHT: ข้อความ/รายละเอียด เลื่อนยาวได้อิสระ */}
        <div>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <div className="text-base-content/70 mb-1">
            {product.brand} • {product.category.toUpperCase()}
          </div>
          <div className="text-2xl font-extrabold mb-4">{formatTHB(product.priceTHB)}</div>

         <p className="mb-4 whitespace-pre-line">{product.description}</p>

          {product.specs?.length > 0 && (
            <div className="mb-4">
              <h3 className="font-bold mb-2 text-decoration-line: underline decoration-pink-500">ข้อมูลพื้นฐานของผลิดภัณท์</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {product.specs.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          )}
        <div className="mt-3">
  <div className="rounded-xl border border-base-300/40 bg-base-100/70 p-3 flex items-start gap-3">
    <div className="mask mask-squircle bg-primary/10 text-primary w-8 h-8 flex items-center justify-center">
      {/* รูปไอคอนง่ายๆ (emoji) หรือจะใช้ไอคอนจริงก็ได้ */}
      <span className="text-lg">🛡️</span>
    </div>
    <div className="text-sm leading-6">
      <div className="font-semibold">การรับประกัน</div>
      <div className="text-base-content/80">
        {/* ถ้าสินค้ามี warrantyText ใช้ข้อความนั้นก่อน, ไม่งั้นใช้เดือน */}
        {product.warrantyText
          ? product.warrantyText
          : `รับประกันศูนย์ไทย ${warrantyLabel(product.warrantyMonths)}`}
        {" · "}
        <Link to="/warranty" className="link link-primary">ดูรายละเอียดการเคลม</Link>
      </div>
    </div>
  </div>
</div>
          <div className="flex flex-wrap gap-2">
            <button className="btn" onClick={handleAdd}>Add to Cart</button>
            <button className="btn btn-primary" onClick={handleBuyNow}>Buy Now</button>
            <Link to="/products" className="btn btn-ghost">ดูสินค้าอื่น</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
