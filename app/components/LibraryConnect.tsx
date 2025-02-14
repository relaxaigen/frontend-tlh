"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import { HighlighterItem, HighlightGroup, Particles } from "./ui/highlighter";
import { Library, Users } from 'lucide-react';

export function LibraryConnect() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        [
          ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
          ["#pointer", { left: 400, top: 60 }, { duration: 2 }],
          ["#pointer", { left: 200, top: 60 }, { duration: 2 }],
        ],
        {
          repeat: Infinity,
        }
      );
    }
  }, [isInView, animate]);

  return (
    <section className="relative mx-auto mb-20 mt-6 max-w-5xl">
      <HighlightGroup className="group h-full">
        <div
          className="group/item h-full md:col-span-6 lg:col-span-12"
          data-aos="fade-down"
        >
          <HighlighterItem className="rounded-3xl p-6">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-black">
              <Particles
                className="absolute inset-0 -z-10 opacity-20 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={1000}
                color={"#84cc16"}
                staticity={30}
                ease={30}
                vy={-0.5}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  <div
                    className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                    ref={scope}
                  >
                    <Library className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-blue-700" />
                    <div
                      id="community"
                      className="absolute bottom-12 left-14 rounded-3xl border border-blue-200 bg-blue-50 px-2 py-1.5 text-xs text-gray-700 opacity-50"
                    >
                      Community Space
                    </div>
                    <div
                      id="research"
                      className="absolute left-2 top-20 rounded-3xl border border-blue-200 bg-blue-50 px-2 py-1.5 text-xs text-gray-700 opacity-50"
                    >
                      Research Resources
                    </div>
                    <div
                      id="academic"
                      className="absolute bottom-20 right-1 rounded-3xl border border-blue-200 bg-blue-50 px-2 py-1.5 text-xs text-gray-700 opacity-50"
                    >
                      Academic Support
                    </div>
                    <div
                      id="books"
                      className="absolute right-12 top-10 rounded-3xl border border-blue-200 bg-blue-50 px-2 py-1.5 text-xs text-gray-700 opacity-50"
                    >
                      Digital Library
                    </div>

                    <div id="pointer" className="absolute">
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-lime-500"
                        stroke="white"
                        strokeWidth="1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                        />
                      </svg>
                      <span className="relative -top-1 left-3 rounded-3xl bg-lime-500 px-2 py-1 text-xs text-white">
                        Explore
                      </span>
                    </div>
                  </div>

                  <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-center">
                      <h3 className="mt-6 pb-1 font-bold">
                        <span className="text-2xl md:text-4xl">
                          Need Help Finding Resources?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-center text-gray-600">
                      Our librarians are here to assist you in finding the perfect resources for your research!
                    </p>
                    <div className="flex justify-center flex-wrap gap-2">
                      <a
                        href="https://manage.thelearninghubonline.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-lime-500 rounded-full hover:bg-lime-600 transition-colors"
                      >
                        Manage Library
                      </a>
                      <a
                        href="https://student.thelearninghubonline.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-lime-700 bg-lime-50 border border-lime-200 rounded-full hover:bg-lime-100 transition-colors"
                      >
                        Student Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
}
