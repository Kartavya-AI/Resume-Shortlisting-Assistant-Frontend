"use client";

import React, { useState } from "react";
import axios from "axios";

interface Article {
  title: string;
  link: string;
  source: string;
  summary: string;
  snippet: string;
}

export default function PersonalizedNewsPage() {
  const [interest, setInterest] = useState<string>("");
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [profileSummary, setProfileSummary] = useState<string>("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const API_BASE = "https://personalized-news-977121587860.asia-south2.run.app";

  /** Step 1: Generate Questions */
  const handleGenerateQuestions = async () => {
    setLoading(true);
    setError("");
    setQuestions([]);
    try {
      const res = await axios.post(`${API_BASE}/generate-questions`, {
        interest_text: interest,
      });
      setQuestions(res.data.questions || []);
    } catch (err) {
      console.error(err);
      setError("Failed to generate questions.");
    } finally {
      setLoading(false);
    }
  };

  /** Step 2: Create Profile */
  const handleCreateProfile = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(`${API_BASE}/create-profile`, {
        initial_interest: interest,
        answers,
      });
      setProfileSummary(res.data.profile_summary || "");
    } catch (err) {
      console.error(err);
      setError("Failed to create profile.");
    } finally {
      setLoading(false);
    }
  };

  /** Step 3: Generate News */
  const handleGenerateNews = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(`${API_BASE}/generate-news`, {
        profile_summary: profileSummary,
        target_language: "en",
      });
      setArticles(res.data.articles || []);
    } catch (err) {
      console.error(err);
      setError("Failed to generate news.");
    } finally {
      setLoading(false);
    }
  };

  /** Step 4: Full Pipeline */
  const handleFullPipeline = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(`${API_BASE}/full-pipeline`, {
        initial_interest: interest,
        answers,
        target_language: "en",
      });
      setProfileSummary(res.data.profile_summary || "");
      setArticles(res.data.articles || []);
    } catch (err) {
      console.error(err);
      setError("Failed to run full pipeline.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-100">
      <div className="max-w-5xl mx-auto p-6 pt-16 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
          Personalized News Agent
        </h1>
        <p className="text-gray-600">
          Enter your interests and get personalized news, questions, and insights
          powered by AI.
        </p>

        {/* Interest Input */}
        <div className="mt-8 bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white border rounded-lg">
          <input
            type="text"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="p-4 rounded-lg w-full"
            placeholder="Enter your interest (e.g., Artificial Intelligence in Healthcare)"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button onClick={handleGenerateQuestions} className="bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg px-3 py-2 cursor-pointer text-zinc-500 hover:text-zinc-800" disabled={loading}>
            {loading ? "Loading..." : "Generate Questions"}
          </button>

         

         
          <button onClick={handleFullPipeline} className="bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg px-3 py-2 cursor-pointer text-zinc-500 hover:text-zinc-800"  disabled={loading}>
            Full Pipeline
          </button>
        </div>

        {error && <p className="text-red-500 font-medium">{error}</p>}

        {/* Questions */}
        {questions.length > 0 && (
          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-semibold">Generated Questions</h2>
            {questions.map((q, idx) => (
              <div key={idx} className="bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg p-3 ">
                <p>{q}</p>
                <input
                  type="text"
                  placeholder="Your Answer"
                  className="mt-2 p-2 bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg w-full"
                  value={answers[q] || ""}
                  onChange={(e) =>
                    setAnswers({ ...answers, [q]: e.target.value })
                  }
                />
              </div>
            ))}
             <button onClick={handleCreateProfile} className="bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg px-3 py-2 cursor-pointer text-zinc-500 hover:text-zinc-800"  disabled={loading}>
            Create Profile
          </button>
          </div>
          
        )}

        {/* Profile Summary */}
        {profileSummary && (
         <>
          <div className="mt-8 p-4 bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg">
            <h2 className="text-xl font-semibold">🧑 Profile Summary</h2>
            <p className="mt-2">{profileSummary}</p>
          </div>
           <button onClick={handleGenerateNews} className="bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-lg px-3 py-2 cursor-pointer text-zinc-500 hover:text-zinc-800"  disabled={loading}>
            Generate News
          </button>
         </>

        )}

        {/* Articles */}
        {articles.length > 0 && (
          <div className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">📰 Personalized News</h2>
            {articles.map((article, idx) => (
              <div
                key={idx}
                className="border p-4 rounded-md bg-white shadow-md"
              >
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold hover:underline"
                >
                  {article.title}
                </a>
                <p className="text-sm text-gray-500">{article.source}</p>
                <p className="mt-2">{article.summary}</p>
                <p className="mt-1 text-gray-600 italic">{article.snippet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
