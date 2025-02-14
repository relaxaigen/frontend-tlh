"use client";

import { GlareCard } from "./ui/glare-card";
import { Building2, GraduationCap, Brain } from "lucide-react";

export function GlareDemo() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-200 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-lime-600 bg-clip-text text-transparent">
            Discover Our Features
          </h2>
          <p className="text-slate-600">
            Explore the unique features that make our learning hub special
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <GlareCard className="flex flex-col items-center justify-center">
            <Building2 className="h-14 w-14 text-white mb-4" />
            <h3 className="text-white text-lg font-bold">Co-Study Spaces</h3>
            <p className="text-neutral-200 text-sm mt-2 text-center px-4">
              Transform unused rooms into peaceful study environments
            </p>
          </GlareCard>
          
          <GlareCard className="flex flex-col items-center justify-center">
            <GraduationCap className="h-14 w-14 text-white mb-4" />
            <h3 className="text-white text-lg font-bold">Study Materials</h3>
            <p className="text-neutral-200 text-sm mt-2 text-center px-4">
              Access comprehensive learning resources and materials
            </p>
          </GlareCard>
          
          <GlareCard className="flex flex-col items-center justify-center">
            <Brain className="h-14 w-14 text-white mb-4" />
            <h3 className="text-white text-lg font-bold">AI Integration</h3>
            <p className="text-neutral-200 text-sm mt-2 text-center px-4">
              Experience personalized learning with AI technology
            </p>
          </GlareCard>
        </div>
      </div>
    </section>
  );
}
