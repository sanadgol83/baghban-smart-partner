import { Link } from "@tanstack/react-router";
import { Leaf, MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-bark text-bark-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="flex items-center gap-2.5">
              <span className="grid size-10 place-items-center rounded-2xl bg-leaf text-leaf-foreground">
                <Leaf className="size-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-base font-extrabold">باغبان</span>
                <span className="block text-[11px] text-bark-foreground/60">
                  کلینیک گیاه‌پزشکی
                </span>
              </span>
            </span>
            <p className="mt-4 max-w-md text-sm leading-7 text-bark-foreground/70">
              باغبان با ترکیب دانش گیاه‌پزشکی، داده‌های مزرعه و هوش مصنوعی، شریک دیجیتال کشاورزان و
              باغداران برای مدیریت دقیق‌تر باغ و مزرعه است.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold">دسترسی سریع</h3>
            <ul className="space-y-2.5 text-sm text-bark-foreground/70">
              <li>
                <Link to="/smart" className="transition-colors hover:text-bark-foreground">
                  سامانه هوشمند
                </Link>
              </li>
              <li>
                <Link to="/smart/farmers" className="transition-colors hover:text-bark-foreground">
                  مدیریت کشاورزان
                </Link>
              </li>
              <li>
                <a href="/#services" className="transition-colors hover:text-bark-foreground">
                  خدمات تخصصی
                </a>
              </li>
              <li>
                <a href="/#magazine" className="transition-colors hover:text-bark-foreground">
                  مجله کشاورزی
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold">ارتباط با ما</h3>
            <ul className="space-y-3 text-sm text-bark-foreground/70">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0" /> فارس، جهرم
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" /> ۰۷۱ ۵۴۴۴ ۰۰۰۰
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" /> info@baghban.example
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-bark-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© ۱۴۰۳ کلینیک گیاه‌پزشکی باغبان — تمامی حقوق محفوظ است.</span>
          <span>از سال ۱۳۹۳ در کنار کشاورزان</span>
        </div>
      </div>
    </footer>
  );
}
