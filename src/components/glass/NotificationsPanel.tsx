import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Bell } from "lucide-react";
import { toast } from "sonner";
import { notifications } from "@/lib/mock";
import { cn } from "@/lib/utils";

export function NotificationsPanel({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger
        aria-label="اعلان‌ها"
        className={cn(
          "relative grid size-9 place-items-center rounded-xl border transition-colors",
          tone === "dark"
            ? "border-white/15 bg-white/5 text-white hover:bg-white/12"
            : "border-border bg-surface text-foreground hover:bg-secondary",
        )}
      >
        <Bell className="size-4" />
        <span className="pulse-dot absolute -top-0.5 -left-0.5 size-2.5 rounded-full bg-destructive" />
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          sideOffset={10}
          className="glass-panel glass-sheen z-50 w-[min(92vw,22rem)] overflow-hidden rounded-3xl p-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:fade-out-0"
        >
          <div className="flex items-center justify-between border-b border-white/40 px-4 py-3">
            <span className="text-sm font-semibold">اعلان‌های جدید</span>
            <span className="rounded-full bg-destructive/12 px-2 py-0.5 text-[11px] font-medium text-destructive">
              ۴ مورد
            </span>
          </div>
          <div className="max-h-80 overflow-y-auto p-2">
            {notifications.map((n) => (
              <button
                key={n.id}
                onClick={() => toast(n.title, { description: n.body })}
                className="flex w-full gap-3 rounded-2xl p-2.5 text-right transition-colors hover:bg-white/60"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/70 text-base">
                  {n.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-medium">{n.title}</span>
                  <span className="block truncate text-xs text-muted-foreground">{n.body}</span>
                  <span className="mt-1 block text-[11px] text-muted-foreground/80">{n.time}</span>
                </span>
              </button>
            ))}
          </div>
          <div className="border-t border-white/40 px-4 py-2.5 text-center">
            <button
              onClick={() => toast("همه اعلان‌ها خوانده شد")}
              className="text-xs font-medium text-primary hover:underline"
            >
              علامت‌گذاری همه به‌عنوان خوانده‌شده
            </button>
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
