import fs from "fs";
import path from "path";
import Image from "next/image";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";
import Nav from "@/components/Nav";
import Reveal, { Mask } from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
const has = (p: string) => fs.existsSync(path.join(process.cwd(), "public", p));
const RESUME = "/resume/Kavya-Naik-Resume.pdf";
const skills: [string, string[]][] = [
  ["Languages", ["Python", "JavaScript", "TypeScript", "SQL"]],
  ["Frontend", ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]],
  ["Backend", ["FastAPI", "Node.js", "REST API design"]],
  ["Databases", ["PostgreSQL", "MySQL"]],
  ["Tools", ["Git", "GitHub"]],
  ["Cloud", ["Microsoft Azure Fundamentals"]],
];
const Tags = ({ t, c = "" }: { t: string[]; c?: string }) => (
  <ul className={`flex flex-wrap gap-x-4 gap-y-1 text-sm ${c}`}>
    {t.map((x) => (
      <li key={x}>
        <span className="text-amber">/</span> {x}
      </li>
    ))}
  </ul>
);
const dims = (p: string) => {
  try {
    const b = fs.readFileSync(path.join(process.cwd(), "public", p));
    if (b.toString("ascii", 1, 4) === "PNG")
      return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  } catch {}
  return null;
};
function Shot({
  src,
  alt,
  n,
  className = "",
  ratio = "aspect-[16/10]",
}: {
  src: string;
  alt: string;
  n: string;
  className?: string;
  ratio?: string;
}) {
  const d = has(src) ? dims(src) : null;
  if (!has(src))
    return (
      <div
        className={`bg-burgundy text-silver flex items-end p-6 ${ratio} ${className}`}
        role="img"
        aria-label={`${alt} (screenshot unavailable)`}
      >
        <span className="font-display text-8xl opacity-30">{n}</span>
      </div>
    );
  return (
    <div
      className={`group border border-burgundy/25 bg-burgundy/5 p-2 self-start ${className}`}
    >
      <div
        className="overflow-hidden mx-auto"
        style={d ? { maxWidth: d.w } : undefined}
      >
        {d ? (
          <Image
            src={src}
            alt={alt}
            width={d.w}
            height={d.h}
            sizes="(max-width:768px) 100vw,60vw"
            className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className={`relative ${ratio}`}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="60vw"
              className="object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}
const L = ({ h, children }: { h: string; children: React.ReactNode }) => (
  <a
    href={h}
    target="_blank"
    rel="noopener noreferrer"
    className="link inline-flex items-center gap-1 font-semibold"
  >
    {children}
    <ArrowUpRight size={16} />
  </a>
);
export default function Page() {
  const portrait = has("/images/profile.png");
  const resume = has(RESUME);
  const RB = ({ c = "" }: { c?: string }) =>
    resume ? (
      <a className={`btn ${c}`} href={RESUME} download>
        <Download size={16} />
        Download Resume
      </a>
    ) : (
      <span
        className={`btn opacity-60 ${c}`}
        title="Add public/resume/Kavya-Naik-Resume.pdf"
      >
        Resume — file pending
      </span>
    );
  return (
    <>
      <Nav />
      <main id="top">
        <section className="relative min-h-screen px-5 md:px-10 pt-32 pb-16 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 z-10">
            <p className="eyebrow mb-6">
              <span className="text-amber">●</span> Full Stack Developer —
              Honnavar, India
            </p>
            <Mask
            text="Building AI-powered applications & modern web products"
              className="font-display text-[clamp(2.6rem,6.4vw,6.25rem)] leading-[.92] tracking-tight"
            />
            <Reveal delay={0.5}>
              <p className="mt-8 max-w-md text-lg">
                I’m Kavya Naik. I build AI-powered applications, backend systems
                and modern web products.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="btn bg-burgundy text-silver border-burgundy"
                >
                  Explore Projects <ArrowUpRight size={16} />
                </a>
                <RB />
              </div>
            </Reveal>
          </div>
          <Reveal
            delay={0.3}
            className="md:col-span-4 md:col-start-9 w-full max-w-xs md:max-w-none"
          >
            <div className="relative aspect-[3/4]">
              <div className="relative h-full overflow-hidden bg-burgundy">
                {portrait ? (
                  <Image
                    src="/images/profile.png"
                    alt="Portrait of Kavya Naik"
                    fill
                    priority
                    sizes="(max-width:768px) 80vw,30vw"
                    className="object-cover object-top grayscale hover:grayscale-0 transition duration-700"
                  />
                ) : (
                  <span
                    className="absolute inset-0 grid place-items-center font-display text-[10rem] text-silver/20"
                    role="img"
                    aria-label="Portrait pending"
                  >
                    KN
                  </span>
                )}
              </div>
            </div>
          </Reveal>
          <a
            href="#about"
            className="absolute bottom-5 left-10 eyebrow hidden lg:block"
          >
            Scroll ↓
          </a>
        </section>

        
<section
  id="about"
  className="px-5 md:px-10 py-20 md:py-24 hl grid md:grid-cols-12 gap-x-8 gap-y-8"
>
  <p className="eyebrow md:col-span-2">01 — About</p>

  <Reveal className="md:col-span-7">
    <p className="font-display text-3xl md:text-5xl leading-[1.12] tracking-tight">
      I build practical software, from{" "}
      <em className="not-italic text-amber">
        full-stack applications
      </em>{" "}
      to backend systems and AI-powered features.
    </p>
  </Reveal>

  <Reveal
    delay={0.15}
    className="md:col-span-3 text-sm leading-7 space-y-4"
  >
    <p>
      I completed my MCA in Cyber Security at Mangalore Institute
      of Technology and Engineering (MITE), Moodbidri.
    </p>

    <div className="pt-4 border-t border-burgundy/15">
      <p className="eyebrow mb-3">My toolkit</p>
      <p>
        React.js, Next.js, TypeScript, Python, FastAPI, Node.js
        and PostgreSQL.
      </p>
    </div>
  </Reveal>
</section>



<section
  id="skills"
  className="px-5 pt-6 pb-16 md:px-10 md:pt-8 md:pb-20"
>
  <div className="mb-8 flex items-end justify-between gap-4 md:mb-10">
    <h2 className="eyebrow">02 — Technical Skills</h2>
    <span className="text-xs text-[var(--burgundy)]/50">06 AREAS</span>
  </div>

  <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-12">
    {[
      {
        title: "Languages",
        number: "01",
        items: ["Python", "JavaScript", "TypeScript", "SQL"],
        span: "lg:col-span-4",
      },
      {
        title: "Frontend",
        number: "02",
        items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
        span: "lg:col-span-4",
      },
      {
        title: "Backend",
        number: "03",
        items: ["FastAPI", "Node.js", "REST API Design"],
        span: "lg:col-span-4",
      },
      {
        title: "Databases",
        number: "04",
        items: ["PostgreSQL", "MySQL"],
        span: "lg:col-span-4",
      },
      {
        title: "Tools",
        number: "05",
        items: ["Git", "GitHub"],
        span: "lg:col-span-4",
      },
      {
        title: "Cloud",
        number: "06",
        items: ["Microsoft Azure Fundamentals"],
        span: "lg:col-span-4",
      },
    ].map((skill) => (
      <article
        key={skill.title}
        className={`group relative border-t border-[var(--line)] py-7 md:py-8 ${skill.span}`}
      >
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-display text-2xl transition-colors duration-300 group-hover:text-[var(--amber)] md:text-3xl">
            {skill.title}
          </h3>
          <span className="text-xs tracking-widest text-[var(--amber)]">
            {skill.number}
          </span>
        </div>

        <ul className="space-y-2.5">
          {skill.items.map((item) => (
            <li
              key={item}
              className="flex items-baseline gap-3 text-sm md:text-base"
            >
              <span className="text-[var(--amber)]">/</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    ))}
  </div>
</section>


        <section className="bg-burgundy text-silver px-5 md:px-10 py-24">
          <h2 className="eyebrow text-amber mb-10">03 — Experience</h2>
          <Reveal className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <p className="text-amber font-semibold">Nov 2024 – Feb 2025</p>
              <p className="text-silver/70">
                Dyashin Technosoft Pvt. Ltd., Bangalore
              </p>
            </div>
            <div className="md:col-span-8">
              <h3 className="font-display text-4xl md:text-6xl mb-6">
                Front-End Development Intern
              </h3>
              <ul className="space-y-2 max-w-2xl list-none">
                {[
                  "Developed a Resume Builder with React.js, JavaScript, HTML and CSS.",
                  "Created reusable components and responsive layouts.",
                  "Implemented ATS keyword matching and resume scoring.",
                  "Built a real-time resume preview.",
                  "Tested and debugged application features.",
                  "Used Git for version control and team collaboration.",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="text-amber">—</span>
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                <a
                  className="link text-amber"
                  href="https://github.com/Kavyanaik07/Resume-Builder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View repository ↗
                </a>
              </p>
            </div>
          </Reveal>
        </section>

        

<section id="work" className="px-5 md:px-10 py-24">
  <h2 className="eyebrow mb-16">04 — Projects</h2>

  {/* Project 1 — Image left, details right */}
  <Reveal className="mb-24">
    <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
      <Shot
        src="/images/projects/thisway.png"
        alt="thisWay AI Travel Planner"
        n="01"
      />

      <div className="space-y-5">
        <p className="font-display text-6xl text-amber leading-none">
          01
        </p>
        <h3 className="font-display text-5xl md:text-6xl">
          thisWay
          <span className="block text-2xl mt-2">AI Travel Planner</span>
        </h3>
        <p>
          A full-stack AI-powered travel planner that generates personalized
          itineraries, provides conversational trip-planning assistance,
          displays destinations on interactive maps and exports itineraries
          as PDFs.
        </p>
        <Tags
          t={[
            "Next.js 15",
            "TypeScript",
            "FastAPI",
            "PostgreSQL",
            "Google Gemini AI",
            "Google OAuth",
            "Leaflet.js",
            "OpenStreetMap",
            "Vercel",
          ]}
        />
        <p className="flex flex-wrap gap-6">
          <L h="https://thiswayletsgo.vercel.app/">Live Demo</L>
          <L h="https://github.com/Kavyanaik07/ai-trip-planner">GitHub</L>
        </p>
      </div>
    </div>
  </Reveal>

  {/* Project 2 — Details left, image right */}
  <Reveal className="mb-24">
    <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
      <div className="space-y-5 md:order-1 order-2">
        <p className="font-display text-6xl text-amber leading-none">
          02
        </p>
        <h3 className="font-display text-5xl md:text-6xl">
          Resume Builder
        </h3>
        <p>
          A resume-building application with reusable components,
          real-time previews, responsive layouts and ATS keyword matching.
        </p>
        <Tags t={["React.js", "JavaScript", "HTML", "CSS"]} />
        <p>
          <L h="https://github.com/Kavyanaik07/Resume-Builder">GitHub</L>
        </p>
      </div>

      <div className="md:order-2 order-1">
        <Shot
          src="/images/projects/resumebuilder.png"
          alt="Resume Builder application"
          n="02"
          ratio="aspect-[4/3]"
        />
      </div>
    </div>
  </Reveal>

  {/* Project 3 — Image left, details right */}
  <Reveal>
    <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
      <Shot
        src="/images/projects/artgallery.png"
        alt="Art Gallery Management System"
        n="03"
        ratio="aspect-[4/3]"
      />

      <div className="space-y-5">
        <p className="font-display text-6xl text-amber leading-none">
          03
        </p>
        <h3 className="font-display text-4xl md:text-5xl">
          Art Gallery Management System
        </h3>
        <p>
          A web application for browsing and managing artwork, with
          user interactions, cart functionality and administrative management.
        </p>
        <Tags t={["PHP", "Bootstrap", "MySQL"]} />
        <p>
          <L h="https://github.com/Kavyanaik07/ART-GALLERY">GitHub</L>
        </p>
      </div>
    </div>
  </Reveal>
</section>


        <section
          id="research"
          className="px-5 md:px-10 py-24 hl grid md:grid-cols-12 gap-8"
        >
          <p className="eyebrow md:col-span-2">05 — Research</p>
          <Reveal className="md:col-span-6">
            <h3 className="font-display text-4xl md:text-6xl italic">
              IntelliBugtrack: Bug Tracking Using AI
            </h3>
            <p className="mt-6">
              Presented at the 4th International Conference on Advances in
              Science, Engineering &amp; Technology (ICASET 2025), November
              2025.
            </p>
            <p className="mt-2 text-burgundy/70">
              Focus: AI-based bug tracking, automated bug classification and
              prioritization.
            </p>
          </Reveal>
          <Reveal className="md:col-span-4">
            {has("/images/certificates/icaset.png") ? (
              <a
                href="/images/certificates/icaset.png"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View ICASET 2025 certificate at full size"
                className="block border border-burgundy/30 p-2 relative aspect-[4/3]"
              >
                <Image
                  src="/images/certificates/icaset.png"
                  alt="ICASET 2025 presentation certificate"
                  fill
                  sizes="30vw"
                  className="object-contain p-2"
                />
              </a>
            ) : (
              <div className="bg-burgundy text-silver p-6 border-t-4 border-amber">
                <p className="eyebrow text-amber">Conference presentation</p>
                <p className="font-display text-3xl mt-3">ICASET 2025</p>
                <p className="mt-3 text-sm text-silver/80">
                  4th International Conference on Advances in Science,
                  Engineering &amp; Technology
                </p>
                <p className="mt-6 text-sm">November 2025</p>
              </div>
            )}
          </Reveal>
        </section>

        {/* Education */}
<section className="px-5 pt-16 pb-8 md:px-10 md:pt-20 hl">
  <h2 className="eyebrow mb-10">06 — Education</h2>

  {[
    [
      "Feb 2024 – Dec 2025",
      "Master of Computer Applications — Cyber Security",
      "Mangalore Institute of Technology and Engineering, Moodbidri",
      "CGPA 8.59",
    ],
    [
      "Oct 2020 – Oct 2023",
      "Bachelor of Computer Applications",
      "MPES’s SDM Degree College, Honnavar",
      "CGPA 8.34",
    ],
  ].map(([d, t, s, x]) => (
    <Reveal
      key={t}
      className="hl grid grid-cols-1 gap-3 py-6 md:grid-cols-12 md:gap-5"
    >
      <p className="font-semibold text-amber md:col-span-3">{d}</p>
      <h3 className="font-display text-2xl md:col-span-5">{t}</h3>
      <p className="md:col-span-3">{s}</p>
      <p className="text-sm md:col-span-1 md:text-right">{x}</p>
    </Reveal>
  ))}
</section>

{/* Certifications */}
<section className="px-5 pt-8 pb-16 md:px-10 md:pt-10 md:pb-20 hl">
  <h2 className="eyebrow mb-10">07 — Certifications</h2>

  {[
    [
      "August 2026",
      "Microsoft Azure Fundamentals (AZ-900)",
      "Udemy",
    ],
    [
      "January 2026",
      "Docker: A Project-Based Approach to Learning",
      "Udemy",
    ],
  ].map(([d, t, s]) => (
    <Reveal
      key={t}
      className="hl grid grid-cols-1 gap-3 py-6 md:grid-cols-12 md:gap-5"
    >
      <p className="font-semibold text-amber md:col-span-3">{d}</p>
      <h3 className="font-display text-2xl md:col-span-5">{t}</h3>
      <p className="md:col-span-4">{s}</p>
    </Reveal>
  ))}
</section>

        <section
          id="contact"
          className="bg-burgundy text-silver px-5 md:px-10 pt-24 pb-10"
        >
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="eyebrow text-amber mb-6">08 — Contact</p>
              <h2 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[.95]">
                Let’s build something meaningful.
              </h2>
              <ul className="mt-10 space-y-3">
                <li>
                  <a
                    className="link inline-flex gap-2"
                    href="mailto:kavyanaik0322@gmail.com"
                  >
                    <Mail size={18} />
                    kavyanaik0322@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    className="link inline-flex gap-2"
                    href="https://linkedin.com/in/kavya-naik-10b022258"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="link inline-flex gap-2"
                    href="https://github.com/Kavyanaik07"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </li>
                <li className="text-silver/70">Honnavar, Karnataka, India</li>
              </ul>
              <div className="mt-8">
                <RB c="text-silver" />
              </div>
            </div>
            <div className="md:col-span-5">
              <ContactForm />
            </div>
          </div>
          <footer className="mt-20 pt-6 border-t border-silver/20 flex justify-between text-sm text-silver/70">
            <p>© 2026 Kavya Naik</p>
            <a href="#top" className="link inline-flex gap-1 items-center">
              Back to top <ArrowUp size={14} />
            </a>
          </footer>
        </section>
      </main>
    </>
  );
}
