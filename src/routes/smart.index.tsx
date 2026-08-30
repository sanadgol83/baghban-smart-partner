import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  Trees,
  TriangleAlert,
  HeartPulse,
  Sparkles,
  ArrowLeft,
  Droplets,
  Wind,
  Sun,
  CalendarDays,
  ChevronDown,
} from "lucide-react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { useState } from "react";
import { toast } from "sonner";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { AiAnalysisModal } from "@/components/glass/AiAnalysisModal";
import {
  activities,
  alerts,
  dashboardStats,
  healthTrend,
  tasks,
  visitHistory,
  weather,
} from "@/lib/mock";

export const Route = createFileRoute("/smart/")({
  head: () => ({
    meta: [
      { title: "داشبورد هوشمند | سامانه باغبان" },
      {
        name: "description",
        content: "داشبورد مدیریت کشاورزان، باغ‌ها، هشدارها، آب‌وهوا و توصیه‌های هوشمند باغبان.",
      },
      { property: "og:title", content: "داشبورد هوشمند | سامانه باغبان" },
      {
        property: "og:description",
        content: "پایش سلامت باغ‌ها، هشدارهای اقلیمی و توصیه‌های هوشمند در یک پنل یکپارچه.",
      },
    ],
  }),
  component: SmartDashboard,
});

const STAT_ICONS = [Users, Trees, TriangleAlert, HeartPulse];
const RANGES = ["امروز", "این هفته", "این ماه", "امسال"];

function SectionCard({
  title,
  action,
  children,
  className = "",
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={"surface-card rounded-2xl p-5 " + className}>
      <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <h2 className="truncate text-sm font-bold">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function SmartDashboard() {
  const [range, setRange] = useState("این ماه");
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl space-y-5">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="min-w-0">
          <h1 className="truncate text-xl font-extrabold sm:text-2xl">داشبورد</h1>
          <p className="mt-1 truncate text-xs text-muted-foreground">
            مدیریت هوشمند کشاورزان، باغ‌ها و مزارع
          </p>
        </div>

        <PopoverPrimitive.Root>
          <PopoverPrimitive.Trigger className="flex shrink-0 items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-xs font-medium transition-colors hover:bg-secondary">
            <CalendarDays className="size-4" />
            {range}
            <ChevronDown className="size-3.5 text-muted-foreground" />
          </PopoverPrimitive.Trigger>
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              align="start"
              sideOffset={8}
              className="glass-panel glass-sheen z-50 w-40 rounded-2xl p-1.5 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
            >
              {RANGES.map((r) => (
                <PopoverPrimitive.Close asChild key={r}>
                  <button
                    onClick={() => setRange(r)}
                    className={
                      "block w-full rounded-xl px-3 py-2 text-right text-xs transition-colors hover:bg-white/65 " +
                      (r === range ? "font-semibold text-primary" : "")
                    }
                  >
                    {r}
                  </button>
                </PopoverPrimitive.Close>
              ))}
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((s, i) => {
          const Icon = STAT_ICONS[i]!;
          const isAlert = s.key === "alerts";
          return (
            <div key={s.key} className="surface-card hover-lift rounded-2xl p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-xs text-muted-foreground">{s.label}</p>
                  <p className="num mt-2 text-3xl font-extrabold">{s.value}</p>
                </div>
                <span
                  className={
                    "grid size-10 shrink-0 place-items-center rounded-2xl " +
                    (isAlert ? "bg-amber/15 text-amber-foreground" : "bg-secondary text-primary")
                  }
                >
                  <Icon className="size-5" />
                </span>
              </div>
              <p className="mt-3 truncate text-[11px] text-muted-foreground">{s.delta}</p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <SectionCard
          title="روند سلامت باغ‌ها"
          className="xl:col-span-2"
          action={
            <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-primary">
              ۶ ماه اخیر
            </span>
          }
        >
          <div className="h-64 w-full" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={healthTrend} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
                <defs>
                  <linearGradient id="healthFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--leaf)" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="var(--leaf)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  axisLine={false}
                  tickLine={false}
                  reversed
                />
                <YAxis
                  orientation="right"
                  domain={[60, 100]}
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  axisLine={false}
                  tickLine={false}
                  width={34}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 14,
                    border: "1px solid var(--border)",
                    fontSize: 12,
                    fontFamily: "Vazirmatn",
                  }}
                  formatter={(v: number) => [`${v}%`, "سلامت"]}
                />
                <Area
                  type="monotone"
                  dataKey="health"
                  stroke="var(--leaf)"
                  strokeWidth={2.5}
                  fill="url(#healthFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <div className="space-y-5">
          <div className="surface-card overflow-hidden rounded-2xl">
            <div className="bg-primary p-5 text-primary-foreground">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs opacity-80">وضعیت آب‌وهوا</p>
                  <p className="mt-1 truncate text-lg font-bold">{weather.city}</p>
                  <p className="num mt-3 text-4xl font-extrabold">{weather.temp}</p>
                  <p className="mt-1 text-sm opacity-85">{weather.condition}</p>
                </div>
                <Sun className="size-10 shrink-0 opacity-90" />
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-xs opacity-90">
                <span className="flex items-center gap-1.5">
                  <Droplets className="size-3.5" /> رطوبت {weather.humidity}
                </span>
                <span className="flex items-center gap-1.5">
                  <Wind className="size-3.5" /> باد {weather.wind}
                </span>
              </div>
            </div>
            <div className="border-t bg-amber/8 p-4">
              <p className="mb-1 flex items-center gap-1.5 text-xs font-bold text-amber-foreground">
                <TriangleAlert className="size-3.5" /> هشدار هوشمند
              </p>
              <p className="text-xs leading-6 text-muted-foreground">{weather.alert}</p>
            </div>
          </div>

          <SectionCard title="توصیه هوشمند">
            <p className="text-xs leading-7 text-muted-foreground">
              با توجه به شرایط فعلی باغ آقای حسینی، احتمال افزایش بیماری‌های قارچی وجود دارد. بررسی
              برنامه آبیاری و تغذیه پیشنهاد می‌شود.
            </p>
            <Button className="mt-4 w-full" onClick={() => setAiOpen(true)}>
              <Sparkles className="size-4" />
              تحلیل هوشمند باغ
            </Button>
          </SectionCard>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <SectionCard title="هشدارهای فعال">
          <ul className="space-y-2.5">
            {alerts.map((a) => (
              <li
                key={a.id}
                className="flex gap-3 rounded-xl border border-border bg-muted/40 p-3"
              >
                <span
                  className={
                    "mt-1.5 size-2 shrink-0 rounded-full " +
                    (a.level === "high"
                      ? "bg-destructive"
                      : a.level === "medium"
                        ? "bg-amber"
                        : "bg-leaf")
                  }
                />
                <span className="min-w-0">
                  <span className="block truncate text-[13px] font-semibold">{a.title}</span>
                  <span className="block text-xs text-muted-foreground">{a.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard
          title="کارهای پیش‌رو"
          action={
            <button
              onClick={() => toast("تقویم عملیات", { description: "نسخه دمو." })}
              className="shrink-0 text-xs text-primary hover:underline"
            >
              مشاهده تقویم
            </button>
          }
        >
          <ul className="space-y-3">
            {tasks.map((t) => (
              <li key={t.id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <span className="min-w-0">
                  <span className="block truncate text-[13px]">{t.title}</span>
                  <span className="num block text-[11px] text-muted-foreground">{t.date}</span>
                </span>
                <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-[11px] text-primary">
                  {t.tag}
                </span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="فعالیت‌های اخیر">
          <ul className="space-y-3.5">
            {activities.map((a) => (
              <li key={a.id} className="flex gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-secondary text-[11px] font-bold text-primary">
                  {a.who.trim().charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[13px]">{a.what}</span>
                  <span className="block text-[11px] text-muted-foreground">
                    {a.who} — {a.when}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      <SectionCard
        title="آخرین بازدیدهای میدانی"
        action={
          <Button asChild variant="ghost" size="sm" className="shrink-0">
            <Link to="/smart/farmers">
              همه کشاورزان
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {visitHistory.map((v) => (
            <div key={v.id} className="rounded-xl border border-border bg-muted/40 p-4">
              <p className="truncate text-[13px] font-semibold">{v.title}</p>
              <p className="num mt-1 text-[11px] text-muted-foreground">{v.date}</p>
              <p className="mt-2 truncate text-xs text-muted-foreground">{v.by}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <AiAnalysisModal open={aiOpen} onOpenChange={setAiOpen} />
    </div>
  );
}
