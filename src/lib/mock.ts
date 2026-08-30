// Mock data for the Baghban smart agriculture demo. Frontend only.

export type Farmer = {
  id: string;
  name: string;
  title: string;
  region: string;
  phone: string;
  memberSince: string;
  orchards: number;
  mainCrop: string;
  lastVisit: string;
  health: number;
  status: "فعال" | "نیازمند پیگیری" | "در انتظار بازدید";
  latestRecommendation: string;
};

export const farmers: Farmer[] = [
  {
    id: "1",
    name: "آقای حسینی",
    title: "کشاورز و باغدار",
    region: "جهرم",
    phone: "۰۹۱۷ ۱۲۳ ۴۵۶۷",
    memberSince: "۱۴۰۰/۰۵/۲۵",
    orchards: 2,
    mainCrop: "گیلاس و آلبالو",
    lastVisit: "۱۴۰۳/۰۳/۲۵",
    health: 85,
    status: "فعال",
    latestRecommendation:
      "با توجه به شرایط فعلی، مصرف کود پتاسه و کنترل شته‌ها توصیه می‌شود.",
  },
  {
    id: "2",
    name: "خانم احمدی",
    title: "باغدار",
    region: "شیراز",
    phone: "۰۹۱۷ ۹۸۷ ۶۵۴۳",
    memberSince: "۱۴۰۱/۰۲/۱۰",
    orchards: 1,
    mainCrop: "انگور",
    lastVisit: "۱۴۰۳/۰۳/۲۰",
    health: 91,
    status: "فعال",
    latestRecommendation: "برنامه تغذیه بهاره طبق نتیجه آزمایش خاک اجرا شود.",
  },
  {
    id: "3",
    name: "آقای رضایی",
    title: "کشاورز",
    region: "فسا",
    phone: "۰۹۱۷ ۴۴۵ ۲۲۱۰",
    memberSince: "۱۳۹۹/۰۸/۰۳",
    orchards: 3,
    mainCrop: "مرکبات",
    lastVisit: "۱۴۰۳/۰۲/۱۸",
    health: 74,
    status: "نیازمند پیگیری",
    latestRecommendation: "بررسی علائم شانکر و اصلاح دور آبیاری ضروری است.",
  },
  {
    id: "4",
    name: "آقای کریمی",
    title: "کشاورز",
    region: "داراب",
    phone: "۰۹۱۷ ۳۳۲ ۷۷۸۹",
    memberSince: "۱۴۰۲/۰۱/۱۵",
    orchards: 1,
    mainCrop: "گندم",
    lastVisit: "۱۴۰۳/۰۳/۲۶",
    health: 88,
    status: "در انتظار بازدید",
    latestRecommendation: "پایش علف‌های هرز پیش از مرحله ساقه‌روی انجام شود.",
  },
  {
    id: "5",
    name: "آقای موسوی",
    title: "باغدار",
    region: "جهرم",
    phone: "۰۹۱۷ ۵۵۱ ۰۰۹۸",
    memberSince: "۱۴۰۰/۱۱/۰۲",
    orchards: 2,
    mainCrop: "خرما",
    lastVisit: "۱۴۰۳/۰۱/۳۰",
    health: 79,
    status: "نیازمند پیگیری",
    latestRecommendation: "کنترل کنه تارتن و بررسی شوری آب چاه پیشنهاد می‌شود.",
  },
  {
    id: "6",
    name: "خانم نیک‌پور",
    title: "کشاورز",
    region: "زرقان",
    phone: "۰۹۱۷ ۶۶۷ ۱۱۲۳",
    memberSince: "۱۴۰۲/۰۶/۱۹",
    orchards: 1,
    mainCrop: "گوجه‌فرنگی",
    lastVisit: "۱۴۰۳/۰۳/۱۲",
    health: 93,
    status: "فعال",
    latestRecommendation: "برنامه محلول‌پاشی کلسیم برای پیشگیری از پوسیدگی گلگاه.",
  },
];

export type Orchard = {
  id: string;
  name: string;
  crop: string;
  trees: number;
  area: string;
  health: number;
  irrigation: string;
  disease: string;
  lastVisit: string;
  recommendation: string;
  lastActivity: string;
};

export const orchards: Orchard[] = [
  {
    id: "g1",
    name: "باغ گیلاس",
    crop: "گیلاس",
    trees: 100,
    area: "۱٫۵ هکتار",
    health: 87,
    irrigation: "مناسب — دور ۵ روزه",
    disease: "لکه برگی (خفیف)",
    lastVisit: "۱۴۰۳/۰۳/۲۵",
    recommendation: "محلول‌پاشی قارچ‌کش و اصلاح تغذیه پتاسیم",
    lastActivity: "ثبت آزمایش خاک — ۳ روز پیش",
  },
  {
    id: "g2",
    name: "باغ آلبالو",
    crop: "آلبالو",
    trees: 100,
    area: "۱٫۲ هکتار",
    health: 82,
    irrigation: "مناسب — دور ۶ روزه",
    disease: "شته (متوسط)",
    lastVisit: "۱۴۰۳/۰۳/۲۰",
    recommendation: "کنترل شته و بازبینی برنامه کوددهی بهاره",
    lastActivity: "بازدید کارشناس — ۷ روز پیش",
  },
];

export const dashboardStats = [
  { key: "farmers", label: "کشاورزان فعال", value: "۲۴۸", delta: "+۱۲ این ماه" },
  { key: "orchards", label: "باغ‌ها و مزارع", value: "۳۸۶", delta: "+۱۸ این ماه" },
  { key: "alerts", label: "هشدارهای فعال", value: "۱۲", delta: "۴ مورد فوری" },
  { key: "health", label: "میانگین سلامت باغ‌ها", value: "۸۷٪", delta: "+۳٪ نسبت به ماه قبل" },
];

export const healthTrend = [
  { month: "دی", health: 74, alerts: 21 },
  { month: "بهمن", health: 76, alerts: 19 },
  { month: "اسفند", health: 79, alerts: 17 },
  { month: "فروردین", health: 81, alerts: 15 },
  { month: "اردیبهشت", health: 84, alerts: 13 },
  { month: "خرداد", health: 87, alerts: 12 },
];

export const weather = {
  city: "جهرم",
  temp: "۳۱°",
  condition: "آفتابی",
  humidity: "۳۸٪",
  wind: "۱۲ km/h",
  alert:
    "با توجه به افزایش دما در روزهای آینده، بررسی برنامه آبیاری باغ پیشنهاد می‌شود.",
  days: [
    { day: "شنبه", temp: "۳۱°" },
    { day: "یک‌شنبه", temp: "۳۳°" },
    { day: "دوشنبه", temp: "۳۵°" },
    { day: "سه‌شنبه", temp: "۳۴°" },
    { day: "چهارشنبه", temp: "۳۲°" },
  ],
};

export const notifications = [
  {
    id: "n1",
    icon: "⚠️",
    title: "افزایش دمای جهرم",
    body: "دمای منطقه تا ۳۵ درجه افزایش می‌یابد.",
    time: "۱۰ دقیقه پیش",
  },
  {
    id: "n2",
    icon: "🌱",
    title: "توصیه جدید برای باغ آلبالو",
    body: "برنامه کنترل شته به‌روزرسانی شد.",
    time: "۱ ساعت پیش",
  },
  {
    id: "n3",
    icon: "👨‍🌾",
    title: "گزارش بازدید آقای حسینی",
    body: "گزارش کارشناسی باغ گیلاس ثبت شد.",
    time: "۳ ساعت پیش",
  },
  {
    id: "n4",
    icon: "💧",
    title: "بررسی وضعیت آبیاری",
    body: "۵ باغ نیازمند بازبینی دور آبیاری هستند.",
    time: "دیروز",
  },
];

export const activities = [
  { id: "a1", who: "آقای حسینی", what: "ثبت آزمایش خاک باغ گیلاس", when: "۲ ساعت پیش" },
  { id: "a2", who: "کارشناس مرادی", what: "بازدید میدانی باغ آلبالو", when: "۵ ساعت پیش" },
  { id: "a3", who: "خانم احمدی", what: "درخواست مشاوره تغذیه انگور", when: "۷ ساعت پیش" },
  { id: "a4", who: "آقای رضایی", what: "ثبت تصویر علائم بیماری مرکبات", when: "دیروز" },
];

export const tasks = [
  { id: "t1", title: "بازدید از باغ آقای کریمی", date: "۱۴۰۳/۰۳/۲۸", tag: "بازدید" },
  { id: "t2", title: "نتیجه آزمایش خاک آقای حسینی", date: "۱۴۰۳/۰۳/۲۹", tag: "آزمایش" },
  { id: "t3", title: "توصیه کوددهی باغ خانم احمدی", date: "۱۴۰۳/۰۳/۳۰", tag: "توصیه" },
  { id: "t4", title: "پیگیری کنترل آفت باغ آقای موسوی", date: "۱۴۰۳/۰۴/۰۲", tag: "پیگیری" },
];

export const alerts = [
  { id: "al1", level: "high" as const, title: "تنش گرمایی — جهرم", body: "۱۴ باغ در معرض تنش دمایی." },
  { id: "al2", level: "medium" as const, title: "بیماری قارچی — فسا", body: "افزایش گزارش لکه برگی." },
  { id: "al3", level: "low" as const, title: "شوری آب — داراب", body: "۳ مزرعه نیازمند آزمایش آب." },
];

export const services = [
  { title: "کارشناسی باغ و مزرعه", desc: "بازدید میدانی و گزارش تخصصی وضعیت باغ." },
  { title: "تشخیص آفات و بیماری‌ها", desc: "شناسایی دقیق عامل خسارت و راهکار کنترل." },
  { title: "مشاوره تغذیه گیاه", desc: "برنامه کوددهی متناسب با نیاز واقعی گیاه." },
  { title: "آزمایش خاک و آب", desc: "تحلیل نتایج آزمایشگاهی و تفسیر کاربردی." },
  { title: "مدیریت آفات", desc: "برنامه تلفیقی پایش، پیشگیری و کنترل آفات." },
  { title: "مشاوره تخصصی کشاورزی", desc: "همراهی کارشناس در طول فصل زراعی." },
];

export const problems = [
  {
    key: "pest",
    title: "تشخیص آفات و بیماری‌ها",
    desc: "علائم را ثبت کنید تا عامل خسارت شناسایی شود.",
  },
  {
    key: "nutrition",
    title: "برنامه تغذیه و کوددهی",
    desc: "برنامه کوددهی بر پایه آزمایش خاک و سن درخت.",
  },
  {
    key: "water",
    title: "مدیریت آب و آبیاری",
    desc: "اصلاح دور آبیاری متناسب با اقلیم و خاک.",
  },
  {
    key: "consult",
    title: "مشاوره تخصصی باغ و مزرعه",
    desc: "همراهی کارشناس گیاه‌پزشکی در تمام فصل.",
  },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: string;
  reason: string;
  image: "fertilizer" | "pesticide" | "seed";
};

export const products: Product[] = [
  {
    id: "p1",
    name: "کود کامل NPK 20-20-20",
    category: "کودهای کشاورزی",
    price: "۷۸۰٬۰۰۰ تومان",
    stock: "موجود",
    reason: "مناسب برنامه تغذیه بهاره باغ گیلاس",
    image: "fertilizer",
  },
  {
    id: "p2",
    name: "قارچ‌کش مانکوزب",
    category: "سموم دفع آفات",
    price: "۵۲۰٬۰۰۰ تومان",
    stock: "موجود",
    reason: "کنترل لکه برگی گزارش‌شده در باغ شما",
    image: "pesticide",
  },
  {
    id: "p3",
    name: "بذر گوجه‌فرنگی هیبرید",
    category: "بذر",
    price: "۳۵۰٬۰۰۰ تومان",
    stock: "موجود",
    reason: "سازگار با اقلیم گرم جنوب فارس",
    image: "seed",
  },
  {
    id: "p4",
    name: "کود هیومیک اسید",
    category: "کودهای کشاورزی",
    price: "۴۹۰٬۰۰۰ تومان",
    stock: "موجود",
    reason: "بهبود ساختار خاک بر اساس نتیجه آزمایش",
    image: "fertilizer",
  },
  {
    id: "p5",
    name: "حشره‌کش کنترل شته",
    category: "سموم دفع آفات",
    price: "۴۱۰٬۰۰۰ تومان",
    stock: "موجودی محدود",
    reason: "متناسب با آلودگی متوسط باغ آلبالو",
    image: "pesticide",
  },
  {
    id: "p6",
    name: "کود پتاسیم بالا (K)",
    category: "کودهای کشاورزی",
    price: "۶۳۰٬۰۰۰ تومان",
    stock: "موجود",
    reason: "افزایش کیفیت میوه در مرحله رشد",
    image: "fertilizer",
  },
];

export const productCategories = [
  "همه",
  "کودهای کشاورزی",
  "سموم دفع آفات",
  "بذر",
];

export const magazine = [
  {
    id: "m1",
    title: "آفات و بیماری‌های رایج گیلاس در بهار",
    tag: "آفات و بیماری‌ها",
    date: "۲ خرداد ۱۴۰۳",
    image: "disease" as const,
  },
  {
    id: "m2",
    title: "برنامه تغذیه‌ای باغ بر اساس آزمایش خاک",
    tag: "برنامه تغذیه",
    date: "۳۰ اردیبهشت ۱۴۰۳",
    image: "soil" as const,
  },
  {
    id: "m3",
    title: "سیستم‌های نوین آبیاری در باغ‌های جنوب",
    tag: "آبیاری",
    date: "۲۸ اردیبهشت ۱۴۰۳",
    image: "irrigation" as const,
  },
  {
    id: "m4",
    title: "مکانیزاسیون و مدیریت عملیات مزرعه",
    tag: "مدیریت باغ",
    date: "۲۵ اردیبهشت ۱۴۰۳",
    image: "machinery" as const,
  },
];

export const aiSteps = [
  "بررسی اطلاعات کشاورز",
  "بررسی سوابق باغ",
  "بررسی شرایط آب‌وهوا",
  "بررسی وضعیت خاک",
  "تحلیل شرایط فعلی",
];

export const aiActions = [
  { title: "بررسی وضعیت بیماری", detail: "پایش لکه برگی و محلول‌پاشی قارچ‌کش مجاز." },
  { title: "بررسی برنامه تغذیه", detail: "اصلاح نسبت پتاسیم بر پایه آزمایش خاک اخیر." },
  { title: "کنترل آفات", detail: "پایش هفتگی شته و استفاده از کارت‌های زرد چسبنده." },
  { title: "بررسی آبیاری", detail: "کاهش فاصله دور آبیاری در هفته پیش‌رو." },
];

export const aiResult =
  "با توجه به سوابق باغ، نتایج آزمایش خاک و روند دمایی منطقه جهرم، احتمال گسترش بیماری‌های قارچی در باغ گیلاس وجود دارد و برنامه تغذیه‌ای نیازمند اصلاح نسبت پتاسیم است.";

export const soilTests = [
  { id: "s1", title: "آزمایش خاک باغ گیلاس", date: "۱۴۰۳/۰۳/۲۲", result: "کمبود پتاسیم — pH ۷٫۶" },
  { id: "s2", title: "آزمایش آب چاه", date: "۱۴۰۳/۰۲/۱۰", result: "EC ۱٫۹ — قابل قبول" },
  { id: "s3", title: "آزمایش برگ آلبالو", date: "۱۴۰۲/۱۱/۰۵", result: "کمبود خفیف روی" },
];

export const visitHistory = [
  { id: "v1", title: "بازدید کارشناسی باغ گیلاس", date: "۱۴۰۳/۰۳/۲۵", by: "کارشناس مرادی" },
  { id: "v2", title: "نمونه‌برداری خاک", date: "۱۴۰۳/۰۳/۲۲", by: "کارشناس صادقی" },
  { id: "v3", title: "بازدید باغ آلبالو", date: "۱۴۰۳/۰۳/۲۰", by: "کارشناس مرادی" },
  { id: "v4", title: "جلسه مشاوره تغذیه", date: "۱۴۰۳/۰۲/۱۸", by: "دکتر کاظمی" },
];

export const messages = [
  { id: "ms1", from: "آقای حسینی", text: "سلام، برگ‌های چند درخت لکه‌دار شده‌اند.", time: "۱۰:۲۴" },
  { id: "ms2", from: "کارشناس مرادی", text: "تصاویر دریافت شد؛ بازدید فردا انجام می‌شود.", time: "۱۰:۴۱" },
  { id: "ms3", from: "آقای حسینی", text: "ممنون، منتظر گزارش هستم.", time: "۱۱:۰۲" },
];
