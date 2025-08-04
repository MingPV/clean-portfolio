"use client";

import React from "react";
import Image from "next/image";

export default function ProjectHome() {
  return (
    <>
      <div className="w-full flex items-center mt-20 mb-8">
        <div className="text-3xl font-rollingStone">projects</div>
      </div>

      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-4 px-4 overflow-y-scroll pb-4">
        <div className="shadow-md shadow-base-400/20 flex flex-col gap-2 items-start border-1 border-base-400/10 dark:border-base-400 rounded-xl pb-4 px-2 pt-2">
          <div className="flex w-full justify-center mt-2">
            <Image
              src="/images/Gameshelf-1.png"
              width="250"
              height="200"
              className="shadow-lg shadow-indigo-950/70"
              alt="ProjectImage"
            />
          </div>
          <div className="ml-4 mt-6 text-base-400 dark:text-base-100 font-semibold">
            GameShelf - boardgame rental website
          </div>
          <div className="ml-4 mr-1 text-base-400/70 dark:text-base-100/60 text-start text-sm">
            Comprehensive web platform for renting board games, designed to
            streamline the entire rental process for both customers and
            providers. The system integrates essential services to create a
            seamless user experience from browsing to payment and management.
          </div>
          <div className="ml-4 mr-1 mt-3 flex flex-wrap gap-1">
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Next.js
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              TailwindCSS
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Swagger
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Playwright
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Jest
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              PostgreSQL
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Supabase
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Docker
            </div>
          </div>
          <div className="flex w-full h-full justify-end items-end">
            <a
              className="flex flex-row justify-end items-center gap-1 pr-4 py-2 underline underline-offset-4 text-sm font-sans hover:text-base-400/70 dark:hover:text-base-300"
              href="https://github.com/MingPV/Game-Shelf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="shadow-md shadow-base-400/20 flex flex-col gap-2 items-start border-1 border-base-400/10 dark:border-base-400 rounded-xl pb-4 px-2 pt-2">
          <div className="flex w-full justify-center mt-2">
            <Image
              src="/golang.webp"
              width="250"
              height="200"
              className="shadow-lg shadow-orange-600/20"
              alt="ProjectImage"
            />
          </div>
          <div className="ml-4 mt-6 text-base-400 dark:text-base-100 font-semibold">
            clean-go-template
          </div>
          <div className="ml-4 mr-1 text-base-400/70 dark:text-base-100/60 text-start text-sm">
            Clean and scalable starter template for Go backend applications,
            following Clean Architecture principles. Open-sourced on GitHub and
            gained positive feedback through stars
          </div>
          <div className="ml-4 mr-1 mt-3 flex flex-wrap gap-1">
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              GO
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Fiber v2
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              GORM
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              PostgreSQL
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              gRPC
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Swagger
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Redis
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Docker
            </div>
          </div>
          <div className="flex w-full h-full justify-end items-end">
            <a
              className="flex flex-row justify-end items-center gap-1 pr-4 py-2 underline underline-offset-4 text-sm font-sans hover:text-base-400/70 dark:hover:text-base-300"
              href="https://github.com/MingPV/clean-go-template"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="shadow-md shadow-base-400/20 flex flex-col gap-2 items-start border-1 border-base-400/10 dark:border-base-400 rounded-xl pb-4 px-2 pt-2">
          <div className="w-full flex justify-center">
            <div className="flex w-3/4 justify-center mt-2 bg-black shadow-xl shadow-base-400/30">
              <Image
                src="/images/vocab_1.png"
                width="75"
                height="200"
                className="shadow-lg"
                alt="ProjectImage"
              />
            </div>
          </div>
          <div className="ml-4 mt-6 text-base-400 dark:text-base-100 font-semibold">
            3000Words - IOS app
          </div>
          <div className="ml-4 mr-1 text-base-400/70 dark:text-base-100/60 text-start text-sm">
            A simple and lightweight iOS application that displays a curated
            list of 3000 essential English vocabulary words. Designed with a
            minimal interface using SwiftUI.
          </div>
          <div className="ml-4 mr-1 mt-3 flex flex-wrap gap-1">
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              SwiftUI
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              XCode
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              IOS
            </div>
          </div>
          <div className="flex w-full h-full justify-end items-end">
            <a
              className="flex flex-row justify-end items-center gap-1 pr-4 py-2 underline underline-offset-4 text-sm font-sans hover:text-base-400/70 dark:hover:text-base-300"
              href="https://github.com/MingPV/3000Words-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* More */}
        <div className="shadow-md shadow-base-400/20 flex flex-col gap-2 items-start border-1 border-base-400/10 dark:border-base-400 rounded-xl pb-4 px-2 pt-2">
          <div className="flex w-full justify-center mt-2">
            <Image
              src="/images/RiderChat1.png"
              width="250"
              height="200"
              className="shadow-lg shadow-pink-800/30"
              alt="ProjectImage"
            />
          </div>
          <div className="ml-4 mt-6 text-base-400 dark:text-base-100 font-semibold">
            Riderchat - web chat
          </div>
          <div className="ml-4 mr-1 text-base-400/70 dark:text-base-100/60 text-start text-sm">
            This project is a real-time chat web application that enables users
            to communicate efficiently and interactively. The platform offers a
            variety of features designed to support both private and group
            communication.
          </div>
          <div className="ml-4 mr-1 mt-3 flex flex-wrap gap-1">
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Next.js
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Node.js
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              TailwindCSS
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              MongoDB
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Socket.io
            </div>
          </div>
          <div className="flex w-full h-full justify-end items-end">
            <a
              className="flex flex-row justify-end items-center gap-1 pr-4 py-2 underline underline-offset-4 text-sm font-sans hover:text-base-400/70 dark:hover:text-base-300"
              href="https://github.com/MingPV/WebChat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="shadow-md shadow-base-400/20 flex flex-col gap-2 items-start border-1 border-base-400/10 dark:border-base-400 rounded-xl pb-4 px-2 pt-2">
          <div className="flex w-full justify-center mt-2">
            <Image
              src="/images/dental_1.png"
              width="250"
              height="200"
              className="shadow-lg shadow-red-900/40"
              alt="ProjectImage"
            />
          </div>
          <div className="ml-4 mt-6 text-base-400 dark:text-base-100 font-semibold">
            Dental Booking - backend service
          </div>
          <div className="ml-4 mr-1 text-base-400/70 dark:text-base-100/60 text-start text-sm">
            A simple backend service for scheduling dental appointments. Built
            with NestJS and secured with Passport.js for user authentication.
          </div>
          <div className="ml-4 mr-1 mt-3 flex flex-wrap gap-1">
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              NestJS
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Passport.js
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              MongoDB
            </div>
          </div>
          <div className="flex w-full h-full justify-end items-end">
            <a
              className="flex flex-row justify-end items-center gap-1 pr-4 py-2 underline underline-offset-4 text-sm font-sans hover:text-base-400/70 dark:hover:text-base-300"
              href="https://github.com/MingPV/dental-booking"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="shadow-md shadow-base-400/20 flex flex-col gap-2 items-start border-1 border-base-400/10 dark:border-base-400 rounded-xl pb-4 px-2 pt-2">
          <div className="flex w-full justify-center mt-2">
            <Image
              src="/images/chess_1.png"
              width="250"
              height="200"
              className="shadow-lg shadow-emerald-900/30"
              alt="ProjectImage"
            />
          </div>
          <div className="ml-4 mt-6 text-base-400 dark:text-base-100 font-semibold">
            Chess Detection - YOLOv8
          </div>
          <div className="ml-4 mr-1 text-base-400/70 dark:text-base-100/60 text-start text-sm">
            This project uses YOLOv8 to detect chessboards and track piece
            movements from video frames. It focuses on identifying board layout
            and detecting changes in piece positions over time.
          </div>
          <div className="ml-4 mr-1 mt-3 flex flex-wrap gap-1">
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              YOLOv8
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Python
            </div>
          </div>
          <div className="flex w-full h-full justify-end items-end"></div>
        </div>
        <div className="shadow-md shadow-base-400/20 flex flex-col gap-2 items-start border-1 border-base-400/10 dark:border-base-400 rounded-xl pb-4 px-2 pt-2">
          <div className="flex w-full justify-center mt-2">
            <Image
              src="/images/portfolio_1.png"
              width="250"
              height="200"
              className="shadow-lg shadow-stone-600/40"
              alt="ProjectImage"
            />
          </div>
          <div className="ml-4 mt-6 text-base-400 dark:text-base-100 font-semibold">
            Portfolio - 3D website
          </div>
          <div className="ml-4 mr-1 text-base-400/70 dark:text-base-100/60 text-start text-sm">
            A modern portfolio website featuring interactive 3D graphics built
            with Three.js for dynamic visuals and Nuxt.js for server-side
            rendering and smooth user experience. The site showcases projects
            and skills with engaging 3D elements and animations.
          </div>
          <div className="ml-4 mr-1 mt-3 flex flex-wrap gap-1">
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Nuxt
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              TailwindCSS
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Three.js
            </div>
          </div>
          <div className="flex w-full h-full justify-end items-end">
            <a
              className="flex flex-row justify-end items-center gap-1 pr-4 py-2 underline underline-offset-4 text-sm font-sans hover:text-base-400/70 dark:hover:text-base-300"
              href="https://github.com/MingPV/3D-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
