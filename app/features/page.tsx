'use client';

import { motion } from "framer-motion";
import { 
  Building2, 
  LayoutGrid, 
  BookOpenCheck, 
  GraduationCap, 
  Brain,
  Users,
  Calendar,
  Shield,
  Smartphone,
  BarChart,
  MessageSquare,
  Clock,
  Zap
} from "lucide-react";

const features = [
  {
    category: "Learning Spaces",
    items: [
      {
        title: "Co-Study Centers",
        description: "Modern, well-equipped spaces designed for collaborative learning",
        icon: Building2,
        color: "blue"
      },
      {
        title: "Smart Room Booking",
        description: "Easy booking system for study rooms and facilities",
        icon: Calendar,
        color: "lime"
      },
      {
        title: "24/7 Access",
        description: "Round-the-clock access for members with secure entry",
        icon: Clock,
        color: "blue"
      }
    ]
  },
  {
    category: "Digital Platform",
    items: [
      {
        title: "AI Learning Assistant",
        description: "Personalized learning support powered by advanced AI",
        icon: Brain,
        color: "lime"
      },
      {
        title: "Mobile App",
        description: "Access all features on the go with our mobile application",
        icon: Smartphone,
        color: "blue"
      },
      {
        title: "Progress Tracking",
        description: "Monitor your learning journey with detailed analytics",
        icon: BarChart,
        color: "lime"
      }
    ]
  },
  {
    category: "Community Features",
    items: [
      {
        title: "Study Groups",
        description: "Connect with peers and form study groups",
        icon: Users,
        color: "blue"
      },
      {
        title: "Discussion Forums",
        description: "Engage in meaningful academic discussions",
        icon: MessageSquare,
        color: "lime"
      },
      {
        title: "Resource Sharing",
        description: "Share and access study materials with the community",
        icon: BookOpenCheck,
        color: "blue"
      }
    ]
  },
  {
    category: "For Landlords",
    items: [
      {
        title: "Space Conversion",
        description: "Transform unused spaces into profitable study centers",
        icon: Building2,
        color: "lime"
      },
      {
        title: "Management Dashboard",
        description: "Comprehensive tools for managing your space",
        icon: LayoutGrid,
        color: "blue"
      },
      {
        title: "Security Features",
        description: "Advanced security and monitoring systems",
        icon: Shield,
        color: "lime"
      }
    ]
  }
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-lime-600 bg-clip-text text-transparent">
              Our Features
            </h1>
            <p className="text-xl text-slate-600">
              Discover everything The Learning Hub has to offer
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="container mx-auto px-4">
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-lime-600 bg-clip-text text-transparent">
                  {category.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {category.items.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="bg-white p-8 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: featureIndex * 0.1 }}
                  >
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${
                      feature.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-lime-50 text-lime-600'
                    }`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-lime-600 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-slate-600 mb-8">
              Join The Learning Hub today and transform your learning experience
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://student.thelearninghubonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              >
                Student Portal
              </a>
              <a
                href="https://manage.thelearninghubonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 transition-colors"
              >
                Management Portal
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 