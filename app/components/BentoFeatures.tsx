"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Building2, 
  LayoutGrid, 
  BookOpenCheck, 
  GraduationCap, 
  Brain,
  ArrowRight
} from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
}

function BentoCard({ title, description, icon: Icon, className = "" }: BentoCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-sm
        border border-slate-200 group ${className}`}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(132,204,22,.1), transparent 40%)`,
        }}
      />
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-50 text-lime-600">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-slate-800">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </motion.div>
  );
}

export function BentoFeatures() {
  const features = [
    {
      title: "Co-Study Center Conversion",
      description: "Transform unused spaces into peaceful co-study centers. Perfect for landlords looking to maximize property value.",
      icon: Building2,
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Automated Library Management",
      description: "Efficient platform for landlords to manage their library operations with ease and precision.",
      icon: LayoutGrid,
      className: "md:col-span-1 md:row-span-2",
    },
    {
      title: "Premium Co-Study Spaces",
      description: "Access to well-equipped, comfortable study environments designed for collaborative learning.",
      icon: BookOpenCheck,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Study Materials",
      description: "Comprehensive collection of study resources and materials for enhanced learning experience.",
      icon: GraduationCap,
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "AI-Powered Learning",
      description: "Personalized learning experiences powered by advanced AI technology.",
      icon: Brain,
      className: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-lime-600 bg-clip-text text-transparent">
            Empowering Learning Spaces
          </h2>
          <p className="text-slate-600 mb-8">
            Discover our comprehensive suite of features designed to transform education and study spaces
          </p>
          <motion.a
            href="/get-started"
            className="inline-flex items-center gap-2 text-lime-600 font-medium hover:text-lime-700 transition-colors"
            whileHover={{ x: 5 }}
          >
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <BentoCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className={feature.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
