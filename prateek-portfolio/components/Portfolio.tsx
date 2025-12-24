"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { useState, useEffect } from "react";

// -------------------- Data --------------------
// Unified modal shape: { title, subtitle?, icon?, metrics?, details[] }

const projects = [
  {
    title: "Document Management & Workflow Platform",
    subtitle: "Java · Spring Boot · AWS S3 · Lambda",
    metrics: "10+ services · Event-driven · Cloud-native",
    details: [
      "Designed backend services for document ingestion and workflow automation",
      "Migrated on-prem storage to AWS S3 for scalability and durability",
      "Introduced event-driven processing to reduce operational overhead"
    ]
  },
  {
    title: "High-Performance REST API Platform",
    subtitle: "Spring Boot · PostgreSQL · Redis",
    metrics: "~25% P95 latency improvement",
    details: [
      "Built high-traffic REST APIs used by enterprise customers",
      "Optimized SQL queries and indexing strategies",
      "Introduced Redis caching for hot paths"
    ]
  },
  {
    title: "Template-Driven Auto Narrative System",
    subtitle: "Java · Spring Boot · Templates",
    metrics: "~50% faster updates",
    details: [
      "Refactored static narrative logic into a template-driven system",
      "Improved maintainability and reduced business turnaround time",
      "Separated business logic from presentation"
    ]
  },
  {
    title: "Multilingual PDF Export Engine",
    subtitle: "Java · Spring Boot · iTextPDF",
    metrics: "~30% export performance improvement",
    details: [
      "Implemented multi-font Unicode support",
      "Improved PDF export reliability for global users",
      "Optimized export pipeline for performance"
    ]
  }
];

const experiences = [
  {
    icon: "🏗️",
    title: "Senior Software Engineer",
    subtitle: "Bounteous · Mar 2025 – Present",
    metrics: "10+ services · ~33% infra cost reduction · ~60% latency improvement",
    details: [
      "Owned multiple Java & Spring Boot microservices in production",
      "Led migration of 10+ services from on-prem storage to AWS S3",
      "Designed event-driven pipelines using Lambda, DynamoDB, and S3",
      "Reduced report generation latency by ~60%",
      "Implemented dynamic document processing pipelines",
      "Collaborated closely with product and QA on reliability-critical features"
    ]
  },
  {
    icon: "📈",
    title: "Software Engineer",
    subtitle: "RxLogix · Feb 2022 – Nov 2024",
    metrics: "~25% backend performance improvement",
    details: [
      "Designed and maintained high-traffic REST APIs",
      "Improved performance via SQL tuning and indexing",
      "Introduced Redis caching for hot API paths",
      "Re-architected static auto-narratives into template-driven system",
      "Reduced narrative update time by ~50%",
      "Worked on correctness-critical healthcare workflows"
    ]
  }
];

// -------------------- Modal --------------------
type DetailsItem = {
  title: string;
  subtitle?: string;
  icon?: string;
  metrics?: string;
  details: string[];
};

type DetailsModalProps = {
  item: DetailsItem | null;
  onClose: () => void;
};

function DetailsModal({ item, onClose }: DetailsModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-slate-900 max-w-2xl w-full rounded-lg p-6 relative"
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
              onClick={onClose}
            >
              ✕
            </button>

            <p className="text-xs uppercase tracking-wider text-slate-400 mb-2">Details</p>
            <h3 className="text-2xl font-semibold text-slate-100 mb-1">
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.title}
            </h3>
            {item.subtitle && <p className="text-slate-400 mb-2">{item.subtitle}</p>}
            {item.metrics && (
              <p className="text-slate-300 text-sm mb-4">{item.metrics}</p>
            )}

            <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
              {item.details.map((d) => (
                <li key={d}>{d}</li>
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-12">
      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Prateek Maheshwari
        </motion.h1>
        <p className="text-xl text-slate-300">Senior Backend Engineer · Java · Spring Boot</p>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Senior backend engineer with 4+ years of experience designing and scaling
          production-grade systems with a focus on performance and maintainability.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button asChild variant="secondary"><a href="https://www.linkedin.com/in/friskycodeur" target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2" />LinkedIn</a></Button>
          <Button asChild variant="secondary"><a href="https://github.com/friskycodeur" target="_blank" rel="noopener noreferrer"><Github className="mr-2" />GitHub</a></Button>
          <Button asChild variant="secondary"><a href="/Prateek_Maheshwari_Resume.pdf" download><FileText className="mr-2" />Resume</a></Button>
          <Button asChild variant="secondary"><a href="mailto:friskycodeur@gmail.com"><Mail className="mr-2" />Contact</a></Button>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-semibold mb-8">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <Card key={exp.title} className="bg-slate-900 cursor-pointer hover:bg-slate-800 transition" onClick={() => setActiveItem(exp)}>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-slate-100">{exp.title}</h3>
                <p className="text-slate-400 text-sm">{exp.subtitle}</p>
                <p className="text-slate-300 text-sm">{exp.metrics}</p>
                <p className="text-slate-500 text-xs">Click to view details</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card key={p.title} className="bg-slate-900 cursor-pointer hover:bg-slate-800 transition" onClick={() => setActiveItem(p)}>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-slate-100">{p.title}</h3>
                <p className="text-slate-400 text-sm">{p.subtitle}</p>
                <p className="text-slate-300 text-sm">{p.metrics}</p>
                <p className="text-slate-500 text-xs">Click to view details</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <DetailsModal item={activeItem} onClose={() => setActiveItem(null)} />

      {/* Footer */}
      <footer className="max-w-5xl mx-auto mt-24 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm gap-4">
        <span>© {new Date().getFullYear()} Prateek Maheshwari. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/friskycodeur" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">LinkedIn</a>
          <a href="https://github.com/friskycodeur" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">GitHub</a>
          <a href="mailto:friskycodeur@gmail.com" className="hover:text-slate-300">Email</a>
        </div>
      </footer>
    </div>
  );
}
