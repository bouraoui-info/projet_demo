"use client";

import { useState } from "react";

export default function AboutPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("🚀 ~ AboutPage ~ l:", password)
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // You can add login logic here
  };

  return (
    <div className="min-h-screen px-4 py-16 flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Login</h1>
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md"
      >
        <div className="mb-4">
          <label className="block text-left text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-left text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
