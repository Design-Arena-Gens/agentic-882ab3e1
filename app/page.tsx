import Link from "next/link";

const highlights = [
  {
    title: "Ambient Greeting",
    description:
      "A gentle arrival sequence that greets visitors with atmospheric visuals and a warm hello."
  },
  {
    title: "Adaptive Mood",
    description: "Toggle the aura to shift between dawn and midnight palettes with one tap."
  },
  {
    title: "Deploy Ready",
    description: "Optimized for instant Vercel deployment with TypeScript, Tailwind, and App Router."
  }
];

const timeline = [
  {
    label: "Start",
    body: "You arrive with a simple “hi”. Our agentic core blooms to life."
  },
  {
    label: "Immerse",
    body: "Ambient gradients, floating particles, and a responsive canvas welcome you in."
  },
  {
    label: "Flow",
    body: "Get nudged toward your next action with gentle cues and a crafted layout."
  }
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden pb-24">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full orb" />
      <div className="pointer-events-none absolute right-0 top-64 h-[28rem] w-[28rem] rounded-full orb" />

      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pt-32">
        <span className="w-fit rounded-full border border-primary/20 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80 shadow-sm glass">
          Agentic Greeting
        </span>
        <h1 className="mt-8 max-w-3xl font-heading text-5xl leading-tight text-gradient md:text-7xl">
          hi, welcome to the ambient hello canvas
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral/80 md:text-xl">
          This microsite translates a simple greeting into an immersive welcome sequence. Crafted with
          Next.js, animated gradients, and a sprinkle of agentic flair.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#experience"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/50"
          >
            Experience the Flow
          </Link>
          <Link
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral/10 bg-white/70 px-6 py-3 text-sm font-semibold text-neutral transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
          >
            Powered by Vercel
          </Link>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto mt-24 w-full max-w-6xl px-6"
        aria-labelledby="experience-title"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <article className="glass relative overflow-hidden rounded-3xl p-10">
            <div className="pointer-events-none absolute -right-10 top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
            <h2 id="experience-title" className="font-heading text-3xl text-neutral md:text-4xl">
              A greeting with momentum
            </h2>
            <p className="mt-4 text-neutral/80">
              This canvas pairs luminous gradients with meaningful copy. Each highlight below captures
              how a single word can spark an entire flow.
            </p>
            <ul className="mt-8 space-y-6">
              {highlights.map((highlight) => (
                <li key={highlight.title} className="rounded-2xl border border-white/40 bg-white/50 p-6">
                  <h3 className="font-heading text-xl text-neutral">{highlight.title}</h3>
                  <p className="mt-3 text-neutral/70">{highlight.description}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="glass relative flex flex-col justify-between overflow-hidden rounded-3xl p-10">
            <div className="pointer-events-none absolute -top-32 left-16 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
            <div className="pointer-events-none absolute bottom-10 right-10 h-44 w-44 rounded-full bg-accent/30 blur-3xl" />
            <h2 className="font-heading text-3xl text-neutral md:text-4xl">Flow timeline</h2>
            <ol className="mt-6 space-y-6">
              {timeline.map((story) => (
                <li key={story.label} className="relative pl-10 text-neutral/80">
                  <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-neutral/20 bg-white/80 font-heading text-sm text-neutral">
                    {story.label}
                  </span>
                  <p>{story.body}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 rounded-2xl border border-white/30 bg-white/40 p-6 text-sm text-neutral/70">
              By blending minimal copy with animated ambience, the experience remains focused on that
              first “hi” while encouraging deeper interaction.
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl px-6">
        <div className="glass relative rounded-3xl p-10 md:p-14">
          <div className="pointer-events-none absolute -top-24 right-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-10 h-48 w-48 rounded-full bg-accent/25 blur-3xl" />
          <h2 className="font-heading text-3xl text-neutral md:text-4xl">
            Ready to launch your own greeting?
          </h2>
          <p className="mt-4 max-w-2xl text-neutral/75">
            Fork this project, remix the mood, and deploy the experience in minutes. The agentic
            canvas is flexible enough for any origin story.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://github.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40"
            >
              Duplicate & Remix
            </Link>
            <Link
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral/10 bg-white/70 px-6 py-3 text-sm font-semibold text-neutral transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              Explore Next.js Docs
            </Link>
          </div>
        </div>
      </section>

      <footer className="mx-auto mt-24 w-full max-w-6xl px-6 text-sm text-neutral/60">
        Crafted autonomously with Next.js · Tailwind CSS · Agentic energy
      </footer>
    </main>
  );
}
