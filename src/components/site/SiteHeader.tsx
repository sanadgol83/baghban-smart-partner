import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Link } from "@tanstack/react-router";
import { Leaf, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { CommandPalette } from "@/components/glass/CommandPalette";

const NAV = [
  { label: "خانه", to: "/" },
  { label: "خدمات تخصصی", to: "/#services" },
  { label: "محصولات", to: "/#products" },
  { label: "مجله کشاورزی", to: "/#magazine" },
  { label: "سامانه هوشمند", to: "/smart" },
  { label: "درباره ما", to: "/#trust" },
  { label: "تماس با ما", to: "/#cta" },
];

export function SiteHeader() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-40 border-b bg-surface transition-shadow " +
        (scrolled ? "shadow-[var(--shadow-soft)]" : "shadow-none")
      }
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2.5">
          <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
            <Leaf className="size-5" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-extrabold">باغبان</span>
            <span className="block truncate text-[11px] text-muted-foreground">
              کلینیک گیاه‌پزشکی
            </span>
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-1 lg:flex">
          {NAV.map((n) =>
            n.to.startsWith("/#") ? (
              <a
                key={n.label}
                href={n.to}
                className="rounded-lg px-3 py-2 text-[13px] font-medium text-foreground/75 transition-colors hover:bg-secondary hover:text-primary"
              >
                {n.label}
              </a>
            ) : (
              <Link
                key={n.label}
                to={n.to}
                className="rounded-lg px-3 py-2 text-[13px] font-medium text-foreground/75 transition-colors hover:bg-secondary hover:text-primary"
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center justify-end gap-1.5">
          <button
            aria-label="جستجو"
            onClick={() => setPaletteOpen(true)}
            className="grid size-9 place-items-center rounded-xl border border-border bg-surface transition-colors hover:bg-secondary"
          >
            <Search className="size-4" />
          </button>
          <button
            aria-label="سبد خرید"
            onClick={() => toast("سبد خرید", { description: "۲ کالا در سبد شما." })}
            className="relative grid size-9 place-items-center rounded-xl border border-border bg-surface transition-colors hover:bg-secondary"
          >
            <ShoppingCart className="size-4" />
            <span className="absolute -top-1 -left-1 grid size-4 place-items-center rounded-full bg-amber text-[10px] font-bold text-amber-foreground">
              ۲
            </span>
          </button>
          <button
            aria-label="حساب کاربری"
            onClick={() => toast("حساب کاربری", { description: "دمو — بدون احراز هویت واقعی." })}
            className="hidden size-9 place-items-center rounded-xl border border-border bg-surface transition-colors hover:bg-secondary sm:grid"
          >
            <User className="size-4" />
          </button>

          <Button asChild variant="hero" className="hidden md:inline-flex">
            <Link to="/smart">ورود به سامانه هوشمند</Link>
          </Button>

          <button
            aria-label="منو"
            onClick={() => setMenuOpen(true)}
            className="grid size-9 place-items-center rounded-xl border border-border bg-surface lg:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />

      {/* Mobile liquid-glass drawer */}
      <DialogPrimitive.Root open={menuOpen} onOpenChange={setMenuOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-bark/25 backdrop-blur-[5px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
          <DialogPrimitive.Content className="glass-panel glass-sheen fixed inset-y-0 right-0 z-50 flex w-[86vw] max-w-sm flex-col rounded-r-[28px] p-5 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right">
            <DialogPrimitive.Title className="sr-only">منوی اصلی</DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">
              پیمایش سایت باغبان
            </DialogPrimitive.Description>
            <div className="mb-6 flex items-center justify-between">
              <span className="flex items-center gap-2 font-extrabold">
                <span className="grid size-9 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <Leaf className="size-4" />
                </span>
                باغبان
              </span>
              <DialogPrimitive.Close
                aria-label="بستن"
                className="grid size-9 place-items-center rounded-xl border border-white/50 bg-white/50"
              >
                <X className="size-4" />
              </DialogPrimitive.Close>
            </div>

            <nav className="flex-1 space-y-1">
              {NAV.map((n) =>
                n.to.startsWith("/#") ? (
                  <a
                    key={n.label}
                    href={n.to}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/60"
                  >
                    {n.label}
                  </a>
                ) : (
                  <Link
                    key={n.label}
                    to={n.to}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/60"
                  >
                    {n.label}
                  </Link>
                ),
              )}
            </nav>

            <Button asChild variant="hero" size="lg" className="w-full">
              <Link to="/smart" onClick={() => setMenuOpen(false)}>
                ورود به سامانه هوشمند
              </Link>
            </Button>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </header>
  );
}
