"use client";

import { useEffect, useState } from "react";
import type { ElementType, KeyboardEvent as ReactKeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  Database,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Server,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/friskycodeur",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/friskycodeur",
    icon: Github,
  },
  {
    label: "Resume",
    href: "/Prateek_Maheshwari_Resume.pdf",
    icon: FileText,
    download: true,
  },
  {
    label: "Contact",
    href: "mailto:friskycodeur@gmail.com",
    icon: Mail,
  },
];

const highlights = [
  { value: "4+", label: "years building backend systems" },
  { value: "3-4x", label: "faster document processing" },
  { value: "~80%", label: "manual effort reduced" },
  { value: ">99%", label: "PDF rendering accuracy" },
];

const experiences = [
  {
    icon: BriefcaseBusiness,
    title: "Senior Software Engineer",
    subtitle: "Bounteous | Mar 2025 - Present",
    metrics: "Java 17 | Spring Boot | AWS | REST APIs | Microservices | SQL",
    details: [
      "Designed AWS-based document processing workflows with Lambda, Step Functions, S3, DynamoDB, and Spring Boot, improving end-to-end processing speed by 3-4x.",
      "Built a dynamic field-mapping and rendering engine for extracting PDF layouts and overlaying structured data with over 99% accuracy.",
      "Integrated 20+ APIs across a microservices ecosystem, improving release quality and reducing production issues by about 25%.",
      "Implemented audit tracking, event-driven notifications, and reusable workflow abstractions to improve reliability and observability.",
    ],
  },
  {
    icon: Database,
    title: "Software Engineer",
    subtitle: "RxLogix | Feb 2022 - Nov 2024",
    metrics: "Java | Spring Boot | SQL | Redis | Elasticsearch | Docker",
    details: [
      "Improved backend performance by about 25% through SQL optimization, indexing strategies, Redis caching, and query refactoring.",
      "Re-engineered legacy narrative generation into a template-driven architecture, cutting update turnaround by about 50%.",
      "Diagnosed production performance issues involving JVM memory, SQL bottlenecks, and high-volume workflows.",
      "Improved search performance and filtering efficiency through Elasticsearch indexing and query tuning.",
    ],
  },
];

const projects = [
  {
    title: "AWS Document Processing Workflow",
    subtitle: "Spring Boot | AWS Lambda | Step Functions | S3 | DynamoDB",
    metrics: "3-4x faster processing | ~80% less manual effort",
    details: [
      "Designed a cloud-native processing pipeline for compliance-critical document workflows.",
      "Used AWS Step Functions and Lambda to coordinate asynchronous processing steps.",
      "Added audit tracking and event-driven notifications for stronger operational visibility.",
    ],
  },
  {
    title: "Dynamic PDF Field Mapping Engine",
    subtitle: "Java | Spring Boot | PDF Layout Extraction",
    metrics: ">99% structured overlay accuracy | ~40% faster onboarding",
    details: [
      "Built a field-mapping and rendering engine for extracting PDF layouts and overlaying structured data.",
      "Reduced workflow onboarding effort by making layout handling reusable and configurable.",
      "Improved accuracy for document rendering paths used by enterprise workflows.",
    ],
  },
  {
    title: "Template-Driven Narrative Architecture",
    subtitle: "Java | Spring Boot | Templates | Healthcare Workflows",
    metrics: "~50% faster update turnaround",
    details: [
      "Re-engineered static narrative generation into a maintainable template-driven architecture.",
      "Separated business logic from narrative presentation to improve consistency.",
      "Reduced turnaround for recurring narrative changes in correctness-critical workflows.",
    ],
  },
  {
    title: "Unicode Export Enhancement",
    subtitle: "Java | Spring Boot | iTextPDF",
    metrics: "~30% better export compatibility and performance",
    details: [
      "Implemented multi-font Unicode support for internationalized PDF generation.",
      "Improved multilingual export reliability across large document datasets.",
      "Enabled seamless document delivery for global users at scale.",
    ],
  },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["Java 8+", "SQL", "Python"],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "REST APIs",
      "JPA/Hibernate",
      "Microservices",
      "Event-Driven Systems",
    ],
  },
  {
    title: "Data & Search",
    skills: ["PostgreSQL", "MySQL", "Oracle", "Redis", "Elasticsearch"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS Lambda",
      "S3",
      "DynamoDB",
      "Step Functions",
      "Docker",
      "CI/CD",
      "Git",
      "Linux",
    ],
  },
  {
    title: "Engineering",
    skills: [
      "Apache Kafka",
      "Performance Optimization",
      "Production Debugging",
      "API Design",
      "System Design Fundamentals",
    ],
  },
];

const achievements = [
  "Spot Award at RxLogix, Top 5 out of 500 employees",
  "1st Prize Winner at InOut 7.0 Hackathon",
  "Top 15 at HackCBS Hackathon",
];

type DetailsItem = {
  title: string;
  subtitle?: string;
  icon?: ElementType;
  metrics?: string;
  details: string[];
};

type DetailsModalProps = {
  item: DetailsItem | null;
  onClose: () => void;
};

function DetailsModal({ item, onClose }: DetailsModalProps) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const Icon = item?.icon;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-2xl rounded-lg border border-slate-700 bg-slate-900 p-6 shadow-2xl"
            initial={{ scale: 0.96, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 16, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <Button
              aria-label="Close details"
              className="absolute right-4 top-4"
              onClick={onClose}
              size="icon"
              variant="ghost"
            >
              <X />
            </Button>

            <p className="mb-2 text-xs font-medium uppercase text-cyan-300">
              Details
            </p>
            <h3 className="mb-2 flex items-center gap-3 pr-10 text-2xl font-semibold text-slate-100">
              {Icon && <Icon className="size-6 text-cyan-300" />}
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="mb-2 text-sm text-slate-400">{item.subtitle}</p>
            )}
            {item.metrics && (
              <p className="mb-5 text-sm font-medium text-slate-200">
                {item.metrics}
              </p>
            )}

            <ul className="space-y-3 text-sm leading-6 text-slate-300">
              {item.details.map((detail) => (
                <li className="flex gap-3" key={detail}>
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [activeItem, setActiveItem] = useState<DetailsItem | null>(null);

  const openWithKeyboard = (
    event: ReactKeyboardEvent<HTMLDivElement>,
    item: DetailsItem,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveItem(item);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_34%),linear-gradient(135deg,_#020617_0%,_#111827_52%,_#0f172a_100%)] px-6 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            className="space-y-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
              <MapPin className="size-4" />
              India | Open to relocate
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-normal text-white md:text-6xl">
                Prateek Maheshwari
              </h1>
              <p className="text-xl font-medium text-cyan-100 md:text-2xl">
                Backend Engineer | Java | Spring Boot | AWS
              </p>
              <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                Backend engineer with 4+ years of experience building scalable,
                high-performance systems for cloud, compliance-critical, and
                data-intensive applications.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button asChild key={link.label} variant="secondary">
                    <a
                      download={link.download}
                      href={link.href}
                      rel="noopener noreferrer"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                    >
                      <Icon />
                      {link.label}
                    </a>
                  </Button>
                );
              })}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {highlights.map((highlight) => (
              <div
                className="rounded-lg border border-slate-700 bg-slate-900/70 p-5"
                key={highlight.label}
              >
                <p className="text-3xl font-bold text-cyan-200">
                  {highlight.value}
                </p>
                <p className="mt-2 text-sm leading-5 text-slate-300">
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-7 flex items-center gap-3">
          <Server className="size-6 text-cyan-300" />
          <h2 className="text-3xl font-semibold">Experience</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((experience) => {
            const Icon = experience.icon;
            return (
              <Card
                className="cursor-pointer rounded-lg border-slate-800 bg-slate-900/80 py-0 transition hover:border-cyan-300/50 hover:bg-slate-900"
                key={experience.title}
                onClick={() => setActiveItem(experience)}
                onKeyDown={(event) => openWithKeyboard(event, experience)}
                role="button"
                tabIndex={0}
              >
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start gap-3">
                    <span className="rounded-md bg-cyan-300/10 p-2 text-cyan-200">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">
                        {experience.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {experience.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300">{experience.metrics}</p>
                  <p className="text-xs font-medium uppercase text-cyan-300">
                    Click to view details
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex items-center gap-3">
            <Sparkles className="size-6 text-cyan-300" />
            <h2 className="text-3xl font-semibold">Skills</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                className="rounded-lg border border-slate-800 bg-slate-950/60 p-5"
                key={group.title}
              >
                <h3 className="mb-4 text-lg font-semibold text-slate-100">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      className="rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-300"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-7 flex items-center gap-3">
          <FileText className="size-6 text-cyan-300" />
          <h2 className="text-3xl font-semibold">Projects</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              className="cursor-pointer rounded-lg border-slate-800 bg-slate-900/80 py-0 transition hover:border-cyan-300/50 hover:bg-slate-900"
              key={project.title}
              onClick={() => setActiveItem(project)}
              onKeyDown={(event) => openWithKeyboard(event, project)}
              role="button"
              tabIndex={0}
            >
              <CardContent className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-slate-100">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400">{project.subtitle}</p>
                <p className="text-sm text-slate-300">{project.metrics}</p>
                <p className="text-xs font-medium uppercase text-cyan-300">
                  Click to view details
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/40 px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Trophy className="size-6 text-cyan-300" />
              <h2 className="text-3xl font-semibold">Achievements</h2>
            </div>
            <p className="text-sm leading-6 text-slate-400">
              Recognition across production engineering and hackathon work.
            </p>
          </div>
          <div className="grid gap-3">
            {achievements.map((achievement) => (
              <div
                className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/60 p-4 text-slate-200"
                key={achievement}
              >
                <Award className="size-5 shrink-0 text-cyan-300" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DetailsModal item={activeItem} onClose={() => setActiveItem(null)} />

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-7 text-sm text-slate-500 md:flex-row">
        <span>
          Copyright {new Date().getFullYear()} Prateek Maheshwari. All rights
          reserved.
        </span>
        <div className="flex gap-4">
          <a
            className="hover:text-slate-300"
            href="https://www.linkedin.com/in/friskycodeur"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-slate-300"
            href="https://github.com/friskycodeur"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a className="hover:text-slate-300" href="mailto:friskycodeur@gmail.com">
            Email
          </a>
        </div>
      </footer>
    </main>
  );
}
