"use client";

import { GlareCard } from "./ui/glare-card";
import { Building2, Brain, BookOpenCheck } from "lucide-react";

export function GlareDemo() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-slate-50">
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
          <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
            <BookOpenCheck className="h-14 w-14 text-white mb-4" />
            <p className="font-bold text-white text-lg">Co-Study Spaces</p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              Transform your learning experience in our peaceful and well-equipped co-study centers designed for focused studying.
            </p>
          </GlareCard>
          
          <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
            <Building2 className="h-14 w-14 text-white mb-4" />
            <p className="font-bold text-white text-lg">Space Utilization</p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              Landlords can convert their unused spaces into profitable co-study centers, maximizing property value.
            </p>
          </GlareCard>
          
          <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
            <Brain className="h-14 w-14 text-white mb-4" />
            <p className="font-bold text-white text-lg">AI-Powered Learning</p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              Experience personalized learning with our advanced AI technology that adapts to your study patterns.
            </p>
          </GlareCard>
        </div>
      </div>
    </section>
  );
}
