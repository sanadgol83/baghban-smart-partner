import { Link, useRouterState } from "@tanstack/react-router";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  LayoutDashboard,
  Users,
  Trees,
  Sparkles,
  CloudSun,
  FlaskConical,
  Package,
  MessageSquare,
  Settings,
  Search,
  Menu,
  X,
  Leaf,
  LogOut,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { CommandPalette } from "@/components/glass/CommandPalette";
import { NotificationsPanel } from "@/components/glass/NotificationsPanel";
import { UserPopover } from "@/components/glass/UserPopover";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  to?: string;
  exact?: boolean;
};

const NAV: NavItem[] = [
  { label: "داشبورد", icon: LayoutDashboard, to: "/smart", exact: true },
  { label: "کشاورزان", icon: Users, to: "/smart/farmers" },
  { label: "باغ‌ها و مزارع", icon: Trees, to: "/smart/farmers/1" },
  { label: "توصیه‌های هوشمند", icon: Sparkles },
  { label: "آب‌وهوا", icon: CloudSun },
  { label: "آزمایش‌ها", icon: FlaskConical },
  { label: "محصولات", icon: Package },
  { label: "پیام‌ها", icon: MessageSquare },
  { label: "تنظیمات", icon: Settings },
];

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="space-y-1">
      {NAV.map((item) => {
        const active = item.to
          ? item.exact
            ? pathname === item.to
            : pathname.startsWith(item.to)
          : false;
        const cls = cn(
          "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition-colors",
          active
            ? "bg-sidebar-primary text-sidebar-primary-foreground"
            : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        );
        return item.to ? (
          <Link key={item.label} to={item.to} className={cls} onClick={onNavigate}>
            <item.icon className="size-4 shrink-0" />
            <span className="truncate">{item.label}</span>
          </Link>
        ) : (
          <button
            key={item.label}
            className={cls}
            onClick={() => {
              onNavigate?.();
              toast(item.label, { description: "این بخش در نسخه دمو نمایشی است." });
            }}
          >
            <item.icon className="size-4 shrink-0" />
            <span className="truncate">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

function SidebarBrand() {
  return (
    <Link to="/" className="mb-6 flex items-center gap-2.5 px-1">
      <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-leaf text-leaf-foreground">
        <Leaf className="size-5" />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-sm font-extrabold text-sidebar-foreground">
          سامانه هوشمند باغبان
        </span>
        <span className="block truncate text-[11px] text-sidebar-foreground/55">
          مدیریت کشاورزان و باغ‌ها
        </span>
      </span>
    </Link>
  );
}

export function SmartShell({ children }: { children: ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col justify-between overflow-y-auto bg-sidebar p-4 lg:flex">
        <div>
          <SidebarBrand />
          <NavList />
        </div>
        <button
          onClick={() => toast("خروج", { description: "دمو — بدون احراز هویت واقعی." })}
          className="mt-6 flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <LogOut className="size-4" />
          خروج
        </button>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 border-b bg-surface/95 backdrop-blur-sm">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
            <button
              aria-label="منو"
              onClick={() => setDrawerOpen(true)}
              className="grid size-9 place-items-center rounded-xl border border-border lg:hidden"
            >
              <Menu className="size-4" />
            </button>
            <button
              onClick={() => setPaletteOpen(true)}
              className="flex min-w-0 items-center gap-2 rounded-xl border border-border bg-muted/60 px-3 py-2 text-right text-xs text-muted-foreground transition-colors hover:bg-muted lg:max-w-sm"
            >
              <Search className="size-4 shrink-0" />
              <span className="truncate">جستجوی کشاورز، باغ یا عملیات…</span>
              <kbd className="mr-auto hidden shrink-0 rounded-md border border-border bg-surface px-1.5 py-0.5 text-[10px] sm:block">
                Ctrl K
              </kbd>
            </button>
            <div className="flex items-center gap-2">
              <NotificationsPanel />
              <UserPopover />
            </div>
          </div>
        </header>

        <main className="min-w-0 flex-1 px-4 py-6 pb-24 sm:px-6 lg:pb-8">{children}</main>
      </div>

      {/* Mobile sidebar drawer — liquid glass */}
      <DialogPrimitive.Root open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-bark/35 backdrop-blur-[5px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
          <DialogPrimitive.Content className="glass-panel-dark fixed inset-y-0 right-0 z-50 flex w-[82vw] max-w-xs flex-col rounded-r-[28px] p-4 text-sidebar-foreground duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right">
            <DialogPrimitive.Title className="sr-only">منوی سامانه</DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">
              پیمایش سامانه هوشمند
            </DialogPrimitive.Description>
            <div className="mb-2 flex items-center justify-between">
              <SidebarBrand />
              <DialogPrimitive.Close
                aria-label="بستن"
                className="mb-6 grid size-9 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/5"
              >
                <X className="size-4" />
              </DialogPrimitive.Close>
            </div>
            <div className="overflow-y-auto">
              <NavList onNavigate={() => setDrawerOpen(false)} />
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>

      {/* Mobile bottom navigation */}
      <nav className="glass-panel fixed inset-x-3 bottom-3 z-30 flex items-center justify-around rounded-2xl px-2 py-2 lg:hidden">
        {[
          { label: "داشبورد", icon: LayoutDashboard, to: "/smart", exact: true },
          { label: "کشاورزان", icon: Users, to: "/smart/farmers", exact: false },
          { label: "باغ‌ها", icon: Trees, to: "/smart/farmers/1", exact: false },
        ].map((i) => (
          <Link
            key={i.label}
            to={i.to}
            className="flex flex-1 flex-col items-center gap-1 rounded-xl py-1.5 text-[11px] text-muted-foreground"
            activeProps={{ className: "text-primary font-semibold" }}
            activeOptions={{ exact: i.exact }}
          >
            <i.icon className="size-4" />
            {i.label}
          </Link>
        ))}
        <button
          onClick={() => setPaletteOpen(true)}
          className="flex flex-1 flex-col items-center gap-1 rounded-xl py-1.5 text-[11px] text-muted-foreground"
        >
          <Search className="size-4" />
          جستجو
        </button>
      </nav>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </div>
  );
}
