export type Category = "mouse" | "keyboard" | "mousepad" | "headset" | "iem" | "accessory" | "monitor"

export const CATEGORY_LABELS: Record<Category, string> = {
  mouse: "เมาส์",
  keyboard: "คีย์บอร์ด",
  mousepad: "แผ่นรองเมาส์",
  headset: "หูฟังเกมมิ่ง",
  iem: "IEM",
  accessory: "อุปกรณ์เสริม",
  monitor: "จอ"
}

export type Product = {
  id: number
  slug: string
  name: string
  brand: string
  category: Category
  priceTHB: number
  description: string
  specs: string[]
  image: string
  images?: string[]
  inStock: boolean
  tags?: string[]

  warrantyMonths?: number
  warrantyText?: string  
}
export const DEFAULT_WARRANTY_MONTHS = 2
export const warrantyLabel = (m?: number) =>
  m ? `${m} ปี` : `${DEFAULT_WARRANTY_MONTHS} ปี`
export const products: Product[] = [
  {
    id: 1,
    slug: "logitech-g-pro-x-superlight-2",
    name: "Logitech G PRO X Superlight 2",
    brand: "Logitech G",
    category: "mouse",
    priceTHB: 6190,
    description: "เมาส์ไร้สายน้ำหนักเบามาก เกรดอีสปอร์ต เซ็นเซอร์ HERO 2",
    specs: ["~60g", "HERO 2 32K", "Lightspeed Wireless", "PTFE feet"],
    image: "/products/logitech-g-pro-x-superlight-2_1.png",
    images: ["/products/logitech-g-pro-x-superlight-2_1.png"],
    inStock: true,
    tags: ["esports", "lightweight"]
  },
  {
    id: 2,
    slug: "razer-viper-v3-pro",
    name: "Razer Viper V3 Pro",
    brand: "Razer",
    category: "mouse",
    priceTHB: 6990,
    description: "ดีไซน์สมดุล จับถนัด น้ำหนักเบา ไร้สาย HyperPolling 8K (ออปชัน)",
    specs: ["~54g", "Focus Pro 30K", "HyperSpeed Wireless", "PTFE feet"],
    image: "/products/Razer Viper V3 Pro.png",
    images: ["/products/Razer Viper V3 Pro1.png","/products/Razer Viper V3 Pro.png"],
    inStock: true,
    tags: ["esports", "tournament"]
  },
  {
    id: 3,
    slug: "Hitscan Hyperlight",
    name: "Hitscan Hyperlight",
    brand: "Hitscan",
    category: "mouse",
    priceTHB: 3790,
    description: "เมาส์ HITSCAN Hyperlight เป็นรุ่นแรกและรุ่นล่าสุดของแบรนด์ HITSCAN จากสหรัฐอเมริกา เคยถูกพูดถึงใน Reddit (r/MouseReview) เมื่อ 6 เดือนก่อน และได้รับความสนใจจากผู้ใช้ทั่วโลก แบรนด์นี้เน้นการพัฒนาด้วยความใส่ใจ ตั้งแต่กล่องบรรจุภัณฑ์จนถึงตัวเมาส์ ทุกดีไซน์ถูกคิดมาอย่างพิถีพิถัน ในสไตล์ของคนรักเมาส์ที่ได้ออกแบบเอง เพื่อให้ผู้ใช้ทุกคนสัมผัสได้ถึงคุณภาพและความพิเศษของ HITSCAN",
    specs: ["Weight only 39 ", "PAW3395 sensor (50-26000 DPI)", "Wireless and wired connectivity", "Maximum Polling Rate 8000 Hz requires 8K Dongle (2000 / 4000 / 8000 Hz) 1000 Hz (for the dongle included with the mouse)","Pure Virgin Grade PTFE mouse feet available in 2 types (4-corner and 2-piece long)","USB-C charging connection port","Battery lasts up to 80 hours","Mouse can be customized and set up via HITSCAN Utility."],
    image: "/products/Hitscan Hyperlight.png",
    images: ["/products/Hitscan Hyperlight.png","/products/Hitscan Hyperlight1.png"],
    inStock: true
  },
  {
    id: 4,
    slug: "Ninjutso Sora V2",
    name: "Ninjutso Sora V2",
    brand: "Ninjutso ",
    category: "mouse",
    priceTHB: 4590,
    description: "Ninjutso Sora V2 เมาส์รุ่นใหม่ล่าสุดที่พัฒนาต่อยอดจาก Sora 4K ทำให้น้ำหนักเบาลงเหลือเพียง 39 กรัม และปรับทรงเพื่อการจับที่คล่องตัวขึ้น รองรับ Polling Rate สูงสุด 8000 Hz (ต้องซื้อ 8K Dongle แยกต่างหาก)เมาส์รุ่นนี้ถูกใช้โดย TenZ โปรเพลเยอร์ทีม Sentinels ในการแข่งขัน VCT 2024: Masters Madrid และคว้าแชมป์ จนได้รับความนิยมสูงเกินกว่ายอดผลิต ทำให้สินค้าขาดตลาดอยู่ช่วงหนึ่ง",
    specs: ["Weight only 39 grams", "PAW3395 sensor (50-26000 DPI)", "Wireless and wired connection, no delay in use", "Pure Virgin Grade PTFE mouse feet available in 2 types (4-corner and 2-piece long)"],
    image: "/products/Ninja Sora V2.png",
    images: ["/products/Ninja Sora V2.png","/products/Ninja Sora V21.png"],
    inStock: true
  },
  {
    id: 5,
    slug: "Ying 75HE",
    name: "Ying 75HE",
    brand: "WLmouse",
    category: "keyboard",
    priceTHB: 8490,
    description: "คีย์บอร์ด Forged Carbon ตัวแรกของโลก ผลิตด้วยกระบวนการเฉพาะที่ผ่านการทดสอบนับพันครั้ง แข็งแรงระดับอากาศยานและทนทานยาวนาน\nวัสดุพรีเมียม – ผิวสัมผัสเรียบ ละมุน มีลวดลายธรรมชาติที่เปลี่ยนแสงได้ เหมือนงานศิลป์\nPCB Nano-Hydrophobic Coating – กันน้ำ กันความชื้น ป้องกันการออกซิเดชัน ยืดอายุการใช้งาน\nRT 0.005mm – ความแม่นยำสูงสุด เหนือกว่ามาตรฐาน 0.01mm ให้ประสิทธิภาพสูงสุด",
    specs: ["Optical Switch Adjustable", "Aluminum Top", "TKL", "Rapid Trigger"],
    image: "/products/Ying 75HE.png",
    images: ["/products/Ying 75HE.png","/products/Ying 75HE1.png"],
    inStock: true
  },
  {
    id: 6,
    slug: "MonsGeek FUN60 Ultra TMR 61",
    name: "MonsGeek FUN60 Ultra TMR 61",
    brand: "MonsGeek",
    category: "keyboard",
    priceTHB: 2890,
    description: "OmniPoint 2.0 ปรับระยะกดได้ รายละเอียดงานเนี๊ยบ",
    specs: ["OmniPoint 2.0", "TKL", "Per-key", "Rapid Trigger"],
    image: "/products/FUN60 Ultra.png",
    images: ["/products/FUN60 Ultra.png","/products/FUN60 Ultra1.png"],
    inStock: true
  },
  {
    id: 7,
    slug: "artisans-zeros-xsoft-xl",
    name: "Artisan Zero XSoft XL",
    brand: "Artisan",
    category: "mousepad",
    priceTHB: 1890,
    description: "คุมง่าย คอนโทรลเด่น ยอดฮิตสาย FPS",
    specs: ["XL", "XSoft", "Control", "Made in Japan"],
    image: "/products/artisan-zero-xsoft-xl.jpg",
    inStock: true
  },
  {
    id: 8,
    slug: "Yuki Aim",
    name: "Yuki Aim x Demon1 ",
    brand: "Yuki Aim",
    category: "mousepad",
    priceTHB: 1690,
    description: "บาลานซ์ควบคุม/ความเร็ว เย็บขอบ ทนเหงื่อ",
    specs: ["XL", "Balanced", "Stitched edges"],
    image: "/products/Yuki Aim Demon.png",
    images: ["/products/Yuki Aim Demon.png","/products/Yuki Aim Demon1.png",],
    inStock: true
  },
  {
    id: 13,
    slug: "Yuki Aim1",
    name: "Yuki Aim OG Limited",
    brand: "Yuki Aim",
    category: "mousepad",
    priceTHB: 1690,
    description: "บาลานซ์ควบคุม/ความเร็ว เย็บขอบ ทนเหงื่อ",
    specs: ["XL", "Balanced", "Stitched edges"],
    image: "/products/Yuki Aim - OG Limited (Black).png",
    inStock: true
  },
  {
    id: 14,
    slug: "Yuki Aim2",
    name: "Yuki Aim - Oni 2.0 - Glass Mousepad Limited",
    brand: "Yuki Aim",
    category: "mousepad",
    priceTHB: 1690,
    description: "บาลานซ์ควบคุม/ความเร็ว เย็บขอบ ทนเหงื่อ",
    specs: ["XL", "Balanced", "Stitched edges"],
    image: "/products/Yuki Aim oni.png",
    images: ["/products/Yuki Aim oni.png","/products/Yuki Aim oni1.png",],
    inStock: true
  },
  {
    id: 9,
    slug: "hyperx-cloud-iii",
    name: "HyperX Cloud III",
    brand: "HyperX",
    category: "headset",
    priceTHB: 2490,
    description: "เสียงดี ใส่สบาย ไมค์ชัด ราคาคุ้ม",
    specs: ["Closed-back", "Detachable mic", "USB sound card"],
    image: "/products/hyperx-cloud-iii.png",
    images: ["/products/hyperx-cloud-iii.png","/products/hyperx-cloud-iii1.png","/products/hyperx-cloud-iii2.png"],
    inStock: true
  },
  {
    id: 10,
    slug: "razer-blackshark-v2",
    name: "Razer BlackShark V2",
    brand: "Razer",
    category: "headset",
    priceTHB: 3490,
    description: "ตำแหน่งเสียงแม่น ไมค์คม เน้นแข่ง",
    specs: ["TriForce 50mm", "Detachable mic", "USB card"],
    image: "/products/razer-blackshark-v2.jpg",
    inStock: true
  },
  {
    id: 11,
    slug: "moondrop-aria",
    name: "Moondrop Aria",
    brand: "Moondrop",
    category: "iem",
    priceTHB: 2990,
    description: "IEM เสียงบาลานซ์ ใสสะอาด คุ้มราคา",
    specs: ["Single DD", "Detachable cable", "Metal shell"],
    image: "/products/moondrop-aria.jpg",
    inStock: true
  },
  {
    id: 12,
    slug: "final-e500",
    name: "Final Audio E500",
    brand: "Final",
    category: "iem",
    priceTHB: 990,
    description: "IEM เริ่มต้นเสียงดี ฟังนานไม่ล้า",
    specs: ["Single dynamic", "Lightweight"],
    image: "/products/Final Audio E500.png",
    images: ["/products/Final Audio E500.png","/products/Final Audio E5001.png",],
    inStock: true
  },
  {
    id: 15,
    slug: "Yuki Aim2",
    name: "Yuki Aim - Oni 2.0 - Glass Mousepad Limited",
    brand: "Yuki Aim",
    category: "iem",
    priceTHB: 1690,
    description: "บาลานซ์ควบคุม/ความเร็ว เย็บขอบ ทนเหงื่อ",
    specs: ["XL", "Balanced", "Stitched edges"],
    image: "/products/Yuki Aim oni.png",
    images: ["/products/Yuki Aim oni.png","/products/Yuki Aim oni1.png",],
    inStock: true
  },
  {
    id: 16,
    slug: "Zowie144",
    name: "ZOWIE XL2411K TN DyAc™ 144Hz",
    brand: "ZowieByBenq",
    category: "monitor",
    priceTHB: 7890,
    description: "บาลานซ์ควบคุม/ความเร็ว เย็บขอบ ทนเหงื่อ",
    specs: ["1920 x 1080 at 144z (DP 1.4)", "144Hz", "TN","Dyac", "HDMI 2.0 x3 / DP 1.4 / headphone jack", "Power supply:	Built-in","Voltage rating:	100-240V"],
    image: "/products/Zowie144.png",
    images: ["/products/Zowie144.png","/products/Zowie1441.png",],
    inStock: true
  },
  {
    id: 17,
    slug: "Zowie280",
    name: "ZOWIE XL2546X+ Fast TN DyAc™ 2 280Hz Esports",
    brand: "ZowieByBenq",
    category: "monitor",
    priceTHB: 14900,
    description: "บาลานซ์ควบคุม/ความเร็ว เย็บขอบ ทนเหงื่อ",
    specs: ["1920 x 1080 at 280Hz (DP 1.4)", "280Hz", "Fast TN","Dyac2", "HDMI 2.0 x3 / DP 1.4 / headphone jack", "Power supply:	Built-in","Voltage rating:	100-240V"],
    image: "/products/Zowie280.png",
    images: ["/products/Zowie280.png","/products/Zowie2801.png",],
    inStock: true
  },
  {
    id: 18,
    slug: "Zowie400",
    name: "ZOWIE XL2566X+ New Fast TN DyAc™ 400Hz Esports",
    brand: "ZowieByBenq",
    category: "monitor",
    priceTHB: 25000,
    description: "XL2566X+ จอมอนิเตอร์เกม 400 Hz สำหรับ Esports ความคมชัดของการเคลื่อนไหวที่ดีที่สุดในระดับเดียวกัน – ตัวเลือกอันดับหนึ่งสำหรับการแข่งขัน FPS ระดับโลก",
    specs: ["1920 x 1080 at 400Hz (DP 1.4)", "400Hz", "Fast TN","Dyac2", "HDMI 2.0 x3 / DP 1.4 / headphone jack", "Power supply:	Built-in","Voltage rating:	100-240V"],
    image: "/products/Zowie400.png",
    images: ["/products/Zowie400.png","/products/Zowie4001.png",],
    inStock: true
  },
]

export const ALL_CATEGORIES = Array.from(new Set(products.map(p => p.category)))
export const ALL_BRANDS = Array.from(new Set(products.map(p => p.brand))).sort((a,b)=>a.localeCompare(b))

export function findProduct(idOrSlug?: string) {
  if (!idOrSlug) return undefined
  const asNum = Number(idOrSlug)
  return Number.isFinite(asNum)
    ? products.find(p => p.id === asNum)
    : products.find(p => p.slug === idOrSlug)
}

export const formatTHB = (n: number) =>
  n.toLocaleString("th-TH", { style: "currency", currency: "THB", maximumFractionDigits: 0 })
