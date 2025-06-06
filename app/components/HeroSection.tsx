'use client';
import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import SearchBar from "./SearchBar"
import { GlareDemo } from './GlareDemo';

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  gridOptions?: {
    angle?: number
    cellSize?: number
    opacity?: number
    lightLineColor?: string
    darkLineColor?: string
  }
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "#e6f0ff",
  darkLineColor = "#e6f0ff",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`,
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90%" />
    </div>
  )
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Welcome to The Learning HUB",
      subtitle = {
        regular: "Your Gateway to ",
        gradient: "Knowledge",
      },
      description = "Discover a world of learning opportunities with our comprehensive educational platform. Join us to enhance your skills and unlock your potential.",
      gridOptions,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={cn("relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-slate-100 overflow-hidden", className)} ref={ref} {...rest}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_100%,rgba(56,189,248,0.13),rgba(59,130,246,0.05),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.13),rgba(59,130,246,0.05),transparent)]" />
        </div>
        <section className="relative max-w-full mx-auto pt-16">
          <RetroGrid {...gridOptions} />
          <SearchBar />
          <div className="max-w-screen-xl z-10 mx-auto px-4 pt-4 pb-20 gap-12 md:px-8">
            <div className="space-y-5 max-w-3xl mx-auto text-center">
              <h1 className="text-sm text-blue-700 group font-medium mx-auto px-6 py-2 bg-blue-50 border border-blue-200 rounded-full w-fit flex items-center shadow-sm">
                {title}
                <ChevronRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 duration-300" />
              </h1>
              <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                {description}
              </p>
              <h2 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl text-center">
                <span className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                  {subtitle.regular}
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                  {subtitle.gradient}
                </span>
              </h2>
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 mt-8">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1e40af_0%,#1d4ed8_50%,#1e40af_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white text-sm font-medium backdrop-blur-3xl">
                    <a
                      href="https://student.thelearninghubonline.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-blue-50 via-blue-100/30 to-transparent text-blue-700 border-blue-200 border hover:bg-gradient-to-tr hover:from-blue-100 hover:via-blue-200/30 hover:to-transparent transition-all sm:w-auto py-3 px-8"
                    >
                      Get Started
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </section>
        <GlareDemo />
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection }
