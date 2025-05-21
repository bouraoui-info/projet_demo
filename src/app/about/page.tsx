"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 py-16 flex flex-col items-center justify-center text-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Image src="/next.svg" alt="Next.js Logo" width={120} height={30} className="mb-6 dark:invert" />

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h1>

      <p className="max-w-xl text-lg leading-relaxed">
        Welcome to our app! This project is built with <strong>Next.js 13+</strong>, <strong>Tailwind CSS</strong>, and modern best practices.
        Our goal is to provide performant, responsive, and accessible web experiences.
      </p>
    </div>
  );
}
