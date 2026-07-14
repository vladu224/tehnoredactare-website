"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const response = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            router.push("/admin");
            router.refresh();
        } else {
            const data = await response.json();
            setError(data.error ?? "Eroare la autentificare.");
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-paper flex items-center justify-center px-6">
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-line rounded-2xl p-8 w-full max-w-sm"
          >
            <h1 className="font-display text-2xl text-ink text-center">
              Acces admin
            </h1>
            <p className="text-ink-soft text-sm text-center mt-1">
                Atelier Tipar
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-ink mb-2">
                  Email    
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-line bg-paper px-4 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-2">
                  Parolă
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border border-line bg-paper px-4 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                />
              </div>  

              {error && 
                <p className="text-red-700 text-sm">{error}</p>
              }

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-medium px-6 py-3 rounded-md transition cursor-pointer"
              >
                {loading ? "Se verifică..." : "Intră în admin "}  
              </button>
            </div>
          </form>  
        </div>
    )
}