import Page from "../components/Page"
const POSTCARD_1X = "/cards/guide.webp"      // วางไฟล์ใน public/cards/
const POSTCARD_2X = "/cards/guide1.webp"   // (ไม่มีก็ลบ srcSet ออกได้)
const ALT_TEXT = "ไกด์"
export default function Guide(){
  return (
    <Page title="Gear Guide" subtitle="เลือกอุปกรณ์ให้เหมาะกับมือและสไตล์การเล่นของคุณ">
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
        <h2>เมาส์: รูปทรง/น้ำหนัก/ผิวสัมผัส</h2>
        <p>เริ่มจากขนาดมือและวิธีจับ (Claw, Palm, Fingertip)…</p>

        <div className="alert alert-info">
          <span>Tip: ถ้าจับ Fingertip ให้ลองน้ำหนักเบา &lt; 60g</span>
        </div>

        <h2>คีย์บอร์ด: ขนาด/สวิตช์/โครง</h2>
        <p>เลือกขนาด 60%/TKL/Full ตามพื้นที่โต๊ะและการใช้งาน…</p>

        <h3>แผ่นรองเมาส์</h3>
        <ul>
          <li>Speed: ลื่น เร็ว เหมาะกับ FPS ที่ใช้ flick</li>
          <li>Control: หนืด คุมง่าย เหมาะกับ tracking</li>
        </ul>
      </article>
    </Page>
  )
}
