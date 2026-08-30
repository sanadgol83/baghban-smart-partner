import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Search,
  Users,
  Trees,
  ClipboardPlus,
  Sparkles,
  BellRing,
  ShoppingBasket,
  Plus,
  CornerDownLeft,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

type Item = {
  id: string;
  label: string;
  hint: string;
  icon: React.ComponentType<{ className?: string }>;
  action: "navigate" | "toast";
  to?: string;
};

const ITEMS: Item[] = [
  { id: "c1", label: "جستجوی کشاورز", hint: "کشاورزان", icon: Users, action: "navigate", to: "/smart/farmers" },
  { id: "c2", label: "جستجوی باغ", hint: "باغ‌ها و مزارع", icon: Trees, action: "navigate", to: "/smart/farmers/1" },
  { id: "c3", label: "ثبت بازدید جدید", hint: "عملیات میدانی", icon: ClipboardPlus, action: "toast" },
  { id: "c4", label: "افزودن باغ", hint: "عملیات", icon: Plus, action: "toast" },
  { id: "c5", label: "ایجاد توصیه", hint: "توصیه هوشمند", icon: Sparkles, action: "toast" },
  { id: "c6", label: "مشاهده هشدارها", hint: "داشبورد", icon: BellRing, action: "navigate", to: "/smart" },
  { id: "c7", label: "مشاهده محصولات", hint: "فروشگاه", icon: ShoppingBasket, action: "navigate", to: "/" },
];

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const results = ITEMS.filter((i) => i.label.includes(query.trim()));

  const run = (item: Item) => {
    onOpenChange(false);
    setQuery("");
    if (item.action === "navigate" && item.to) {
      navigate({ to: item.to });
    } else {
      toast.success(item.label, { description: "این عملیات در نسخه دمو شبیه‌سازی شده است." });
    }
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-bark/25 backdrop-blur-[3px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <DialogPrimitive.Content className="glass-panel glass-sheen fixed left-1/2 top-[16vh] z-50 w-[92vw] max-w-xl -translate-x-1/2 overflow-hidden rounded-3xl p-0 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95">
          <DialogPrimitive.Title className="sr-only">جستجوی سریع</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            چه کاری می‌خواهید انجام دهید؟
          </DialogPrimitive.Description>

          <div className="flex items-center gap-3 border-b border-white/40 px-5 py-4">
            <Search className="size-4 shrink-0 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="چه کاری می‌خواهید انجام دهید؟"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="rounded-md border border-white/50 bg-white/50 px-1.5 py-0.5 text-[10px] text-muted-foreground">
              ESC
            </kbd>
          </div>

          <div className="max-h-[52vh] overflow-y-auto p-2">
            {results.length === 0 && (
              <p className="px-4 py-8 text-center text-sm text-muted-foreground">موردی یافت نشد</p>
            )}
            {results.map((item) => (
              <button
                key={item.id}
                onClick={() => run(item)}
                className="group flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-right transition-colors hover:bg-white/60"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <item.icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">{item.label}</span>
                  <span className="block truncate text-xs text-muted-foreground">{item.hint}</span>
                </span>
                <CornerDownLeft className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
