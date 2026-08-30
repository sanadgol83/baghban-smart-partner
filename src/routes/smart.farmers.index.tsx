import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpDown, Plus, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { farmers } from "@/lib/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/smart/farmers/")({
  head: () => ({
    meta: [
      { title: "مدیریت کشاورزان | سامانه باغبان" },
      {
        name: "description",
        content: "فهرست کشاورزان، مناطق، تعداد باغ، محصول اصلی و وضعیت پیگیری در سامانه باغبان.",
      },
      { property: "og:title", content: "مدیریت کشاورزان | سامانه باغبان" },
      {
        property: "og:description",
        content: "CRM کشاورزان باغبان با جستجو، فیلتر و مرتب‌سازی.",
      },
    ],
  }),
  component: FarmersPage,
});

const REGIONS = ["همه مناطق", "جهرم", "شیراز", "فسا", "داراب", "زرقان"];
const STATUSES = ["همه وضعیت‌ها", "فعال", "نیازمند پیگیری", "در انتظار بازدید"] as const;

function statusClass(status: string) {
  if (status === "فعال") return "bg-leaf/12 text-leaf";
  if (status === "نیازمند پیگیری") return "bg-destructive/10 text-destructive";
  return "bg-amber/15 text-amber-foreground";
}

function FarmersPage() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState("همه مناطق");
  const [status, setStatus] = useState<string>("همه وضعیت‌ها");
  const [sortDesc, setSortDesc] = useState(true);

  const rows = useMemo(() => {
    const list = farmers.filter(
      (f) =>
        (f.name.includes(q.trim()) || f.mainCrop.includes(q.trim()) || f.region.includes(q.trim())) &&
        (region === "همه مناطق" || f.region === region) &&
        (status === "همه وضعیت‌ها" || f.status === status),
    );
    return [...list].sort((a, b) => (sortDesc ? b.health - a.health : a.health - b.health));
  }, [q, region, status, sortDesc]);

  return (
    <div className="mx-auto max-w-7xl space-y-5">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="min-w-0">
          <h1 className="truncate text-xl font-extrabold sm:text-2xl">کشاورزان</h1>
          <p className="mt-1 truncate text-xs text-muted-foreground">
            {rows.length} کشاورز از مجموع {farmers.length} پرونده فعال
          </p>
        </div>
        <Button
          className="shrink-0"
          onClick={() => toast("افزودن کشاورز", { description: "نسخه دمو." })}
        >
          <Plus className="size-4" />
          کشاورز جدید
        </Button>
      </header>

      <div className="surface-card rounded-2xl p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-border bg-muted/50 px-3 py-2">
            <Search className="size-4 shrink-0 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="جستجوی نام کشاورز، منطقه یا محصول…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <SlidersHorizontal className="size-3.5" /> فیلتر
            </span>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="rounded-xl border border-border bg-surface px-3 py-2 text-xs outline-none"
            >
              {REGIONS.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-xl border border-border bg-surface px-3 py-2 text-xs outline-none"
            >
              {STATUSES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <button
              onClick={() => setSortDesc((v) => !v)}
              className="flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-2 text-xs transition-colors hover:bg-secondary"
            >
              <ArrowUpDown className="size-3.5" />
              سلامت {sortDesc ? "نزولی" : "صعودی"}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop table */}
      <div className="surface-card hidden overflow-hidden rounded-2xl lg:block">
        <table className="w-full text-right text-sm">
          <thead className="bg-muted/60 text-xs text-muted-foreground">
            <tr>
              {["نام کشاورز", "منطقه", "تعداد باغ", "محصول اصلی", "آخرین بازدید", "وضعیت", "عملیات"].map(
                (h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((f) => (
              <tr key={f.id} className="border-t transition-colors hover:bg-muted/40">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold text-primary">
                      {f.name.trim().charAt(0)}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-semibold">{f.name}</span>
                      <span className="block truncate text-[11px] text-muted-foreground">
                        سلامت باغ‌ها {f.health}٪
                      </span>
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{f.region}</td>
                <td className="num px-4 py-3">{f.orchards}</td>
                <td className="px-4 py-3 text-muted-foreground">{f.mainCrop}</td>
                <td className="num px-4 py-3 text-muted-foreground">{f.lastVisit}</td>
                <td className="px-4 py-3">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-[11px] font-medium",
                      statusClass(f.status),
                    )}
                  >
                    {f.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/smart/farmers/$farmerId" params={{ farmerId: f.id }}>
                      پرونده
                      <ArrowLeft className="size-4" />
                    </Link>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && (
          <p className="py-10 text-center text-sm text-muted-foreground">کشاورزی یافت نشد</p>
        )}
      </div>

      {/* Mobile cards */}
      <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
        {rows.map((f) => (
          <Link
            key={f.id}
            to="/smart/farmers/$farmerId"
            params={{ farmerId: f.id }}
            className="surface-card hover-lift block rounded-2xl p-4"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-sm font-bold text-primary">
                  {f.name.trim().charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-semibold">{f.name}</span>
                  <span className="block truncate text-[11px] text-muted-foreground">
                    {f.region} — {f.mainCrop}
                  </span>
                </span>
              </div>
              <span
                className={cn(
                  "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium",
                  statusClass(f.status),
                )}
              >
                {f.status}
              </span>
            </div>
            <div className="num mt-4 flex flex-wrap gap-4 text-[11px] text-muted-foreground">
              <span>باغ‌ها: {f.orchards}</span>
              <span>سلامت: {f.health}٪</span>
              <span>آخرین بازدید: {f.lastVisit}</span>
            </div>
          </Link>
        ))}
        {rows.length === 0 && (
          <p className="py-10 text-center text-sm text-muted-foreground sm:col-span-2">
            کشاورزی یافت نشد
          </p>
        )}
      </div>
    </div>
  );
}
