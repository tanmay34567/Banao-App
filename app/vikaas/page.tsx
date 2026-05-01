import { TopBar } from "@/components/playbook/top-bar";
import { Compass, Layers3, BookOpen, Sparkles, ArrowUpRight } from "lucide-react";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopBar />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-[1100px] px-4 py-12 md:px-6">
          <div className="mb-2 text-[11px] uppercase tracking-widest text-info">Vikaas · Learn</div>
          <h1 className="font-display text-4xl font-semibold tracking-tight">Concepts &amp; frameworks</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            The thinking behind the system. Less deal-specific, more how-to-think. Use these as short, focused reads — five minutes each.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-[0_8px_30px_-12px_hsl(var(--info)/0.25)]">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-info-soft text-info">
                <Compass className="h-4 w-4" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold">Worldview Selling</h2>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">
                Sell the lens through which the buyer sees the problem before selling the solution.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-info">
                Read concept <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </article>

            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-[0_8px_30px_-12px_hsl(var(--info)/0.25)]">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-info-soft text-info">
                <Layers3 className="h-4 w-4" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold">Mobilizers vs Talkers</h2>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">
                Mobilizers move deals. Talkers consume your time. Learn to spot the difference within two calls.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-info">
                Read concept <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </article>

            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-[0_8px_30px_-12px_hsl(var(--info)/0.25)]">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-info-soft text-info">
                <BookOpen className="h-4 w-4" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold">Earning the right to ask</h2>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">
                Every uncomfortable question is preceded by a deposit of insight. No deposit, no question.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-info">
                Read concept <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </article>

            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-[0_8px_30px_-12px_hsl(var(--info)/0.25)]">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-info-soft text-info">
                <Sparkles className="h-4 w-4" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold">Loss aversion in B2B</h2>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">
                Buyers fear regret more than they crave gain. Frame inaction as the riskier choice.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-info">
                Read concept <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </article>

            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-[0_8px_30px_-12px_hsl(var(--info)/0.25)]">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-info-soft text-info">
                <Compass className="h-4 w-4" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold">The &apos;why now&apos; triad</h2>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">
                Trigger event + cost of inaction + executive air-cover. Without all three, you have a dream, not a deal.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-info">
                Read concept <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </article>

            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-[0_8px_30px_-12px_hsl(var(--info)/0.25)]">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-info-soft text-info">
                <Layers3 className="h-4 w-4" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold">Power vs Authority</h2>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">
                Authority signs the contract. Power decides whether the contract reaches the desk.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-info">
                Read concept <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </article>
          </div>
        </div>
      </main>
      <footer className="mt-12 border-t border-border bg-background">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-4 text-xs text-muted-foreground md:px-6">
          <div className="flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
              B
            </span>
            <span>B2B Sales OS — built for sellers who close</span>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <span>↻ navigate steps</span>
            <span>Changelog</span>
            <span>Methodology</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
