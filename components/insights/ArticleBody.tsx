import { Reveal } from "@/components/ui/Reveal";
import type { Article } from "@/lib/insights";

export function ArticleBody({ body }: { body: Article["body"] }) {
  return (
    <div className="space-y-6">
      {body.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="pt-4 text-h3">
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="text-[1.075rem] leading-[1.75] text-ink/85">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5 pl-1">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-ink/85">
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <Reveal key={i}>
                <blockquote className="my-2 rounded-r-lg border-l-[3px] border-gold bg-white/[0.05] py-4 pl-5 pr-4">
                  <p className="font-serif text-[1.2rem] leading-relaxed text-slate">
                    {block.text}
                  </p>
                </blockquote>
              </Reveal>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
