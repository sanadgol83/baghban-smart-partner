import * as PopoverPrimitive from "@radix-ui/react-popover";
import { LogOut, Settings, User } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function UserPopover({
  name = "محمد رضایی",
  role = "کارشناس ارشد",
  tone = "light",
}: {
  name?: string;
  role?: string;
  tone?: "light" | "dark";
}) {
  const items = [
    { label: "پروفایل", icon: User },
    { label: "تنظیمات", icon: Settings },
    { label: "خروج", icon: LogOut },
  ];

  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger
        className={cn(
          "flex items-center gap-2 rounded-xl border px-2 py-1.5 transition-colors",
          tone === "dark"
            ? "border-white/15 bg-white/5 text-white hover:bg-white/12"
            : "border-border bg-surface hover:bg-secondary",
        )}
      >
        <span className="grid size-6 place-items-center rounded-full bg-leaf text-[11px] font-bold text-leaf-foreground">
          {name.trim().charAt(0)}
        </span>
        <span className="hidden text-xs font-medium sm:block">{name}</span>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          sideOffset={10}
          className="glass-panel glass-sheen z-50 w-56 overflow-hidden rounded-2xl p-2 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
        >
          <div className="mb-1 flex items-center gap-3 rounded-xl px-2 py-2">
            <span className="grid size-9 place-items-center rounded-full bg-leaf text-sm font-bold text-leaf-foreground">
              {name.trim().charAt(0)}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold">{name}</span>
              <span className="block truncate text-xs text-muted-foreground">{role}</span>
            </span>
          </div>
          {items.map((i) => (
            <button
              key={i.label}
              onClick={() => toast(i.label, { description: "دمو — بدون احراز هویت واقعی." })}
              className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-right text-sm transition-colors hover:bg-white/65"
            >
              <i.icon className="size-4 text-muted-foreground" />
              {i.label}
            </button>
          ))}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
