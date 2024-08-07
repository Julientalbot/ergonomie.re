"use client"
import axios from "axios";
import { useState } from "react";

export const dynamic = "force-dynamic";

export default function Dashboard() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {data} = await axios.post("/api/chatgpt", {
      question,
    });

    setAnswer(data.answer || data?.error);
  };

  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold">Ergonomics Q&A</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Posez votre question sur l'ergonomie"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Envoyer
          </button>
        </form>
        {answer && (
          <div className="mt-4 p-4 border border-gray-300 rounded bg-gray-50">
            <h2 className="text-xl font-semibold">Réponse :</h2>
            <p>{answer}</p>
          </div>
        )}
      </section>
    </main>
  );
}
