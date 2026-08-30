import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bug,
  Leaf,
  Droplets,
  MessageSquareText,
  ArrowLeft,
  Sparkles,
  Check,
  Sun,
  Wind,
  TriangleAlert,
  Heart,
  ShoppingCart,
  Users,
  Trees,
  HeartPulse,
  BellRing,
  Microscope,
  FlaskConical,
  ClipboardCheck,
  Sprout,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AiAnalysisModal } from "@/components/glass/AiAnalysisModal";
import {
  dashboardStats,
  magazine,
  problems,
  productCategories,
  products,
  services,
  weather,
} from "@/lib/mock";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/hero-farmer.jpg";
import magDisease from "@/assets/mag-disease.jpg";
import magSoil from "@/assets/mag-soil.jpg";
import magIrrigation from "@/assets/mag-irrigation.jpg";
import magMachinery from "@/assets/mag-machinery.jpg";
import prodFertilizer from "@/assets/prod-fertilizer.jpg";
import prodPesticide from "@/assets/prod-pesticide.jpg";
import prodSeed from "@/assets/prod-seed.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "باغبان | کشاورزی هوشمند از شناخت باغ شما" },
      {
        name: "description",
        content:
          "کلینیک گیاه‌پزشکی باغبان: تشخیص آفات و بیماری‌ها، برنامه تغذیه، مدیریت آبیاری و سامانه هوشمند مدیریت باغ و مزرعه.",
      },
      { property: "og:title", content: "باغبان | کشاورزی هوشمند از شناخت باغ شما" },
      {
        property: "og:description",
        content:
          "ترکیب دانش گیاه‌پزشکی، داده‌های مزرعه و هوش مصنوعی برای تصمیم‌های دقیق‌تر در باغ و مزرعه.",
      },
    ],
  }),
  component: Home,
});

const PROBLEM_ICONS = [Bug, Leaf, Droplets, MessageSquareText];
const SERVICE_ICONS = [ClipboardCheck, Microscope, Sprout, FlaskConical, ShieldCheck, GraduationCap];
const PRODUCT_IMAGES = {
  fertilizer: prodFertilizer,
  pesticide: prodPesticide,
  seed: prodSeed,
};
const MAG_IMAGES = {
  disease: magDisease,
  soil: magSoil,
  irrigation: magIrrigation,
  machinery: magMachinery,
};
const STAT_ICONS = [Users, Trees, BellRing, HeartPulse];

function SectionHead({
  eyebrow,
  title,
  desc,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">{title}</h2>
      {desc && <p className="mt-3 text-sm leading-8 text-muted-foreground">{desc}</p>}
    </div>
  );
}

function Home() {
  const [activeProblem, setActiveProblem] = useState<string | null>(null);
  const [category, setCategory] = useState("همه");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [aiOpen, setAiOpen] = useState(false);

  const visibleProducts = products.filter(
    (p) => category === "همه" || p.category === category,
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="کشاورز در باغ گیلاس با تبلت"
          width={1600}
          height={1008}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-bark/92 via-bark/72 to-bark/25" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
          <div className="max-w-2xl text-bark-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-medium backdrop-blur-md">
              <Sparkles className="size-3.5" />
              سامانه هوشمند مدیریت باغ و مزرعه
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-[1.35] sm:text-4xl lg:text-5xl lg:leading-[1.3]">
              کشاورزی هوشمند،
              <br />
              از شناخت باغ شما شروع می‌شود
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-8 text-bark-foreground/80 sm:text-base">
              باغبان با ترکیب دانش گیاه‌پزشکی، داده‌های مزرعه و هوش مصنوعی، به کشاورزان و باغداران
              کمک می‌کند تصمیم‌های دقیق‌تر و بهتری برای باغ خود بگیرند.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/smart">ورود به سامانه هوشمند</Link>
              </Button>
              <Button asChild variant="heroGhost" size="xl">
                <a href="#services">مشاهده خدمات تخصصی</a>
              </Button>
            </div>
            <p className="mt-8 text-xs text-bark-foreground/65">از سال ۱۳۹۳ در کنار کشاورزان</p>
          </div>
        </div>
      </section>

      {/* PROBLEM FIRST */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHead
          center
          eyebrow="نقطه شروع"
          title="مشکل باغ شما چیست؟"
          desc="پیش از هر محصولی، مسئله باغ شما را می‌شناسیم. یکی از موارد زیر را انتخاب کنید."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => {
            const Icon = PROBLEM_ICONS[i];
            const active = activeProblem === p.key;
            return (
              <button
                key={p.key}
                onClick={() => setActiveProblem(active ? null : p.key)}
                className={cn(
                  "surface-card hover-lift rounded-2xl p-6 text-right transition-colors",
                  active && "border-primary/40 bg-secondary",
                )}
              >
                <span
                  className={cn(
                    "grid size-12 place-items-center rounded-2xl transition-colors",
                    active ? "bg-primary text-primary-foreground" : "bg-secondary text-primary",
                  )}
                >
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-sm font-bold">{p.title}</h3>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">{p.desc}</p>
                {active && (
                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
                    <Check className="size-3.5" /> انتخاب شد
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Button
            size="lg"
            onClick={() =>
              activeProblem
                ? toast("مسئله شما ثبت شد", {
                    description: "کارشناس باغبان راهکار متناسب را پیشنهاد می‌دهد.",
                  })
                : toast("ابتدا یکی از موارد بالا را انتخاب کنید")
            }
          >
            مشکل خود را بررسی کنید
            <ArrowLeft className="size-4" />
          </Button>
        </div>
      </section>

      {/* SMART PLATFORM */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
            <div>
              <SectionHead
                eyebrow="سامانه هوشمند"
                title="یک تصویر کامل از کشاورز و باغ او"
                desc="اطلاعات کشاورزان، باغ‌ها، سوابق، آزمایش‌ها، توصیه‌ها و هشدارها را در یک پنل یکپارچه مدیریت کنید."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "پرونده یکپارچه هر کشاورز و باغ",
                  "پایش سلامت باغ‌ها و هشدارهای زودهنگام",
                  "توصیه‌های هوشمند مبتنی بر داده و سوابق",
                  "ثبت بازدید میدانی و نتایج آزمایشگاهی",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf/15 text-leaf">
                      <Check className="size-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8">
                <Link to="/smart">
                  مشاهده سامانه هوشمند
                  <ArrowLeft className="size-4" />
                </Link>
              </Button>
            </div>

            {/* Dashboard preview — solid, not glass */}
            <div className="surface-card overflow-hidden rounded-3xl p-4 sm:p-5">
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {dashboardStats.map((s, i) => {
                  const Icon = STAT_ICONS[i];
                  return (
                    <div key={s.key} className="rounded-2xl border border-border bg-muted/40 p-3.5">
                      <Icon className="size-4 text-primary" />
                      <p className="num mt-2 text-xl font-extrabold">{s.value}</p>
                      <p className="mt-0.5 truncate text-[10px] text-muted-foreground">{s.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border p-4">
                  <p className="text-xs font-bold">سلامت کلی باغ‌ها</p>
                  <div className="mt-4 flex h-24 items-end gap-1.5">
                    {[62, 68, 71, 76, 80, 84, 87].map((h, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-t-md bg-leaf/80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <p className="num mt-3 text-[11px] text-muted-foreground">
                    میانگین فعلی: ۸۷٪ — روند صعودی
                  </p>
                </div>
                <div className="rounded-2xl border border-border p-4">
                  <p className="text-xs font-bold">فعالیت‌های اخیر</p>
                  <ul className="mt-3 space-y-2.5 text-[11px] text-muted-foreground">
                    <li>ثبت آزمایش خاک باغ گیلاس — ۲ ساعت پیش</li>
                    <li>بازدید میدانی باغ آلبالو — ۵ ساعت پیش</li>
                    <li>درخواست مشاوره تغذیه انگور — ۷ ساعت پیش</li>
                    <li>ثبت تصویر علائم بیماری مرکبات — دیروز</li>
                  </ul>
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-amber/30 bg-amber/8 p-4">
                <p className="flex items-center gap-1.5 text-xs font-bold text-amber-foreground">
                  <TriangleAlert className="size-3.5" /> هشدار هوشمند
                </p>
                <p className="mt-1.5 text-[11px] leading-6 text-muted-foreground">
                  افزایش دما در جهرم — بررسی برنامه آبیاری ۱۴ باغ پیشنهاد می‌شود.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI ASSISTANT — selective glass */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHead
          center
          eyebrow="هوش مصنوعی"
          title="دستیار هوشمند باغبان"
          desc="داده‌های کشاورز، باغ، خاک و اقلیم تحلیل می‌شود تا توصیه‌ای دقیق و قابل اجرا ارائه شود."
        />

        <div className="relative mt-10 overflow-hidden rounded-[32px] bg-primary p-1.5">
          <div className="glass-panel-dark glass-sheen rounded-[26px] p-6 text-bark-foreground sm:p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="flex items-center gap-2 text-sm font-bold">
                  <Sparkles className="size-4" />
                  اطلاعات باغ آقای حسینی بررسی شد
                </p>
                <ul className="mt-5 space-y-2.5">
                  {[
                    "۱۰۰ درخت گیلاس",
                    "۱۰۰ درخت آلبالو",
                    "سوابق بیماری: لکه برگی",
                    "وضعیت خاک: کمبود پتاسیم",
                    "شرایط آب‌وهوایی: روند گرم",
                    "آخرین بازدید کارشناسی: ۱۴۰۳/۰۳/۲۵",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-[13px] text-white/85">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-leaf/25 text-leaf">
                        <Check className="size-3" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/12 bg-white/6 p-5">
                <p className="text-xs font-bold text-white/70">پیشنهاد هوشمند</p>
                <p className="mt-3 text-sm leading-8 text-white/90">
                  با توجه به شرایط فعلی باغ و سوابق ثبت‌شده، بررسی وضعیت بیماری‌های قارچی و برنامه
                  تغذیه‌ای باغ پیشنهاد می‌شود.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  <Button variant="leaf" onClick={() => setAiOpen(true)}>
                    مشاهده تحلیل کامل
                  </Button>
                  <Button variant="heroGhost" onClick={() => toast("۴ محصول مرتبط پیشنهاد شد")}>
                    مشاهده محصولات مرتبط
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-surface-2 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHead
            eyebrow="خدمات تخصصی"
            title="کارشناسی که در باغ کنار شماست"
            desc="خدمات گیاه‌پزشکی و مشاوره‌ای باغبان، از تشخیص تا اجرای برنامه."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <article key={s.title} className="surface-card hover-lift rounded-2xl p-6">
                  <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold">{s.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">{s.desc}</p>
                  <button
                    onClick={() => toast(s.title, { description: "درخواست شما ثبت شد (دمو)." })}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    درخواست خدمت
                    <ArrowLeft className="size-3.5" />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WEATHER INTELLIGENCE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <SectionHead
            eyebrow="هوش اقلیمی"
            title="آب‌وهوا، وقتی به تصمیم باغ وصل می‌شود"
            desc="داده‌های اقلیمی منطقه شما به توصیه‌های عملی برای آبیاری، تغذیه و کنترل آفات تبدیل می‌شود."
          />
          <div className="surface-card overflow-hidden rounded-3xl">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 bg-primary p-6 text-primary-foreground">
              <div className="min-w-0">
                <p className="text-xs opacity-80">وضعیت آب‌وهوا</p>
                <p className="mt-1 text-lg font-bold">{weather.city}</p>
                <p className="num mt-3 text-5xl font-extrabold">{weather.temp}</p>
                <p className="mt-1 text-sm opacity-85">{weather.condition}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs opacity-90">
                  <span className="flex items-center gap-1.5">
                    <Droplets className="size-3.5" /> رطوبت {weather.humidity}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Wind className="size-3.5" /> باد {weather.wind}
                  </span>
                </div>
              </div>
              <Sun className="size-14 shrink-0 opacity-90" />
            </div>
            <div className="grid grid-cols-5 border-b">
              {weather.days.map((d) => (
                <div key={d.day} className="border-l p-3 text-center last:border-0">
                  <p className="truncate text-[10px] text-muted-foreground">{d.day}</p>
                  <p className="num mt-1 text-sm font-bold">{d.temp}</p>
                </div>
              ))}
            </div>
            <div className="bg-amber/8 p-5">
              <p className="flex items-center gap-1.5 text-xs font-bold text-amber-foreground">
                <TriangleAlert className="size-3.5" /> هشدار هوشمند
              </p>
              <p className="mt-2 text-xs leading-7 text-muted-foreground">{weather.alert}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-surface-2 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <SectionHead
              eyebrow="راهکارهای پیشنهادی"
              title="محصولاتی که با نیاز باغ شما انتخاب شده‌اند"
              desc="هر محصول بر اساس سوابق باغ، نتیجه آزمایش و شرایط اقلیمی پیشنهاد می‌شود."
            />
            <div className="flex flex-wrap gap-2">
              {productCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                    category === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-surface hover:bg-secondary",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((p) => {
              const fav = favorites.includes(p.id);
              return (
                <article key={p.id} className="surface-card hover-lift overflow-hidden rounded-2xl">
                  <div className="relative bg-muted/50">
                    <img
                      src={PRODUCT_IMAGES[p.image]}
                      alt={p.name}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="h-44 w-full object-contain p-4"
                    />
                    <button
                      aria-label="افزودن به علاقه‌مندی"
                      onClick={() =>
                        setFavorites((f) =>
                          f.includes(p.id) ? f.filter((x) => x !== p.id) : [...f, p.id],
                        )
                      }
                      className="absolute left-3 top-3 grid size-8 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-secondary"
                    >
                      <Heart
                        className={cn("size-4", fav && "fill-destructive text-destructive")}
                      />
                    </button>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] text-muted-foreground">{p.category}</span>
                    <h3 className="mt-1 text-sm font-bold">{p.name}</h3>
                    <p className="mt-2 rounded-lg bg-secondary/70 px-2.5 py-1.5 text-[11px] leading-5 text-primary">
                      {p.reason}
                    </p>
                    <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                      <span className="num truncate text-sm font-extrabold">{p.price}</span>
                      <span className="shrink-0 text-[11px] text-leaf">{p.stock}</span>
                    </div>
                    <Button
                      className="mt-4 w-full"
                      variant="outline"
                      onClick={() => toast("به سبد افزوده شد", { description: p.name })}
                    >
                      <ShoppingCart className="size-4" />
                      افزودن به سبد
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAGAZINE */}
      <section id="magazine" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHead
          eyebrow="مجله کشاورزی"
          title="دانش کشاورزی، همیشه به‌روز"
          desc="مقاله‌ها و آموزش‌های کاربردی کارشناسان باغبان برای فصل پیش‌رو."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {magazine.map((m) => (
            <article key={m.id} className="surface-card hover-lift overflow-hidden rounded-2xl">
              <img
                src={MAG_IMAGES[m.image]}
                alt={m.title}
                loading="lazy"
                width={1024}
                height={700}
                className="h-40 w-full object-cover"
              />
              <div className="p-5">
                <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-medium text-primary">
                  {m.tag}
                </span>
                <h3 className="mt-3 text-[13px] font-bold leading-7">{m.title}</h3>
                <p className="num mt-2 text-[11px] text-muted-foreground">{m.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section id="trust" className="bg-surface-2 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "۱۲+ سال تجربه", desc: "همراهی با کشاورزان از سال ۱۳۹۳" },
              { title: "مشاوره تخصصی", desc: "کارشناسان گیاه‌پزشکی در تمام فصل" },
              { title: "کارشناسی باغ و مزرعه", desc: "بازدید میدانی و گزارش دقیق" },
              { title: "تأمین نهاده‌های کشاورزی", desc: "کود، سم، بذر و ادوات مورد نیاز" },
            ].map((t) => (
              <div key={t.title} className="surface-card rounded-2xl p-6">
                <p className="text-base font-extrabold text-primary">{t.title}</p>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-[32px] bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">باغ خود را هوشمندتر مدیریت کنید</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-8 opacity-85">
            اطلاعات باغ خود را ثبت کنید و از توصیه‌های تخصصی و هوشمند باغبان استفاده کنید.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="leaf" size="xl">
              <Link to="/smart">شروع مدیریت باغ</Link>
            </Button>
            <Button
              variant="heroGhost"
              size="xl"
              onClick={() => toast("درخواست مشاوره ثبت شد", { description: "نسخه دمو." })}
            >
              دریافت مشاوره
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
      <AiAnalysisModal open={aiOpen} onOpenChange={setAiOpen} />
    </div>
  );
}
