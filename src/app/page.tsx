import Link from 'next/link'
import {
  ArrowRight, BellRing, CalendarCheck, CheckCheck, FileText, HeartPulse, Languages, MessageCircle,
  Moon, ShieldCheck, Sparkles, Stethoscope, UploadCloud, Activity, Smartphone, Lock,
} from 'lucide-react'
import { siteConfig } from '@/config/site'
import { ThemeToggle } from '@/components/theme/theme-toggle'

export const metadata = {
  title: { absolute: `${siteConfig.name} — Post-discharge care on WhatsApp` },
  description:
    'CareLoop keeps hospitals connected to patients after discharge: care plans, nightly check-ins and instant nurse escalation, all on WhatsApp, in the patient’s own language.',
}

const STEPS = [
  {
    icon: UploadCloud,
    title: 'Drop the discharge letter',
    body: 'The nurse uploads the PDF. AI reads medicines, follow-ups and warning signs into a form — nothing is sent yet.',
  },
  {
    icon: ShieldCheck,
    title: 'Review and approve',
    body: 'A clinician checks every detail and approves once. Nothing reaches the patient without a human sign-off.',
  },
  {
    icon: MessageCircle,
    title: 'Care continues on WhatsApp',
    body: 'The patient gets their care plan in their language, a check-in every night, and answers drawn only from their own instructions.',
  },
]

const FEATURES = [
  {
    icon: FileText,
    title: 'Document-first intake',
    body: 'Discharge PDFs become structured care plans in seconds — demographics, medications, appointments and red flags.',
  },
  {
    icon: Languages,
    title: 'Speaks their language',
    body: 'Arabic, English, Hindi, Tamil and Tagalog. Instructions patients actually understand, not just receive.',
  },
  {
    icon: Moon,
    title: 'Nightly check-ins',
    body: 'One gentle message each evening: medicines taken? How are you feeling? Adherence tracked automatically.',
  },
  {
    icon: BellRing,
    title: 'Instant escalation',
    body: 'Chest pain, breathlessness, a fever — warning signs raise a nurse alert the moment they are reported.',
  },
  {
    icon: CalendarCheck,
    title: 'Follow-ups that happen',
    body: 'Appointments are booked, confirmed and rescheduled right in the chat, so fewer patients slip through.',
  },
  {
    icon: Lock,
    title: 'Built for hospitals',
    body: 'Multi-tenant with row-level security, role-based access and a full audit trail of every conversation.',
  },
]

const STATS = [
  { value: '0', label: 'apps for patients to install' },
  { value: '5', label: 'languages out of the box' },
  { value: '24/7', label: 'warning-sign monitoring' },
  { value: '1', label: 'click to approve and send' },
]

const LANGUAGES = [
  { word: 'مرحبا', name: 'Arabic' },
  { word: 'Hello', name: 'English' },
  { word: 'नमस्ते', name: 'Hindi' },
  { word: 'வணக்கம்', name: 'Tamil' },
  { word: 'Kumusta', name: 'Tagalog' },
]

function Logo() {
  return (
    <span className="flex items-center gap-2 font-semibold tracking-tight">
      <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-teal text-brand-foreground shadow-md shadow-brand/30">
        <HeartPulse className="size-4.5" />
      </span>
      {siteConfig.name}
    </span>
  )
}

function Bubble({ from, children, time }: { from: 'clinic' | 'patient'; children: React.ReactNode; time: string }) {
  const patient = from === 'patient'
  return (
    <div className={patient ? 'flex justify-end' : 'flex justify-start'}>
      <div
        className={
          'max-w-[82%] rounded-2xl px-3 py-2 text-[13px] leading-snug shadow-sm ' +
          (patient
            ? 'rounded-br-sm bg-success-soft text-foreground'
            : 'rounded-bl-sm bg-card text-card-foreground')
        }
      >
        {children}
        <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
          {time}
          {patient && <CheckCheck className="size-3 text-info" />}
        </span>
      </div>
    </div>
  )
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[300px] motion-safe:animate-landing-float">
      <div className="rounded-[2.6rem] border border-border bg-foreground/90 p-2.5 shadow-2xl shadow-brand/30">
        <div className="overflow-hidden rounded-[2.1rem] bg-muted">
          <div className="flex items-center gap-3 bg-success px-4 pb-3 pt-6 text-success-foreground">
            <span className="flex size-9 items-center justify-center rounded-full bg-white/20">
              <HeartPulse className="size-4.5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">City Hospital Care</p>
              <p className="text-[11px] opacity-80">online</p>
            </div>
          </div>
          <div className="space-y-2.5 px-3 py-4">
            <Bubble from="clinic" time="20:00">
              Good evening Fatima. Did you take your evening medicines today?
              <span className="mt-2 grid grid-cols-2 gap-1.5">
                <span className="rounded-lg border border-border py-1 text-center text-[12px] font-medium text-info">Yes, all</span>
                <span className="rounded-lg border border-border py-1 text-center text-[12px] font-medium text-info">Not yet</span>
              </span>
            </Bubble>
            <Bubble from="patient" time="20:02">Yes, all of them</Bubble>
            <Bubble from="clinic" time="20:02">Wonderful. How are you feeling tonight?</Bubble>
            <Bubble from="patient" time="20:04">A bit short of breath when I lie down</Bubble>
            <Bubble from="clinic" time="20:04">
              Thank you for telling us. A nurse has been notified and will call you shortly.
            </Bubble>
          </div>
        </div>
      </div>

      <div className="absolute -left-28 -top-6 hidden w-52 rounded-xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur sm:block">
        <div className="flex items-center gap-2 text-xs font-semibold text-danger">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-danger opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-danger" />
          </span>
          New high-risk alert
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground">Fatima Al Hashimi reported breathlessness — heart failure care plan.</p>
      </div>

      <div className="absolute -right-16 -bottom-8 hidden w-44 rounded-xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur sm:block">
        <p className="text-[11px] font-medium text-muted-foreground">Check-ins answered</p>
        <p className="mt-0.5 text-2xl font-bold tracking-tight tnum">92%</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-brand to-teal" />
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-background text-foreground">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[760px] overflow-hidden">
        <div className="absolute -left-40 -top-40 size-[560px] rounded-full bg-brand/25 blur-3xl motion-safe:animate-landing-glow" />
        <div className="absolute -right-32 top-20 size-[480px] rounded-full bg-teal/25 blur-3xl motion-safe:animate-landing-glow [animation-delay:-4s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <Link href="/" aria-label={`${siteConfig.name} home`}><Logo /></Link>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
            <a href="#features" className="transition-colors hover:text-foreground">Features</a>
            <a href="#languages" className="transition-colors hover:text-foreground">Languages</a>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/dashboard"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Open dashboard <ArrowRight className="size-4" />
            </Link>
          </div>
        </nav>
      </header>

      <main className="relative">
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-16 md:px-8 lg:grid-cols-[1.1fr_1fr] lg:pt-24">
          <div className="motion-safe:animate-landing-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
              <Sparkles className="size-3.5" /> AI-assisted post-discharge care · Built for the UAE
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Care doesn’t end at{' '}
              <span className="bg-gradient-to-r from-brand via-teal to-success bg-clip-text text-transparent">discharge.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              CareLoop turns a discharge letter into a living care plan on WhatsApp — in the patient’s own language.
              Nightly check-ins, answers from their own instructions, and a nurse alerted the moment something is wrong.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/dashboard"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-brand to-teal px-6 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/30 transition-transform hover:-translate-y-0.5"
              >
                Try the live demo
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#how"
                className="inline-flex h-12 items-center rounded-full border border-border bg-card/60 px-6 text-sm font-semibold backdrop-blur transition-colors hover:bg-card"
              >
                See how it works
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {['No app for patients', 'Nurse approves every plan', 'Hospital-grade security'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="flex size-5 items-center justify-center rounded-full bg-success-soft text-success">
                    <CheckCheck className="size-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="motion-safe:animate-landing-rise [animation-delay:150ms]">
            <PhoneMockup />
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-sm md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-card px-6 py-8 text-center">
                <p className="bg-gradient-to-br from-brand to-teal bg-clip-text text-4xl font-bold tracking-tight text-transparent tnum">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Problem */}
        <section className="mx-auto max-w-3xl px-5 pt-28 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">The gap</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Hospitals lose sight of patients the moment they walk out the door.
          </h2>
          <p className="mt-5 text-pretty text-lg text-muted-foreground">
            Instructions are forgotten, medicines are skipped, follow-ups are missed and warning signs go unreported —
            until the patient is back in the emergency room. CareLoop closes that loop, without adding hours of phone calls.
          </p>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-7xl scroll-mt-24 px-5 pt-24 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10"
              >
                <span className="absolute right-6 top-5 text-6xl font-bold text-muted/80 transition-colors group-hover:text-brand-soft">
                  {i + 1}
                </span>
                <span className="relative flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-teal text-brand-foreground shadow-md shadow-brand/30">
                  <s.icon className="size-5.5" />
                </span>
                <h3 className="relative mt-6 text-lg font-semibold">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-7xl scroll-mt-24 px-5 pt-28 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Everything in one loop</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              A clinical dashboard for nurses. Just WhatsApp for patients.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur transition-colors hover:border-brand/40">
                <span className="flex size-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Split: nurse vs patient */}
        <section className="mx-auto max-w-7xl px-5 pt-28 md:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-gradient-to-br from-brand-tint to-card p-8">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
                <Stethoscope className="size-4" /> For care teams
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">See who needs you, right now.</h3>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {[
                  'Live alerts ranked by severity, with the patient’s own words',
                  'Medication adherence and check-in trends per patient',
                  'Appointment funnel from booked to attended',
                  'Every WhatsApp conversation in one transcript',
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <Activity className="mt-0.5 size-4 shrink-0 text-brand" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-gradient-to-br from-success-soft to-card p-8">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-success">
                <Smartphone className="size-4" /> For patients
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">Nothing new to learn.</h3>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {[
                  'No downloads, accounts or passwords — just WhatsApp',
                  'Care plan in plain language they can read',
                  'Ask questions any time, answered from their instructions',
                  'Send a voice note — it is understood too',
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <CheckCheck className="mt-0.5 size-4 shrink-0 text-success" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section id="languages" className="mx-auto max-w-7xl scroll-mt-24 px-5 pt-28 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Multilingual by design</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Every patient hears from their hospital in their own language.
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {LANGUAGES.map((l) => (
              <div
                key={l.name}
                className="w-40 rounded-2xl border border-border bg-card px-5 py-6 shadow-sm transition-transform hover:-translate-y-1"
              >
                <p className="text-2xl font-semibold">{l.word}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{l.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 py-28 md:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand to-teal px-8 py-16 text-center text-brand-foreground shadow-2xl shadow-brand/30 sm:px-16">
            <div aria-hidden className="absolute -right-20 -top-20 size-72 rounded-full bg-white/10 blur-2xl" />
            <div aria-hidden className="absolute -bottom-24 -left-10 size-72 rounded-full bg-white/10 blur-2xl" />
            <h2 className="relative text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Close the loop on every discharge.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-pretty opacity-90">
              Add a sample patient from a discharge letter and watch the care plan arrive on WhatsApp — in under a minute.
            </p>
            <Link
              href="/dashboard"
              className="group relative mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-brand shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Open the dashboard
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row md:px-8">
          <Logo />
          <p>Post-discharge patient follow-up over WhatsApp · © {new Date().getFullYear()} {siteConfig.name}</p>
        </div>
      </footer>
    </div>
  )
}
