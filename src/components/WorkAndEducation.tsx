"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function WorkAndEducation() {
  const [selectedWork, setSelectedWork] = useState(true);

  return (
    <div className="w-full flex flex-col mt-8">
      <div className="w-full p-1 bg-base-400/10 dark:bg-base-400 rounded-lg">
        <div className="flex flex-row w-full">
          <div
            className={`${
              selectedWork
                ? "bg-white dark:bg-base-500 text-base-500 dark:text-base-100 shadow-xs shadow-base-400/30"
                : "text-base-400/80 dark:text-base-100/50"
            } rounded-md py-1 w-1/2 text-center cursor-pointer`}
            onClick={() => setSelectedWork(true)}
          >
            Work
          </div>
          <div
            className={`${
              selectedWork
                ? "text-base-400/80 dark:text-base-100/50"
                : "bg-white dark:bg-base-500 text-base-500 dark:text-base-100 shadow-xs shadow-base-400/30"
            } rounded-md py-1 w-1/2 text-center cursor-pointer`}
            onClick={() => setSelectedWork(false)}
          >
            Education
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full border-1 border-base-400/10 dark:border-base-400 rounded-xl mt-2 shadow-md shadow-base-400/20">
        <ul className="ml-10 pt-4 pb-8 border-l border-base-400/30 dark:border-base-400">
          {/* Experiences */}
          <li className={`relative ml-10 py-4 ${selectedWork ? "" : "hidden"}`}>
            <a
              target="_blank"
              className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
              href="https://www.dbs.com.sg"
            >
              <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border-1 border-base-400/30">
                <Image
                  className="aspect-square h-full w-full object-contain "
                  alt="DBS Bank"
                  src="/aisIcon.png"
                  width={48}
                  height={48}
                />
              </span>
            </a>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <time className="text-xs text-muted-foreground text-base-500/80 dark:text-base-100/70">
                <span>Jun 2025</span>
                <span> - </span>
                <span>Jul 2025</span>
              </time>
              <h2 className="font-semibold leading-none">
                AIS (Advance Info Service Public Company)
              </h2>
              <p className="text-sm text-muted-foreground text-base-500/80 dark:text-base-100/70">
                Software Development Intern
              </p>
              <ul className="ml-4 list-outside list-disc">
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Developed and maintained RESTful backend microservices using
                  Java and Spring Boot, ensuring high performance and
                  scalability
                </li>
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Deployed and managed services on OpenShift, gaining hands-on
                  experience with CI/CD pipelines
                </li>
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Collaborated closely with QA testers and system analysts (SA)
                  to clarify requirements, reproduce issues, and validate bug
                  fixes
                </li>
              </ul>
            </div>
          </li>
          <li className={`relative ml-10 py-4 ${selectedWork ? "" : "hidden"}`}>
            <a
              target="_blank"
              className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
              href="https://www.dbs.com.sg"
            >
              <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border-1 border-base-400/30">
                <Image
                  className="aspect-square h-full w-full bg-background object-contain"
                  alt="DBS Bank"
                  src="/mcvIcon.png"
                  width={48}
                  height={48}
                />
              </span>
            </a>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <time className="text-xs text-muted-foreground text-base-500/80 dark:text-base-100/70">
                <span>Jun 2024</span>
                <span> - </span>
                <span>Aug 2024</span>
              </time>
              <h2 className="font-semibold leading-none">myCourseVille</h2>
              <p className="text-sm text-muted-foreground text-base-500/80 dark:text-base-100/70">
                Front-end Developer Intern
              </p>
              <ul className="ml-4 list-outside list-disc">
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Developed a web interface based on Figma designs using PHP,
                  CSS, JavaScript, jQuery, and AJAX, integrating complex data
                  management features with MySQL and phpMyAdmin
                </li>
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Collaborated with a team of developers, managing version
                  control through GitHub and practicing teamwork and project
                  coordination
                </li>
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Assist other projects by building components using Next.js,
                  Typescript, and Tailwind CSS
                </li>
              </ul>
            </div>
          </li>
          {/* Education */}
          <li className={`relative ml-10 py-4 ${selectedWork ? "hidden" : ""}`}>
            <a
              target="_blank"
              className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
              href="https://www.dbs.com.sg"
            >
              <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border-1 border-base-400/30">
                <Image
                  className="aspect-square h-full w-full bg-background object-contain"
                  alt="DBS Bank"
                  src="/chulaIcon.png"
                  width={48}
                  height={48}
                />
              </span>
            </a>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <time className="text-xs text-muted-foreground text-base-500/80 dark:text-base-100/70">
                <span>Aug 2022</span>
                <span> - </span>
                <span>Current (Expected 2026)</span>
              </time>
              <h2 className="font-semibold leading-none">
                Chulalongkorn University
              </h2>
              <p className="text-sm text-muted-foreground text-base-500/80 dark:text-base-100/70">
                Bachelor of Engineering in Computer Engineering
              </p>
              <ul className="ml-4 list-outside list-disc">
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Studying core topics in computer engineering including
                  programming, data structures, algorithms, computer
                  architecture, and networks
                </li>
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Gaining hands-on experience through labs and team projects in
                  both hardware and software development
                </li>
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Exploring areas like web development, machine learning, and
                  systems programming to prepare for real-world applications
                </li>
              </ul>
            </div>
          </li>
          <li className={`relative ml-10 py-4 ${selectedWork ? "hidden" : ""}`}>
            <a
              target="_blank"
              className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
              href="https://www.dbs.com.sg"
            >
              <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border-1 border-base-400/30">
                <Image
                  className="aspect-square h-full w-full bg-background object-contain"
                  alt="DBS Bank"
                  src="/cruIcon.png"
                  width={48}
                  height={48}
                />
              </span>
            </a>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <time className="text-xs text-muted-foreground text-base-500/80 dark:text-base-100/70">
                <span>May 2019</span>
                <span> - </span>
                <span>Mar 2022</span>
              </time>
              <h2 className="font-semibold leading-none">
                Chonrassadornumrung School
              </h2>
              <p className="text-sm text-muted-foreground text-base-500/80 dark:text-base-100/70">
                EEC Engineering Program (Senior High School)
              </p>
              <ul className="ml-4 list-outside list-disc">
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Enrolled in the EEC (Eastern Economic Corridor)
                  Science-Mathematics Program, emphasizing advanced STEM
                  education with a focus on practical skills, innovation, and
                  technology to prepare for future careers in engineering and
                  related fields.
                </li>
              </ul>
            </div>
          </li>
          <li className={`relative ml-10 py-4 ${selectedWork ? "hidden" : ""}`}>
            <a
              target="_blank"
              className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
              href="https://www.dbs.com.sg"
            >
              <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border-1 border-base-400/30">
                <Image
                  className="aspect-square h-full w-full bg-background object-contain"
                  alt="DBS Bank"
                  src="/cruIcon.png"
                  width={48}
                  height={48}
                />
              </span>
            </a>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <time className="text-xs text-muted-foreground text-base-500/80 dark:text-base-100/70">
                <span>May 2016</span>
                <span> - </span>
                <span>Mar 2019</span>
              </time>
              <h2 className="font-semibold leading-none">
                Chonrassadornumrung School
              </h2>
              <p className="text-sm text-muted-foreground text-base-500/80 dark:text-base-100/70">
                Science-Mathematics Program (Junior High School)
              </p>
              <ul className="ml-4 list-outside list-disc">
                <li className="prose pr-8 text-sm dark:prose-invert text-base-500/90 dark:text-base-100">
                  Studied in the Science-Mathematics Program with a focus on
                  foundational math and science subjects, developing critical
                  thinking and problem-solving skills.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
