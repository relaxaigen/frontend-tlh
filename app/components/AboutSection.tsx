"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Users, BookOpenCheck } from "lucide-react";

export function AboutSection() {
  const contentSections = [
    {
      title: "Modern Co-Study Spaces",
      description:
        "Experience learning together in our state-of-the-art collaborative spaces. Equipped with smart boards, comfortable seating, and high-speed WiFi, our co-study areas are designed to enhance group discussions and peer learning.",
      features: [
        "24/7 Access for Members",
        "Sound-Proof Discussion Rooms",
        "Interactive Smart Displays",
      ],
      image: "/about-1.jpg",
      imagePosition: "left",
      icon: Users,
    },
    {
      title: "Annual Chess Championship",
      description:
        "Join our prestigious chess tournament where minds battle it out for glory. With over 200+ participants yearly, our chess championship has become a hallmark event fostering strategic thinking and competitive spirit.",
      features: [
        "₹50,000 Prize Pool",
        "International Participants",
        "Professional Arbitration",
      ],
      image: "/about-2.jpg",
      imagePosition: "right",
      icon: Trophy,
    },
    {
      title: "Our Achievements",
      description:
        "The Learning Hub has established itself as a center of excellence, nurturing talent and fostering innovation. Our commitment to quality education has earned us recognition across the academic landscape.",
      features: [
        "Best Digital Library Award 2024",
        "100,000+ Student Success Stories",
        "National Education Excellence Badge",
      ],
      image: "/about-3.jpg",
      imagePosition: "left",
      icon: BookOpenCheck,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="space-y-32">
          {contentSections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                section.imagePosition === "left"
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-20`}
            >
              <motion.div
                className="w-full lg:w-1/2"
                initial={{
                  x: section.imagePosition === "left" ? -100 : 100,
                  opacity: 0,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-lime-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                  <div className="relative bg-white rounded-xl border border-slate-200 p-2 ring-1 ring-slate-200/50">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover transform transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2"
                initial={{
                  x: section.imagePosition === "left" ? 100 : -100,
                  opacity: 0,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="relative p-8 bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-600 to-lime-500"></div>
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-blue-600/10 to-lime-500/10 rounded-full blur-3xl"></div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <section.icon className="w-8 h-8 text-blue-600" />
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-lime-600 bg-clip-text text-transparent">
                        {section.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-700 leading-relaxed mb-6">
                      {section.description}
                    </p>

                    <div className="space-y-3">
                      {section.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-slate-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-lime-500"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
