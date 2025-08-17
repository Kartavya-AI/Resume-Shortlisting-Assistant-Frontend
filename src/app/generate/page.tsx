"use client";

import React, { useState } from "react";
import axios from "axios";

interface WorksheetResponse {
  success: boolean;
  worksheet: string;
  metadata?: {
    topic: string;
    grade: string;
    num_questions: number;
    board: string;
    subject: string;
    stream: string;
    generation_time_seconds: number;
    content_length: number;
  };
  timestamp?: string;
}

export default function WorksheetGeneratorPage() {
  const [topic, setTopic] = useState<string>("");
  const [grade, setGrade] = useState<string>("12");
  const [numQuestions, setNumQuestions] = useState<number>();
  const [board, setBoard] = useState<string>("CBSE");
  const [subject, setSubject] = useState<string>("Science");
  const [stream, setStream] = useState<string>("Science");

  const [worksheet, setWorksheet] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const API_URL =
    "https://worksheet-generator-977121587860.asia-south2.run.app/generate-worksheet/";

  /** Generate Worksheet */
  const handleGenerateWorksheet = async () => {
    setLoading(true);
    setError("");
    setWorksheet("");
    try {
      const res = await axios.post<WorksheetResponse>(API_URL, {
        topic,
        grade,
        num_questions: numQuestions,
        board,
        subject,
        stream,
      });
      if (res.data.success) {
        setWorksheet(res.data.worksheet);
      } else {
        setError("Failed to generate worksheet. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Error connecting to the worksheet generator API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-100 min-h-screen">
      <div className="max-w-5xl mx-auto p-6 pt-16 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
          📘 Worksheet Generator
        </h1>
        <p className="text-gray-600">
          Automatically create customizable, curriculum-aligned worksheets across subjects and grade levels.
        </p>

        {/* Input Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="p-3 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg"
            placeholder="Enter Topic (e.g., Electromagnetic Induction)"
          />

          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="p-3 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg"
          >
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                Grade {i + 1}
              </option>
            ))}
          </select>

          <select
            value={board}
            onChange={(e) => setBoard(e.target.value)}
            className="p-3 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg"
          >
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="State Boards">State Boards</option>
          </select>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="p-3 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg"
          >
            <option>Mathematics</option>
            <option>Science</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
            <option>English</option>
            <option>History</option>
            <option>Geography</option>
          </select>

          <select
            value={stream}
            onChange={(e) => setStream(e.target.value)}
            className="p-3 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg"
          >
            <option>Science</option>
            <option>Commerce</option>
            <option>Arts</option>
          </select>

          <input
            type="number"
            value={numQuestions}
            min={5}
            max={20}
            onChange={(e) => setNumQuestions(Number(e.target.value))}
            className="p-3 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg"
            placeholder="Number of Questions"
          />
        </div>

        {/* Generate Button */}
        <div className="mt-6">
          <button
            onClick={handleGenerateWorksheet}
            disabled={loading}
            className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg px-6 py-3 text-zinc-700 hover:text-zinc-900 cursor-pointer"
          >
            {loading ? "Generating..." : "Generate Worksheet"}
          </button>
        </div>

        {error && <p className="text-red-500 font-medium">{error}</p>}

        {/* Output */}
        {worksheet && (
          <div className="mt-8 p-6 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg whitespace-pre-line">
            <h2 className="text-xl font-semibold">📄 Generated Worksheet</h2>
            <p className="mt-4 text-gray-800">{worksheet}</p>
          </div>
        )}
      </div>
    </div>
  );
}
