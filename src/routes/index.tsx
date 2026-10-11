import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties } from "react";
import {
  ArrowUpRight, Award, BarChart3, Briefcase, Download, ExternalLink, GraduationCap,
  Linkedin, Mail, MapPin, Menu, Phone, Settings2, Users, X,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { FinanceOpsIllustration, GrowthLines } from "@/components/Illustrations";
import { Logo } from "@/components/Logo";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { profile as p } from "@/content/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${p.name} — Finance & Operations Portfolio` },
      { name: "description", content: p.tagline },
      { property: "og:title", content: `${p.name} — Portfolio` },
      { property: "og:description", content: p.tagline },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const nav = ["About", "Experience", "Education", "Skills", "Projects", "Certifications", "Contact"];
const compIcons = [BarChart3, Settings2, Users];
const focusAreas = [
  "Financial Analysis", "Budgeting", "Operations Management", "MS Excel", "Business Strategy",
  "Market Research", "Process Coordination", "Data-Driven Decisions", "Team Collaboration",
];
const resumeHref = `${import.meta.env.BASE_URL ?? "/"}${p.resume.replace(/^\//, "")}`;
// Stagger delay for reveal animations within a grid.
const delay = (i: number) => ({ "--d": `${i * 90}ms` }) as CSSProperties;

function Heading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="reveal mb-5 sm:mb-8 md:mb-10">
      <p className="kicker">{kicker}</p>
      <h2 className="mt-2 font-display text-[1.75rem] sm:mt-3 sm:text-4xl md:text-5xl">{title}</h2>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  useScrollReveal();

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 10);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="glow-orb glow-a" />
      <div className="glow-orb glow-b" />

      <header className={`sticky top-0 z-30 border-b bg-background/70 backdrop-blur-xl transition-shadow ${scrolled ? "border-border/60 shadow-sm" : "border-transparent"}`}>
        <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
        <div className={`mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 transition-[padding] sm:px-6 ${scrolled ? "py-2.5" : "py-4"}`}>
          <a href="#" className="flex items-center gap-2.5 font-display text-lg font-semibold" aria-label={`${p.name} — home`}>
            <Logo className="logo-spin" />
            <span className="hidden sm:inline">Manjunatha<span className="text-gradient"> A.</span></span>
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground lg:flex">
            {nav.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="nav-link transition-colors hover:text-foreground">{n}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={resumeHref} download className="btn-primary px-4 py-2 text-sm sm:px-5">
              <Download className="h-4 w-4" /> Resume
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-[var(--glass)] lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <nav className={`mobile-menu lg:hidden ${menuOpen ? "is-open" : ""}`}>
          <div className="mx-auto grid max-w-6xl gap-1 px-4 pb-4 sm:px-6">
            {nav.map((n, i) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
                className="rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-[color-mix(in_oklab,var(--primary)_10%,transparent)]"
                style={delay(i)}
              >
                {n}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pb-10 pt-6 sm:px-6 sm:pb-16 sm:pt-10 md:gap-14 md:grid-cols-[1.3fr_1fr] md:pb-20 md:pt-24">
        <div className="animate-rise">
          <span className="pill"><span className="dot" /> Open to Finance & Operations roles</span>
          <h1 className="mt-4 font-display sm:mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-7xl">
            Hi, I'm <span className="text-gradient">{p.name}</span>
          </h1>
          <p className="mt-3 text-lg font-medium text-foreground/80">{p.title}</p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> {p.location}
          </p>
          <p className="mt-4 max-w-xl text-muted-foreground sm:mt-5">{p.tagline}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap">
            <a href={resumeHref} download className="btn-primary justify-center px-3 text-sm sm:px-[1.4rem] sm:text-base"><Download className="h-4 w-4" /> Download Resume</a>
            <a href="#contact" className="btn-ghost justify-center px-3 text-sm sm:px-[1.3rem] sm:text-base"><Mail className="h-4 w-4" /> Get in touch</a>
          </div>
          <div className="mt-8 grid max-w-md grid-cols-3 sm:mt-10 gap-3 sm:gap-4">
            {p.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold text-gradient sm:text-3xl">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Photo slot (set `photo` in profile.ts): on top on mobile, right column from md up */}
        <div className="order-first mx-auto w-full max-w-[11rem] animate-rise [animation-delay:150ms] sm:max-w-xs md:order-none md:max-w-sm">
          <div className="float-slow photo-ring">
            <div className="photo-inner aspect-[4/5]">
              {p.photo ? (
                <img src={p.photo} alt={p.name} className="h-full w-full object-cover object-top" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-1 text-muted-foreground sm:gap-2">
                  <span className="font-display text-5xl font-semibold text-gradient sm:text-7xl">MA</span>
                  <span className="text-[10px] uppercase tracking-[0.25em] sm:text-xs">Photo coming soon</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="marquee border-y border-border/60 bg-[var(--glass)] py-3 sm:py-4" aria-label="Focus areas">
        <div className="marquee-track">
          {[...focusAreas, ...focusAreas].map((f, i) => (
            <span key={i} aria-hidden={i >= focusAreas.length} className="flex items-center gap-6 whitespace-nowrap font-display text-sm font-semibold text-muted-foreground sm:text-base">
              {f} <span className="text-gradient">✦</span>
            </span>
          ))}
        </div>
      </div>

      <main className="mx-auto max-w-6xl space-y-14 px-4 pb-14 pt-12 sm:space-y-20 sm:px-6 sm:pb-20 sm:pt-20 md:space-y-28 md:pb-28 md:pt-28">
        <section id="about" className="reveal glass scroll-mt-24 grid items-center gap-8 overflow-hidden p-5 sm:p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
          <div>
            <p className="kicker">About me</p>
            <p className="mt-3 text-base leading-relaxed sm:mt-4 sm:text-xl md:text-2xl">{p.summary}</p>
          </div>
          <div className="mx-auto hidden w-full max-w-xs sm:block md:max-w-none">
            <FinanceOpsIllustration />
          </div>
        </section>

        <section id="experience" className="scroll-mt-24">
          <Heading kicker="Where I've worked" title="Experience" />
          {p.experience.map((e) => (
            <div key={e.role} className="reveal glass card-hover p-5 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="icon-box"><Briefcase className="h-5 w-5" /></div>
                  <div>
                    <h3 className="text-xl font-semibold">{e.role}</h3>
                    <a href={e.link} target="_blank" rel="noreferrer" className="link-accent">
                      {e.company} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <span className="pill">{e.period}</span>
              </div>
              <ul className="mt-4 grid gap-2.5 sm:mt-6 sm:gap-3 md:grid-cols-2">
                {e.points.map((pt) => <li key={pt} className="bullet text-muted-foreground">{pt}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section id="education" className="scroll-mt-24">
          <Heading kicker="Academic journey" title="Education" />
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {p.education.map((e, i) => (
              <div key={e.degree} className="reveal glass card-hover relative flex flex-col overflow-hidden p-4 sm:p-7" style={delay(i)}>
                <GraduationCap className="pointer-events-none absolute -bottom-4 -right-4 h-20 w-20 text-primary opacity-[0.07] sm:-bottom-6 sm:-right-6 sm:h-32 sm:w-32" />
                <div className="flex items-center justify-between gap-2">
                  <div className="icon-box hidden sm:grid"><GraduationCap className="h-5 w-5" /></div>
                  <span className="pill px-2.5 py-1 text-[11px] sm:px-[.9rem] sm:py-[.35rem] sm:text-[.8rem]">{e.period}</span>
                </div>
                <h3 className="mt-3 text-base font-semibold leading-snug sm:mt-5 sm:text-xl">{e.degree}</h3>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{e.school}</p>
                <p className="mt-auto pt-3 font-display text-lg font-semibold text-gradient sm:pt-4 sm:text-2xl">{e.score}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24">
          <Heading kicker="What I bring" title="Skills" />
          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            {p.competencies.map((c, i) => {
              const Icon = compIcons[i % compIcons.length] ?? BarChart3;
              return (
                <div key={c.title} className="reveal glass card-hover p-5 sm:p-7" style={delay(i)}>
                  <div className="icon-box"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-5 font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-4 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">
            {([["Tools & Technologies", p.tools], ["Soft Skills", p.softSkills]] as const).map(([t, list], i) => (
              <div key={t} className="reveal glass p-5 sm:p-7" style={delay(i)}>
                <p className="mb-4 text-sm font-semibold">{t}</p>
                <div className="flex flex-wrap gap-2">
                  {list.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24">
          <Heading kicker="Selected work" title="Projects & Achievements" />
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {p.projects.map((pr, i) => (
              <a key={pr.title} href={pr.link} target="_blank" rel="noreferrer" className="reveal glass card-hover group block p-5 sm:p-7" style={delay(i)}>
                <div className="flex items-start justify-between gap-4">
                  <p className="kicker">{pr.org}</p>
                  <ArrowUpRight className="h-5 w-5 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <h3 className="mt-3 text-xl font-semibold">{pr.title}</h3>
                <ul className="mt-4 space-y-2">
                  {pr.points.map((pt) => <li key={pt} className="bullet text-sm text-muted-foreground">{pt}</li>)}
                </ul>
                <span className="link-accent mt-5">View project <ExternalLink className="h-4 w-4" /></span>
              </a>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:mt-5 sm:gap-5 md:grid-cols-2">
            {p.achievements.map((a, i) => (
              <div key={a} className="reveal glass flex gap-4 p-4 sm:p-6" style={delay(i)}>
                <Award className="h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="scroll-mt-24">
          <Heading kicker="Click a card to view the certificate" title="Certifications" />
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
            {p.certifications.map((c, i) => (
              <a key={c.name} href={c.link} target="_blank" rel="noreferrer" className="reveal glass card-hover group flex items-center gap-4 p-4 sm:gap-5 sm:p-6" style={delay(i)}>
                <div className="icon-box"><Award className="h-5 w-5" /></div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm text-muted-foreground">{c.issuer} · {c.year}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </section>

        <section className="reveal banner relative overflow-hidden rounded-[1.5rem] px-5 py-10 text-center sm:px-10 sm:py-14 md:py-20">
          <GrowthLines />
          <GraduationCap className="relative mx-auto h-10 w-10 text-white/90" />
          <p className="relative mx-auto mt-5 max-w-3xl font-display text-2xl font-semibold leading-snug text-white sm:text-3xl md:text-4xl">
            “{p.tagline}”
          </p>
          <a href="#contact" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[var(--primary)] shadow-lg transition-transform hover:-translate-y-0.5">
            Let's work together <ArrowUpRight className="h-4 w-4" />
          </a>
        </section>
      </main>

      <footer id="contact" className="scroll-mt-16 border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:py-20">
          <div className="reveal glass cta-panel grid gap-8 p-5 sm:gap-10 sm:p-8 md:grid-cols-[1fr_1.2fr] md:p-14">
            <div>
              <p className="kicker">Contact</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl md:text-5xl">Let's get in <span className="text-gradient">touch.</span></h2>
              <p className="mt-3 text-muted-foreground">Have an opportunity in finance or operations? Send a message and it will reach my inbox.</p>
              <div className="mt-6 flex flex-col items-stretch gap-2.5 sm:mt-8 sm:items-start sm:gap-3">
                <a href={`mailto:${p.email}`} className="btn-ghost min-w-0"><Mail className="h-4 w-4 shrink-0" /> <span className="truncate">{p.email}</span></a>
                <a href={`tel:${p.phone}`} className="btn-ghost"><Phone className="h-4 w-4" /> {p.phone}</a>
                <a href={p.linkedin} target="_blank" rel="noreferrer" className="btn-ghost"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                <a href={resumeHref} download className="btn-primary justify-center sm:justify-start"><Download className="h-4 w-4" /> Resume</a>
              </div>
            </div>
            <ContactForm />
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 sm:mt-10 text-xs text-muted-foreground">
            <Logo className="h-6 w-6" />
            <span>© {new Date().getFullYear()} {p.name}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
