import {
  Compass,
  LineChart,
  Receipt,
  Scroll,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Compass,
  LineChart,
  Receipt,
  Scroll,
  ShieldCheck,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Compass;
  return <Cmp className={className} aria-hidden />;
}
