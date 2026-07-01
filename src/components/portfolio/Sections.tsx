import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Search,
  Server,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

import { Reveal, SectionHeading } from "./Reveal";
import {
  certificates,
  education,
  faqs,
  personal,
  projects,
  services,
  skills,
  techStack,
} from "@/data/portfolio";

/* ----------------------------- ABOUT ----------------------------- */
export function About() {
  const stats = [
    { label: "Projects shipped", value: "10+" },
    { label: "Years coding", value: "3+" },
    { label: "Stack focus", value: "Full Stack" },
    { label: "Coffee per day", value: "∞" },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About"
              title={
                <>
                  Engineer by training,<br />
                  <span className="italic text-gradient-gold">craftsman</span> by nature.
                </>
              }
            />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-cream/90">
                I started writing code because I wanted to build the kind of
                websites that made me stop and look — the ones with rhythm,
                detail, and a sense that someone really cared.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Today I'm a Computer Science student and Full Stack Web Developer
                focused on building modern, scalable products with{" "}
                <span className="text-cream">React</span>,{" "}
                <span className="text-cream">Next.js</span> and{" "}
                <span className="text-cream">TypeScript</span>. I care about
                performance the same way I care about typography — both should
                feel inevitable. I write code that other developers enjoy
                reading, and I ship interfaces that real people enjoy using.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                When I'm not building, I'm studying systems, refining UI ideas,
                or pulling apart someone else's clever solution to learn how it
                works.
              </p>
            </Reveal>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl glass sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-background/30 px-5 py-6">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl text-gradient-gold">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- SKILLS ----------------------------- */
const skillIcons: Record<string, typeof Code2> = {
  Frontend: Layout,
  Backend: Server,
  Tools: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              The toolkit behind<br />
              <span className="italic text-gradient-gold">every project</span>.
            </>
          }
          description="A focused set of technologies I use to ship fast, accessible and maintainable products."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {(Object.keys(skills) as Array<keyof typeof skills>).map((key, i) => {
            const Icon = skillIcons[key] ?? Code2;
            return (
              <Reveal key={key} delay={i * 0.06}>
                <article className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition-all hover:-translate-y-1 hover:border-gold/30">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold-soft/10 text-gold ring-1 ring-gold/20">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-2xl text-cream">{key}</h3>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {skills[key].map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-cream/85 transition-colors hover:border-gold/30 hover:text-gold"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TECH STACK MARQUEE ----------------------------- */
export function TechStack() {
  const items = [...techStack, ...techStack];
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="hairline h-px w-full" />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-10 text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            My current tech stack
          </p>
        </Reveal>
        <div
          className="relative mt-8 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {items.map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="font-display text-2xl text-cream/60 sm:text-3xl"
              >
                {t}
                <span className="mx-6 inline-block h-1.5 w-1.5 translate-y-[-6px] rounded-full bg-gold/60" />
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PROJECTS ----------------------------- */
export function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title={
            <>
              Selected work,<br />
              <span className="italic text-gradient-gold">live in production</span>.
            </>
          }
          description="A handful of recent builds — each one designed, developed and deployed by me."
        />

        <div className="mt-10 space-y-8">
          {projects.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="group relative grid grid-cols-1 gap-0 overflow-hidden rounded-[2rem] glass shadow-card transition-all hover:border-gold/30 lg:grid-cols-2">
                  <div
                    className={`relative aspect-[4/3] overflow-hidden lg:aspect-auto ${
                      reversed ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={`${p.title} — project screenshot`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-onyx/70 via-onyx/10 to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                      Live
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-6 p-7 sm:p-10">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                        {p.tagline}
                      </p>
                      <h3 className="mt-3 font-display text-3xl text-cream sm:text-4xl">
                        {p.title}
                      </h3>
                      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <li
                            key={t}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-cream/85"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold to-gold-soft px-5 py-2.5 text-sm font-medium text-onyx shadow-glow transition-transform hover:scale-[1.03]"
                      >
                        Live Demo
                        <ExternalLink
                          size={14}
                          className="transition-transform group-hover/btn:translate-x-0.5"
                        />
                      </a>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:border-gold/40"
                      >
                        <Github size={15} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CERTIFICATES ----------------------------- */
export function Certificates() {
  return (
    <section id="certificates" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certificates"
          title={
            <>
              Continuous<br />
              <span className="italic text-gradient-gold">learning</span>.
            </>
          }
          description="A selection of focused study tracks I've completed to deepen my craft."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <article className="group relative h-full overflow-hidden rounded-3xl glass transition-all hover:-translate-y-1 hover:border-gold/30">
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={c.image}
                    alt={`${c.title} — certificate`}
                    className="absolute inset-0 h-full w-full object-contain transition-transform duration-[1.2s] group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gold">
                    <Award size={18} strokeWidth={1.5} />
                    <span className="text-[11px] uppercase tracking-[0.25em]">
                      {c.year}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl text-cream">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.issuer}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- EDUCATION ----------------------------- */
export function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Foundations in<br />
              <span className="italic text-gradient-gold">computer science</span>.
            </>
          }
        />
        <div className="mt-10 grid grid-cols-1 gap-5">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.05}>
              <article className="relative overflow-hidden rounded-3xl glass p-7 sm:p-10">
                <div className="grid grid-cols-[auto_1fr] gap-5 sm:gap-7">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold-soft/10 text-gold ring-1 ring-gold/20">
                    <GraduationCap size={24} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                      {e.period}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-cream sm:text-3xl">
                      {e.degree}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                      {e.detail}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- SERVICES ----------------------------- */
const serviceIcons = [Layout, Rocket, Layers, Zap, Code2, Wrench];

export function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              How I can help<br />
              <span className="italic text-gradient-gold">your team</span>.
            </>
          }
        />
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <Reveal key={s.title} delay={i * 0.04}>
                <article className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition-all hover:-translate-y-1 hover:border-gold/30">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold-soft/10 text-gold ring-1 ring-gold/20">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl text-cream">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- GITHUB ----------------------------- */
type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
  fork: boolean;
};

async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${personal.githubUser}/repos?per_page=100&sort=pushed`,
  );
  if (!res.ok) throw new Error("GitHub fetch failed");
  const data: Repo[] = await res.json();
  return data.filter((r) => !r.fork).slice(0, 6);
}

export function GitHubSection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["github-repos"],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  return (
    <section id="github" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Open Source"
            title={
              <>
                Live from my<br />
                <span className="italic text-gradient-gold">GitHub</span>.
              </>
            }
            description="Recent repositories — pulled live, sorted by latest activity."
          />
          <Reveal>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:border-gold/40"
            >
              <Github size={15} />
              View all on GitHub
              <ExternalLink size={13} />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-48 animate-pulse rounded-3xl glass"
                  aria-hidden
                />
              ))
            : isError || !data
              ? (
                <div className="col-span-full rounded-3xl glass p-8 text-center text-sm text-muted-foreground">
                  Couldn't load repositories right now.{" "}
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gold underline-offset-4 hover:underline"
                  >
                    Visit GitHub directly →
                  </a>
                </div>
              )
              : data.map((r, i) => (
                  <Reveal key={r.id} delay={i * 0.04}>
                    <a
                      href={r.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex h-full flex-col rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:border-gold/30"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-[10px] uppercase tracking-[0.25em] text-gold">
                            Repository
                          </p>
                          <h3 className="mt-1.5 truncate font-display text-xl text-cream">
                            {r.name}
                          </h3>
                        </div>
                        <Github size={18} className="shrink-0 text-muted-foreground transition-colors group-hover:text-gold" />
                      </div>
                      <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                        {r.description || "No description provided."}
                      </p>
                      <div className="mt-auto flex items-center gap-4 pt-5 text-xs text-muted-foreground">
                        {r.language ? (
                          <span className="inline-flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-gold" />
                            {r.language}
                          </span>
                        ) : null}
                        <span>★ {r.stargazers_count}</span>
                        <span>⑂ {r.forks_count}</span>
                      </div>
                    </a>
                  </Reveal>
                ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CONTACT ----------------------------- */
export function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-8 shadow-card sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl"
          />
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-8 bg-gold/60" />
                <span>Contact</span>
              </div>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] text-cream sm:text-5xl md:text-6xl">
                Let's build something
                <br />
                <span className="italic text-gradient-gold">remarkable</span>.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Have a project in mind, a role to fill or an idea worth
                exploring? Reach out — I reply within 24 hours.
              </p>

              <ul className="mt-10 space-y-4">
                <ContactRow
                  icon={Mail}
                  label="Email"
                  value={personal.email}
                  href={`mailto:${personal.email}`}
                />
                <ContactRow
                  icon={Phone}
                  label="Phone"
                  value={personal.phone}
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                />
                <ContactRow
                  icon={MapPin}
                  label="Location"
                  value={personal.location}
                />
              </ul>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold-soft/10 text-gold ring-1 ring-gold/20">
        <Icon size={17} strokeWidth={1.5} />
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </span>
        <span className="mt-0.5 block truncate text-base text-cream">
          {value}
        </span>
      </span>
    </>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          className="group flex items-center gap-4 rounded-2xl p-2 -m-2 transition-colors hover:bg-white/5"
        >
          {Inner}
        </a>
      ) : (
        <div className="flex items-center gap-4 p-2 -m-2">{Inner}</div>
      )}
    </li>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const subject = String(data.get("subject") ?? "Portfolio enquiry");
    const message = String(data.get("message") ?? "");
    const body = `${message}\n\n— ${name}`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="mt-4">
        <Field label="Subject" name="subject" />
      </div>
      <div className="mt-4">
        <Field label="Message" name="message" required textarea />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold to-gold-soft px-6 py-3.5 text-sm font-medium text-onyx shadow-glow transition-transform hover:scale-[1.01] sm:w-auto"
      >
        <Sparkles size={15} />
        Send Message
      </button>
      {sent ? (
        <p className="mt-4 text-xs text-emerald-300">
          Opening your email client…
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const cls =
    "peer block w-full rounded-2xl border border-white/10 bg-background/40 px-4 pt-6 pb-2 text-sm text-cream placeholder-transparent outline-none transition-colors focus:border-gold/50 focus:ring-2 focus:ring-gold/20";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={label}
          rows={4}
          className={cls}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={label}
          className={cls}
        />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
    </label>
  );
}

/* ----------------------------- FAQ ----------------------------- */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently asked<br />
              <span className="italic text-gradient-gold">questions</span>.
            </>
          }
          align="center"
        />
        <ul className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={f.q} delay={i * 0.04}>
                <div className="overflow-hidden rounded-2xl glass">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg text-cream sm:text-xl">
                      {f.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-gold transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted-foreground sm:px-7">
                          {f.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-soft text-onyx font-display text-base font-semibold">
                OF
              </span>
              <span className="font-display text-lg text-cream">
                Osama <span className="text-gold">Fares</span>
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Full Stack Web Developer crafting modern, scalable web
              experiences. Based in Egypt, working worldwide.
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
              Navigate
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {["About", "Projects", "Services", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-muted-foreground transition-colors hover:text-cream"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-cream"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-cream"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={personal.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-cream"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-muted-foreground transition-colors hover:text-cream"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            <Search size={12} className="text-gold" />
            Designed & built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
