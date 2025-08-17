"use client";

import React, { useState } from "react";
import axios from "axios";

interface Candidate {
  name: string;
  mobile: string;
  score: number;
  questions: string[];
  reasoning: string;
}

interface ShortlistResponse {
  job_analysis: string;
  candidates: Candidate[];
  total_candidates: number;
}

export default function ResumeShortlistingPage() {
  const [jobDescription, setJobDescription] = useState<string>("");
  const [resumeFiles, setResumeFiles] = useState<FileList | null>(null);

  const [result, setResult] = useState<ShortlistResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const API_URL =
    "https://resume-shortlisting-service-977121587860.asia-south1.run.app/shortlist-resumes"; // replace with actual endpoint

  /** Handle File Upload */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResumeFiles(e.target.files);
    }
  };

  /** Handle API Call */
  const handleShortlistResumes = async () => {
    if (!jobDescription || !resumeFiles) {
      setError("Please provide a job description and at least one resume.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("job_description", jobDescription);
      Array.from(resumeFiles).forEach((file) =>
        formData.append("resume_files", file)
      );

      const res = await axios.post<ShortlistResponse>(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResult(res.data);
    } catch (err) {
      console.error(err);
      setError("Error connecting to the resume shortlisting API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-100 min-h-screen">
      <div className="max-w-5xl mx-auto p-6 pt-16 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
          📝 Resume Shortlisting Assistant
        </h1>
        <p className="text-gray-600">
          Automates resume evaluation and shortlisting, surfacing top candidates
          based on job fit, skills, and experience.
        </p>

        {/* Input Form */}
        <div className="grid grid-cols-1 gap-4 mt-8">
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="p-3 h-32 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg"
            placeholder="Paste Job Description here..."
          />

          <input
            type="file"
            multiple
            accept="application/pdf"
            onChange={handleFileChange}
            className="p-3 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg"
          />
        </div>

        {/* Shortlist Button */}
        <div className="mt-6">
          <button
            onClick={handleShortlistResumes}
            disabled={loading}
            className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg px-6 py-3 text-zinc-700 hover:text-zinc-900 cursor-pointer"
          >
            {loading ? "Shortlisting..." : "Shortlist Resumes"}
          </button>
        </div>

        {error && <p className="text-red-500 font-medium">{error}</p>}

        {/* Output */}
        {result && (
          <div className="mt-8 p-6 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg">
            <h2 className="text-xl font-semibold mb-2">📋 Job Analysis</h2>
            <p className="text-gray-700 mb-6">{result.job_analysis}</p>

            <h2 className="text-xl font-semibold mb-4">
              👥 Candidates ({result.total_candidates})
            </h2>

            <div className="space-y-6">
              {result.candidates.map((candidate, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg"
                >
                  <h3 className="text-lg font-bold text-primary">
                    {candidate.name} — Score: {candidate.score}/10
                  </h3>
                  <p className="text-sm text-gray-500">
                    📞 {candidate.mobile || "Not Provided"}
                  </p>
                  <p className="mt-2 text-gray-700">
                    <strong>Reasoning:</strong> {candidate.reasoning}
                  </p>
                  <div className="mt-3">
                    <strong>Interview Questions:</strong>
                    <ul className="list-disc list-inside text-gray-700 mt-1">
                      {candidate.questions.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
