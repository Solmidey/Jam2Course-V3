import React from "react";

// Simple placeholder JamPreview component
// Replace iframe src or embed logic later when you connect real Jams
export default function JamPreview() {
  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-lg border p-4 bg-white flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Live Jam Preview</h2>
      <div className="flex-1 border rounded-xl overflow-hidden">
        <iframe
          src="https://example.com" // Replace with real jam URL
          className="w-full h-full border-0"
          title="Jam Preview"
        />
      </div>
    </div>
  );
}
