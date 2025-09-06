import Page from "../components/Page"
const POSTCARD_1X = "/cards/shipping.webp"      // วางไฟล์ใน public/cards/
const POSTCARD_2X = "/cards/warranty-24m@2x.webp"   // (ไม่มีก็ลบ srcSet ออกได้)
const ALT_TEXT = "ขนส่ง"
export default function Shipping(){
  return (
    <Page title="Shipping Policy" subtitle="จัดส่งจันทร์–เสาร์ ยกเว้นวันหยุดนักขัตฤกษ์">
      <div className="rounded-2xl overflow-hidden border border-base-100/40 shadow-sm hover:shadow-md transition">
        <figure className="relative aspect-[3/2] bg-base-200">
          <img
            src={POSTCARD_1X}
            srcSet={`${POSTCARD_1X} 1x, ${POSTCARD_2X} 2x`}
            alt={ALT_TEXT}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
      </div>
      <article className="tile p-6 md:p-8 prose-eksgg">
        <ul>
          <li>กรุงเทพฯ/ปริมณฑล: 1–2 วันทำการ</li>
          <li>ต่างจังหวัด: 2–4 วันทำการ</li>
        </ul>
        <p>หลังจัดส่ง จะได้รับหมายเลขติดตามพัสดุ (tracking) ทุกออเดอร์</p>
      </article>
    </Page>
  )
}
