import { Link } from "react-router-dom"
import { products, formatTHB } from "../data/products"
import { useCart } from "../context/CartContext"

export default function CartPage() {
  const { lines, setQty, remove, clear,
    subtotalTHB, discountTHB, totalTHB,
    applyCoupon, removeCoupon, coupon } = useCart()

  const items = lines
    .map(l => {
      const p = products.find(p => p.id === l.productId)
      return p ? { ...p, qty: l.qty } : null
    })
    .filter(Boolean) as (typeof products[number] & { qty: number })[]

  if (items.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <div className="prose">
          <h2>ตะกร้าว่างเปล่า</h2>
          <Link to="/products" className="btn btn-primary">เลือกซื้อสินค้า</Link>
        </div>
      </div>
    )
  }

  let couponInput = ""

  return (
    <div className="container mx-auto p-6 grid lg:grid-cols-[1fr_360px] gap-6">
      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="card glass">
            <div className="card-body grid md:grid-cols-[120px_1fr_auto] gap-4 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-20 object-contain bg-base-200 rounded"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://placehold.co/160x120?text=No+Image" }}
              />
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-base-content/70">{formatTHB(item.priceTHB)} / ชิ้น</div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm">จำนวน</span>
                  <input
                    type="number"
                    className="input input-bordered input-sm w-24"
                    min={1}
                    value={item.qty}
                    onChange={e => setQty(item.id, Math.max(1, Number(e.target.value || 1)))}
                  />
                  <button className="btn btn-ghost btn-sm" onClick={() => remove(item.id)}>ลบ</button>
                </div>
              </div>
              <div className="text-right md:justify-self-end">
                <div className="font-semibold">{formatTHB(item.priceTHB * item.qty)}</div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-between">
          <button className="btn btn-ghost" onClick={clear}>ล้างตะกร้า</button>
          <Link to="/products" className="btn">เลือกสินค้าเพิ่ม</Link>
        </div>
      </div>

      <div className="card glass h-fit">
        <div className="card-body space-y-4">
          <h3 className="card-title">สรุปคำสั่งซื้อ</h3>

          <div className="form-control">
            <label className="label"><span className="label-text">คูปองส่วนลด</span></label>
            <div className="join">
              <input
                type="text"
                placeholder="ใส่โค้ด เช่น EKS10"
                defaultValue={coupon?.code ?? ""}
                onChange={(e) => { couponInput = e.target.value }}
                className="input input-bordered join-item w-full"
              />
              {coupon ? (
                <button className="btn join-item" onClick={() => removeCoupon()}>ลบคูปอง</button>
              ) : (
                <button
                  className="btn join-item"
                  onClick={() => {
                    const code = (couponInput || "").trim()
                    const res = applyCoupon(code)
                    if (!res.ok) alert(res.reason || "ใช้คูปองไม่สำเร็จ")
                  }}
                >
                  ใช้คูปอง
                </button>
              )}
            </div>
            <div className="text-xs text-base-content/60 mt-1">
              โค้ดตัวอย่าง: <code>EKS10</code> (ลด 10% ขั้นต่ำ 1,000) หรือ <code>WELCOME50</code> (ลด 50 บาท)
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatTHB(subtotalTHB)}</span></div>
            <div className="flex justify-between"><span>Discount</span><span>-{formatTHB(discountTHB)}</span></div>
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span><span>{formatTHB(totalTHB)}</span>
            </div>
          </div>

          <button className="btn btn-primary" disabled>ชำระเงิน (ตัวอย่าง)</button>
        </div>
      </div>
    </div>
  )
}
