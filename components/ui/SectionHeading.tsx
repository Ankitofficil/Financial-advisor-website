import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <hr className={cn("horizon mt-4", align === "center" && "mx-auto")} />
      <h2 className="mt-5 text-h2">{title}</h2>
      {intro && <p className="mt-4 text-lead text-muted">{intro}</p>}
    </Reveal>
  );
}
