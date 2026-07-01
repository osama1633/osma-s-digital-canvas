import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { personal, profile_image, cv_url } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Animated ambient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold/15 blur-[120px] animate-pulse-glow" />
        <div className="absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-gold-soft/10 blur-[100px]" />
        <div className="absolute left-[-10%] bottom-0 h-[400px] w-[400px] rounded-full bg-gold/8 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 80%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-gold"
          >
            <Sparkles size={13} className="text-gold" />
            <span>Available for select freelance projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-cream"
          >
            Crafting digital
            <br />
            <span className="italic text-gradient-gold">experiences</span>
            <br />
            with precision.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I'm <span className="text-cream">{personal.name}</span> — a{" "}
            <span className="text-cream">{personal.title}</span> designing and
            building modern, scalable, high-performance web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold to-gold-soft px-6 py-3.5 text-sm font-medium text-onyx shadow-glow transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={cv_url}
              target="_blank"
              rel="noreferrer"
              download
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-cream backdrop-blur transition-colors hover:border-gold/40 hover:bg-white/10"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-medium text-cream/80 transition-colors hover:text-gold"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-gold" />
              {personal.location}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Computer Science Student</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Open to opportunities</span>
          </motion.div>
        </div>

        {/* Profile portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] glass-strong shadow-card">
            <img
              src={profile_image}
              alt={`Portrait of ${personal.name}`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-display text-xl text-cream">{personal.name}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold/90">
                    {personal.title}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-400/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Floating accent cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-12 hidden glass-strong rounded-2xl px-4 py-3 shadow-card sm:block"
          >
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Stack
            </p>
            <p className="font-display text-sm text-cream">React · Next.js · TS</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-20 hidden glass-strong rounded-2xl px-4 py-3 shadow-card sm:block"
          >
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Focus
            </p>
            <p className="font-display text-sm text-cream">Performance · Craft</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
