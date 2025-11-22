import React from "react";
import JamPreview from "./JamPreview";

export default function CoursePage() {
  return (
    <div className="w-full min-h-screen p-6 flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Todo List Tutorial</h1>
          <p className="text-gray-600 max-w-xl text-lg">
            Learn how to build a simple but powerful todo list app using modern
            tooling, structured prompts, and AI-assisted workflows.
          </p>
        </div>
        <a
          href="#" // Replace with your real Jam link
          className="px-5 py-3 rounded-2xl bg-black text-white text-lg shadow hover:opacity-80 transition"
        >
          View Jam
        </a>
      </div>

      {/* Overview Section */}
      <section className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4 max-w-4xl">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          This tutorial walks you through the core workflow behind the Todo List
          course project. You'll explore step-by-step instructions, design
          reasoning, and prompt breakdowns that illustrate how the app was
          generated and refined.
        </p>
      </section>

      {/* Prompts Section */}
      <section className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4 max-w-4xl">
        <h2 className="text-2xl font-semibold">Prompts Used</h2>

        {/* Replace with dynamic data later */}
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>"Generate a basic todo list app layout using React."</li>
          <li>"Improve the styling with Tailwind and add animations."</li>
          <li>"Add ability to create, edit, and delete todos."</li>
          <li>"Store todos in local storage so they persist across refreshes."</li>
        </ul>
      </section>

      {/* Jam Preview Embed */}
      <JamPreview />
    </div>
  );
}
