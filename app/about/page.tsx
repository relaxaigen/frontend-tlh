'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Target, 
  Lightbulb, 
  Heart, 
  Award, 
  Quote
} from "lucide-react";

const teamMembers = [
  {
    name: "Ankit Yadav",
    role: "Founder & CEO",
    image: "/t1.png",
    bio: "Passionate about transforming education through technology and innovation."
  },
  {
    name: "Prabhat Yadav",
    role: "Head of Operations",
    image: "/t2.png",
    bio: "Expert in educational management with a focus on operational excellence."
  }
];

const milestones = [
  {
    year: "2022",
    title: "Co-Study Space Launch",
    description: "Initiated our journey by launching a collaborative co-study environment for students."
  },
  {
    year: "2023",
    title: "1,000+ Students",
    description: "Reached the milestone of empowering over 1,000 students through quality learning support."
  },
  {
    year: "2024",
    title: "Expanded to 3 Branches",
    description: "Successfully expanded operations by opening 3 new branches to serve more learners."
  }
];

const testimonials = [
  {
    quote: "The Learning Hub transformed how I study. The co-study spaces are amazing!",
    author: "Priya Sharma",
    role: "Medical Student"
  },
  {
    quote: "As a landlord, converting my space into a co-study center was the best decision.",
    author: "Rajesh Patel",
    role: "Property Owner"
  },
  {
    quote: "The AI-powered learning features have made studying so much more effective.",
    author: "Amit Kumar",
    role: "Engineering Student"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-lime-600 bg-clip-text text-transparent">
              About The Learning Hub
            </h1>
            <p className="text-xl text-slate-600">
              Transforming education through innovative spaces and technology
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To make quality education accessible to everyone through innovative learning spaces and technology.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Lightbulb className="h-12 w-12 text-lime-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600">
                To become the leading platform for collaborative learning and space utilization in education.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Heart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-slate-600">
                Innovation, accessibility, and excellence in education drive everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-lime-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-slate-600">
              The passionate individuals behind The Learning Hub
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-stretch gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-sm flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative h-96">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-lime-600 mb-4">{member.role}</p>
                  <p className="text-slate-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-lime-600 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-slate-600">
              Key milestones in our growth and development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-8 mb-12"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Award className="h-12 w-12 text-blue-600" />
                </div>
                <div>
                  <span className="text-lime-600 font-bold">{milestone.year}</span>
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-lime-600 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <p className="text-slate-600">
              Hear from our community of learners and partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Quote className="h-8 w-8 text-lime-600 mb-4" />
                <p className="text-slate-600 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-slate-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 