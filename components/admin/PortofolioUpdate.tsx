"use client";

import { PortofolioItem } from "@/lib/types/portofolio/portofolio";
import React, { useEffect, useRef, useState } from "react";

export function PortofolioUpdate() {
    const [items, setItems] = useState<PortofolioItem[]>([]);
    const [loading, setLoading] = useState(true);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [year, setYear] = useState(String(new Date().getFullYear()));
    const [creating, setCreating] = useState(false);

    function loadItems() {
        fetch("/api/admin/portofolio")
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                setLoading(false);
            });
    }

    useEffect(() => {
        loadItems();
    }, []);

    async function handleCreate(e: React.FormEvent) {
        e.preventDefault();
        setCreating(true);

        const response = await fetch("/api/admin/portofolio", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, category, year: Number(year) }),
        });

        if (response.ok) {
            setTitle("");
            setCategory("");
            loadItems();
        }
        setCreating(false);
    }

    async function handleDelete(id: string) {
        if(!confirm("Ștergi acest titlu din portofoliu?")) return;
        await fetch(`/api/admin/portofolio/${id}`, {
            method: "DELETE"
        });
        loadItems();
    }

    return (
        <div>
          <h2 className="font-display text-lg text-ink mb-3">
            Lucrări recente (portofoliu)  
          </h2>

          <form
            onSubmit={handleCreate}
            className="border border-line rounded-2xl bg-card p-4 mb-4 grid grid-cols-1 sm:grid-cols-[2fr_1.5fr_1fr_auto] gap-2"
          >
            <input
              placeholder="Titlu"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="text-sm border border-line rounded px-3 py-2 bg-paper"
            />
            <input
              placeholder="Categorie (ex: Roman literar)"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="text-sm border border-line rounded px-3 py-2 bg-paper"
            />
            <input
              type="number"
              placeholder="Anul"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
              className="text-sm border border-line rounded px-3 py-2 bg-paper"
            />
            <button
              type="submit"
              disabled={creating}
              className="text-sm border border-line rounded px-3 py-2 bg-paper cursor-pointer"
            >
              {creating ? "..." : "Adaugă"}
            </button>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <PortofolioItemCard key={item.id} item={item} onDelete={handleDelete} onUploaded={loadItems} />
            ))}
          </div>
        </div>
    );
}

function PortofolioItemCard({
    item,
    onDelete,
    onUploaded,
}: {
    item: PortofolioItem;
    onDelete: (id: string) => void;
    onUploaded: () => void;
}) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);

    async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(`/api/admin/portofolio/${item.id}/upload`, {
            method: "POST",
            body: formData,
        });

        if (response.ok) onUploaded();
        setUploading(false);
    }

    return (
        <div className="border border-line rounded-2xl overflow-hidden bg-card">
          <div className="aspect-[3/4] bg-paper relative">
            {item.image_url ? (
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-ink-soft text-xs">
                  Fără copertă
                </div>
            )}
          </div>

          <div className="p-3">
            <p className="text-sm font-medium text-ink truncate">
              {item.title}
            </p>
            <p className="text-xs text-ink-soft mt-0.5">
              {item.category} · {item.year}
            </p>

            <div className="flex gap-2 mt-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="flex-1 text-xs px-3 py-2 rounded border border-line hover:border-accent hover:text-accent transition dsiabled: opacity-60 cursor-pointer"
              >
                {uploading ? "Se încarcă..." : item.image_url ? "Schimbă coperta" : "Adaugă copertă"}
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="text-xs px-3 py-2 rounded border border-line text-red-700 hover:border-red-700 transition cursor-pointer"
              >
                Șterge
              </button>
            </div>
          </div>  
        </div>
    )
}