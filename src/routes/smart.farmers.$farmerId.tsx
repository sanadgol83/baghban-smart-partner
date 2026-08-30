import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  Droplets,
  Bug,
  Phone,
  MapPin,
  Sparkles,
  Trees,
  FlaskConical,
  MessageSquare,
  HeartPulse,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AiAnalysisModal } from "@/components/glass/AiAnalysisModal";
import { farmers, messages, orchards, soilTests, visitHistory } from "@/lib/mock";
import cherryImg from "@/assets/orchard-cherry.jpg";
import albalooImg from "@/assets/orchard-albaloo.jpg";

export const Route = createFileRoute("/smart/farmers/$farmerId")({
  loader: ({ params }) => {
    const farmer = farmers.find((f) => f.id === params.farmerId);
    if (!farmer) throw notFound();
    return { farmer };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "پرونده یافت نشد | سامانه باغبان" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.farmer.name} | پرونده کشاورز — باغبان`;
    const description = `پرونده ${loaderData.farmer.name} در منطقه ${loaderData.farmer.region}؛ باغ‌ها، سوابق، آزمایش‌ها و توصیه‌های هوشمند.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: FarmerProfile,
});

const ORCHARD_IMAGES: Record<string, string> = { g1: cherryImg, g2: albalooImg };

function HealthRing({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-leaf" style={{ width: `${value}%` }} />
      </div>
      <span className="num text-xs font-bold">{value}٪</span>
    </div>
  );
}

function FarmerProfile() {
  const { farmer } = Route.useLoaderData();
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl space-y-5">
      <Link
        to="/smart/farmers"
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowRight className="size-3.5" />
        بازگشت به فهرست کشاورزان
      </Link>

      <header className="surface-card rounded-2xl p-5 sm:p-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary text-lg font-extrabold text-primary-foreground sm:size-16">
              {farmer.name.trim().charAt(0)}
            </span>
            <div className="min-w-0">
              <h1 className="truncate text-xl font-extrabold sm:text-2xl">{farmer.name}</h1>
              <p className="truncate text-xs text-muted-foreground">{farmer.title}</p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="size-3" /> {farmer.region}
                </span>
                <span className="num flex items-center gap-1">
                  <Phone className="size-3" /> {farmer.phone}
                </span>
                <span className="num flex items-center gap-1">
                  <CalendarDays className="size-3" /> عضویت {farmer.memberSince}
                </span>
              </div>
            </div>
          </div>
          <Button className="shrink-0" onClick={() => setAiOpen(true)}>
            <Sparkles className="size-4" />
            <span className="hidden sm:inline">تحلیل هوشمند باغ</span>
            <span className="sm:hidden">تحلیل</span>
          </Button>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "تعداد باغ‌ها", value: `${farmer.orchards}`, icon: Trees },
            { label: "میانگین سلامت", value: `${farmer.health}٪`, icon: HeartPulse },
            { label: "آخرین بازدید", value: farmer.lastVisit, icon: CalendarDays },
            { label: "محصول اصلی", value: farmer.mainCrop, icon: Droplets },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-muted/40 p-4">
              <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <s.icon className="size-3.5" />
                {s.label}
              </p>
              <p className="num mt-1.5 truncate text-lg font-bold">{s.value}</p>
            </div>
          ))}
        </div>
      </header>

      <Tabs defaultValue="overview">
        <TabsList className="flex w-full flex-wrap justify-start gap-1 rounded-2xl bg-muted/70 p-1">
          {[
            { v: "overview", l: "نمای کلی" },
            { v: "orchards", l: "باغ‌ها" },
            { v: "history", l: "سوابق" },
            { v: "tests", l: "آزمایش‌ها" },
            { v: "advice", l: "توصیه‌ها" },
            { v: "messages", l: "پیام‌ها" },
          ].map((t) => (
            <TabsTrigger key={t.v} value={t.v} className="rounded-xl px-4 text-xs">
              {t.l}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="mt-5 space-y-5">
          <div className="surface-card rounded-2xl p-5">
            <h2 className="mb-4 text-sm font-bold">باغ‌ها و مزارع</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {orchards.map((o) => (
                <article key={o.id} className="hover-lift overflow-hidden rounded-2xl border">
                  <img
                    src={ORCHARD_IMAGES[o.id]}
                    alt={o.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-36 w-full object-cover"
                  />
                  <div className="p-4">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                      <h3 className="truncate text-sm font-bold">{o.name}</h3>
                      <span className="num shrink-0 text-[11px] text-muted-foreground">
                        {o.trees} درخت
                      </span>
                    </div>
                    <div className="mt-3">
                      <HealthRing value={o.health} />
                    </div>
                    <dl className="mt-4 space-y-2 text-[11px] text-muted-foreground">
                      <div className="flex justify-between gap-3">
                        <dt>آبیاری</dt>
                        <dd className="truncate text-foreground/80">{o.irrigation}</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt>وضعیت بیماری</dt>
                        <dd className="truncate text-foreground/80">{o.disease}</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt>آخرین بازدید</dt>
                        <dd className="num truncate text-foreground/80">{o.lastVisit}</dd>
                      </div>
                    </dl>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 w-full"
                      onClick={() => toast(o.name, { description: o.recommendation })}
                    >
                      مشاهده جزئیات
                    </Button>
                  </div>
                </article>
              ))}
            </div>
            <Button className="mt-5 w-full sm:w-auto" onClick={() => setAiOpen(true)}>
              <Sparkles className="size-4" />
              تحلیل هوشمند باغ
            </Button>
          </div>

          <div className="surface-card rounded-2xl border-r-4 border-r-leaf p-5">
            <h2 className="mb-2 text-sm font-bold">آخرین توصیه</h2>
            <p className="text-sm leading-7 text-muted-foreground">{farmer.latestRecommendation}</p>
          </div>
        </TabsContent>

        <TabsContent value="orchards" className="mt-5">
          <div className="surface-card overflow-hidden rounded-2xl">
            {orchards.map((o) => (
              <div key={o.id} className="grid gap-3 border-b p-5 last:border-0 sm:grid-cols-3">
                <div>
                  <p className="text-sm font-bold">{o.name}</p>
                  <p className="num mt-1 text-[11px] text-muted-foreground">
                    {o.trees} درخت — {o.area}
                  </p>
                  <div className="mt-3">
                    <HealthRing value={o.health} />
                  </div>
                </div>
                <div className="text-xs text-muted-foreground sm:col-span-2">
                  <p className="flex items-center gap-1.5">
                    <Droplets className="size-3.5" /> {o.irrigation}
                  </p>
                  <p className="mt-2 flex items-center gap-1.5">
                    <Bug className="size-3.5" /> {o.disease}
                  </p>
                  <p className="mt-2">آخرین فعالیت: {o.lastActivity}</p>
                  <p className="mt-2 text-foreground/80">توصیه: {o.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="history" className="mt-5">
          <div className="surface-card rounded-2xl p-5">
            <ol className="relative space-y-5 border-r pr-5">
              {visitHistory.map((v) => (
                <li key={v.id} className="relative">
                  <span className="absolute -right-[27px] top-1.5 size-3 rounded-full border-2 border-background bg-leaf" />
                  <p className="text-sm font-semibold">{v.title}</p>
                  <p className="num mt-1 text-[11px] text-muted-foreground">
                    {v.date} — {v.by}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </TabsContent>

        <TabsContent value="tests" className="mt-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {soilTests.map((t) => (
              <div key={t.id} className="surface-card rounded-2xl p-5">
                <FlaskConical className="size-5 text-primary" />
                <p className="mt-3 text-sm font-semibold">{t.title}</p>
                <p className="num mt-1 text-[11px] text-muted-foreground">{t.date}</p>
                <p className="mt-3 text-xs text-foreground/80">{t.result}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="advice" className="mt-5">
          <div className="surface-card space-y-4 rounded-2xl p-5">
            {[farmer.latestRecommendation, ...orchards.map((o) => o.recommendation)].map((r, i) => (
              <div key={i} className="rounded-xl border border-border bg-muted/40 p-4">
                <p className="flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                  <Sparkles className="size-3.5" /> توصیه {i + 1}
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{r}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="messages" className="mt-5">
          <div className="surface-card space-y-4 rounded-2xl p-5">
            {messages.map((m) => (
              <div key={m.id} className="flex gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-[11px] font-bold text-primary">
                  {m.from.trim().charAt(0)}
                </span>
                <div className="min-w-0 rounded-2xl rounded-tr-sm border border-border bg-muted/40 px-4 py-3">
                  <p className="text-[11px] font-semibold">{m.from}</p>
                  <p className="mt-1 text-sm text-foreground/85">{m.text}</p>
                  <p className="num mt-1 text-[10px] text-muted-foreground">{m.time}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-2 pt-2">
              <input
                placeholder="پیام خود را بنویسید…"
                className="min-w-0 flex-1 rounded-xl border border-border bg-muted/50 px-3 py-2 text-sm outline-none"
              />
              <Button onClick={() => toast("پیام ارسال شد", { description: "نسخه دمو." })}>
                <MessageSquare className="size-4" />
                ارسال
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <AiAnalysisModal
        open={aiOpen}
        onOpenChange={setAiOpen}
        orchardName={`باغ گیلاس ${farmer.name}`}
      />
    </div>
  );
}
