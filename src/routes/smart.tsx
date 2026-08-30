import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SmartShell } from "@/components/smart/SmartShell";

export const Route = createFileRoute("/smart")({
  component: SmartLayout,
});

function SmartLayout() {
  return (
    <SmartShell>
      <Outlet />
    </SmartShell>
  );
}
