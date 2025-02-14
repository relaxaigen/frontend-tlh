"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const services = [
    { name: "Library Management", href: "https://manage.thelearninghubonline.com" },
    { name: "Space Conversion", href: "https://manage.thelearninghubonline.com/convert" },
    { name: "AI Learning", href: "https://student.thelearninghubonline.com/ai" },
    { name: "Study Materials", href: "https://student.thelearninghubonline.com/materials" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 96288 27094", href: "tel:+919628827094" },
    {
      icon: Mail,
      text: "thelearninghublibrary@gmail.com",
      href: "mailto:thelearninghublibrary@gmail.com",
    },
    {
      icon: MapPin,
      text: "123 Learning Street, Education City, IN 400001",
      href: "https://maps.google.com",
    },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="The Learning Hub Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">The Learning Hub</h3>
                <p className="text-sm text-slate-400">Empowering Education</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transform your learning experience with our innovative study spaces
              and comprehensive educational resources.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/people/The-Learning-Hub/100095584661844/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-lime-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/thelearninghublibrary/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-lime-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-lime-500 flex items-center gap-2 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-lime-500 flex items-center gap-3 transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-lime-500" />
                    <span className="text-sm">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              {new Date().getFullYear()} The Learning Hub. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="https://student.thelearninghubonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-lime-500 text-sm transition-colors"
              >
                Student Portal
              </Link>
              <Link
                href="https://manage.thelearninghubonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-lime-500 text-sm transition-colors"
              >
                Management Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
