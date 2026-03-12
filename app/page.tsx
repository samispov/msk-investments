export default function MSKInvestmentsWebsite() {
  const focusAreas = [
    {
      title: "Portfolio Acquisitions",
      text: "Targeting residential assets where scale, structure, or timing creates a strategic entry point.",
    },
    {
      title: "Value-Add Refurbishment",
      text: "Improving operational performance and rental quality through disciplined refurbishment.",
    },
    {
      title: "Long-Term Income",
      text: "Prioritising resilient cash flow and stable asset performance over short-term noise.",
    },
    {
      title: "Social Housing Alignment",
      text: "Exploring housing models that combine strong fundamentals with meaningful social impact.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Source",
      text: "We focus on residential opportunities accessed through relationships, market research, and strategic acquisition channels.",
    },
    {
      number: "02",
      title: "Acquire",
      text: "We assess each asset against disciplined criteria, with attention to downside protection and value creation potential.",
    },
    {
      number: "03",
      title: "Improve",
      text: "Where appropriate, assets are repositioned through refurbishment and operational improvements to strengthen performance.",
    },
    {
      number: "04",
      title: "Operate",
      text: "We aim to create sustainable long-term income through professional asset management and carefully considered strategy.",
    },
  ];

  const principles = [
    "Disciplined acquisitions",
    "Long-term decision making",
    "Alignment with investor interests",
    "Focus on downside protection",
  ];

  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(180,145,77,0.16),transparent_30%)] pointer-events-none" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b1020]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#b4914d]/40 bg-white/5 text-lg font-semibold tracking-[0.2em] text-[#d7bc7a] shadow-lg shadow-black/20">
              MSK
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.35em] text-white">MSK</p>
              <p className="text-xs uppercase tracking-[0.28em] text-[#d7bc7a]">Investments</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#focus" className="transition hover:text-white">Focus</a>
            <a href="#strategy" className="transition hover:text-white">Strategy</a>
            <a href="#philosophy" className="transition hover:text-white">Philosophy</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-[#b4914d]/50 bg-[#b4914d] px-5 py-2 text-sm font-medium text-[#0b1020] transition hover:opacity-90"
          >
            Investor Enquiries
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-[#b4914d]/25 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#d7bc7a]">
                Residential property investment
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Strategic residential property investments built on discipline and long-term thinking.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
                MSK Investments focuses on acquiring and repositioning residential property across the UK, with an emphasis on value creation, resilient income, and a professional investor-led approach.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#strategy"
                  className="rounded-full bg-[#b4914d] px-6 py-3 text-sm font-medium text-[#0b1020] transition hover:opacity-90"
                >
                  Our Investment Strategy
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-[2rem] bg-[#b4914d]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#10182d] p-8">
                  <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-[#d7bc7a]">MSK Investments</p>
                      <p className="mt-2 text-2xl font-semibold text-white">Investment Approach</p>
                    </div>
                    <div className="rounded-full border border-[#b4914d]/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#d7bc7a]">
                      UK Focused
                    </div>
                  </div>

                  <div className="space-y-5">
                    {[
                      "Strategic acquisitions",
                      "Value-add repositioning",
                      "Long-term income focus",
                    ].map((item) => (
                      <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                        <span className="text-sm text-white/85">{item}</span>
                        <span className="h-2.5 w-2.5 rounded-full bg-[#d7bc7a]" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/45">Positioning</p>
                      <p className="mt-3 text-lg font-medium text-white">Investor-focused</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/45">Tone</p>
                      <p className="mt-3 text-lg font-medium text-white">Institutional & clean</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="focus" className="border-t border-white/10 bg-white/[0.02] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.28em] text-[#d7bc7a]">What we do</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                A focused approach to residential property investment.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                We keep the model simple: acquire well, improve selectively, and operate with long-term discipline.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-[#11192d] p-7 shadow-lg shadow-black/10"
                >
                  <div className="mb-6 h-12 w-12 rounded-2xl border border-[#b4914d]/25 bg-[#b4914d]/10" />
                  <h3 className="text-xl font-medium text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="strategy" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#d7bc7a]">Investment strategy</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  A clear four-step investment process.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/70">
                  Our strategy is built around selectivity, thoughtful execution, and consistent asset stewardship.
                </p>
              </div>

              <div className="grid gap-5">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:border-[#b4914d]/35 hover:bg-white/[0.06]"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#b4914d]/30 bg-[#b4914d]/10 text-sm font-semibold tracking-[0.2em] text-[#d7bc7a]">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white">{step.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-white/65">{step.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="philosophy" className="border-t border-white/10 bg-white/[0.02] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#d7bc7a]">Our philosophy</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Built for credibility, discipline, and long-term alignment.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  We believe the strongest investment decisions are rarely the noisiest. Our approach centres on disciplined buying, responsible execution, and a clear focus on protecting investor capital while building durable value.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[#10182d] p-8 shadow-xl shadow-black/20">
                <div className="space-y-4">
                  {principles.map((principle) => (
                    <div
                      key={principle}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-[#d7bc7a]" />
                      <p className="text-sm text-white/85">{principle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#d7bc7a]">Investor enquiries</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Start the conversation.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
                  We work with a select group of private investors interested in residential property strategies and long-term value creation.
                </p>
                <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm leading-7 text-white/60">
                    For launch, you can replace this form with your preferred contact method, Calendly link, or a connected form service such as Formspree, Tally, or HubSpot.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[#11192d] p-8 shadow-xl shadow-black/20">
                <form className="grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="grid gap-2 text-sm text-white/75">
                      Full name
                      <input
                        type="text"
                        placeholder="Your name"
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#b4914d]/50"
                      />
                    </label>
                    <label className="grid gap-2 text-sm text-white/75">
                      Email
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#b4914d]/50"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="grid gap-2 text-sm text-white/75">
                      Phone
                      <input
                        type="tel"
                        placeholder="Optional"
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#b4914d]/50"
                      />
                    </label>
                    <label className="grid gap-2 text-sm text-white/75">
                      Investor type
                      <select className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#b4914d]/50">
                        <option className="bg-[#11192d]">Private investor</option>
                        <option className="bg-[#11192d]">High-net-worth individual</option>
                        <option className="bg-[#11192d]">Family office</option>
                        <option className="bg-[#11192d]">Other</option>
                      </select>
                    </label>
                  </div>

                  <label className="grid gap-2 text-sm text-white/75">
                    Message
                    <textarea
                      rows={5}
                      placeholder="Tell us a little about your interest."
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#b4914d]/50"
                    />
                  </label>

                  <button
                    type="button"
                    className="mt-2 rounded-full bg-[#b4914d] px-6 py-3 text-sm font-medium text-[#0b1020] transition hover:opacity-90"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0a0f1d]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-medium text-white/75">MSK Investments</p>
            <p className="mt-1">Private residential property investment firm focused on value-add acquisitions across the UK.</p>
          </div>
          <p>© 2026 MSK Investments. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
