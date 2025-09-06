import Page from "../components/Page"

export default function About(){
  return (
    <Page title="About" subtitle="ร้านเกมมิ่งเกียร์ของแท้ ส่งไว บริการด้วยใจ">
      <article className="tile p-6 md:p-8 prose-eksgg">
        <h2>เราเป็นใคร</h2>
        <p>Eks GG Shop คัดของแท้คุณภาพ พร้อมให้คำปรึกษาการเลือกเมาส์/คีย์บอร์ด/แผ่นรอง/หูฟังตามสไตล์การเล่นของคุณ</p>

        <h2>ทำไมลูกค้าถึงเลือกเรา</h2>
        <ul>
          <li>สต็อกจริง อัปเดตตลอด</li>
          <li>ส่งไวทั่วประเทศ พร้อมเลขติดตาม</li>
          <li>รับประกันศูนย์ไทย และทีมงานช่วยเคลม</li>
        </ul>

        <h3>ช่องทางติดต่อ</h3>
        <p>อีเมล <a href="mailto:support@example.com">support@example.com</a> · Line/FB/IG (เพิ่มได้ตามจริง)</p>
      </article>
    </Page>
  )
}
