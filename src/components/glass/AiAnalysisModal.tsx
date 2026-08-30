import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Check, Loader2, Sparkles, X, ArrowLeft, ShoppingBasket } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { aiActions, aiResult, aiSteps } from "@/lib/mock";
import { Button } from "@/components/ui/button";

export function AiAnalysisModal({
  open,
  onOpenChange,
  orchardName = "باغ گیلاس آقای حسینی",
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  orchardName?: string;
}) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!open) {
      setStep(0);
      return;
    }
    const timers = aiSteps.map((_, i) =>
      setTimeout(() => setStep(i + 1), 700 * (i + 1)),
    );
    return () => timers.forEach(clearTimeout);
  }, [open]);

  const done = step >= aiSteps.length;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-bark/30 backdrop-blur-[6px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <DialogPrimitive.Content className="glass-panel glass-sheen fixed left-1/2 top-1/2 z-50 max-h-[88vh] w-[94vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[28px] p-0 duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:fade-out-0">
          <div className="flex items-start justify-between gap-4 border-b border-white/40 px-6 py-5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <Sparkles className="size-5" />
              </span>
              <div className="min-w-0">
                <DialogPrimitive.Title className="truncate text-base font-bold">
                  تحلیل هوشمند باغ
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="truncate text-xs text-muted-foreground">
                  {orchardName}
                </DialogPrimitive.Description>
              </div>
            </div>
            <DialogPrimitive.Close
              aria-label="بستن"
              className="grid size-8 shrink-0 place-items-center rounded-xl border border-white/50 bg-white/50 transition-colors hover:bg-white/80"
            >
              <X className="size-4" />
            </DialogPrimitive.Close>
          </div>

          <div className="space-y-5 px-6 py-6">
            <ol className="space-y-2.5">
              {aiSteps.map((s, i) => {
                const state = step > i ? "done" : step === i ? "active" : "idle";
                return (
                  <li
                    key={s}
                    className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/45 px-4 py-3"
                  >
                    <span
                      className={
                        "grid size-6 shrink-0 place-items-center rounded-full " +
                        (state === "done"
                          ? "bg-leaf text-leaf-foreground"
                          : state === "active"
                            ? "bg-primary/12 text-primary"
                            : "bg-muted text-muted-foreground")
                      }
                    >
                      {state === "done" ? (
                        <Check className="size-3.5" />
                      ) : state === "active" ? (
                        <Loader2 className="size-3.5 animate-spin" />
                      ) : (
                        <span className="size-1.5 rounded-full bg-current" />
                      )}
                    </span>
                    <span
                      className={
                        "text-sm " +
                        (state === "idle" ? "text-muted-foreground" : "font-medium text-foreground")
                      }
                    >
                      {s}
                    </span>
                  </li>
                );
              })}
            </ol>

            {done && (
              <div className="animate-fade-up space-y-5">
                <div className="rounded-2xl border border-primary/15 bg-primary/6 p-5">
                  <h3 className="mb-2 text-sm font-bold text-primary">نتیجه تحلیل</h3>
                  <p className="text-sm leading-7 text-foreground/85">{aiResult}</p>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-bold">اقدامات پیشنهادی</h3>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {aiActions.map((a) => (
                      <div
                        key={a.title}
                        className="rounded-2xl border border-white/50 bg-white/55 p-4"
                      >
                        <p className="text-[13px] font-semibold">{a.title}</p>
                        <p className="mt-1 text-xs leading-6 text-muted-foreground">{a.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <Button
                    onClick={() => toast("گزارش کامل تحلیل", { description: "نسخه دمو." })}
                  >
                    مشاهده تحلیل کامل
                    <ArrowLeft className="size-4" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => toast("۴ محصول مرتبط با این تحلیل پیشنهاد شد")}
                  >
                    <ShoppingBasket className="size-4" />
                    مشاهده محصولات مرتبط
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
