"use client";

import { PortofolioItem } from "@/lib/types/portofolio/portofolio";
import { Check, Loader2 } from "lucide-react";
import { title } from "process";
import { useRef, useState } from "react";

export function PortofolioItemCard({
    item,
    onDelete,
    onUploaded,
}: {
    item: PortofolioItem;
    onDelete: (id: string) => void;
    onUploaded: () => void;
}) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const pdfInputRef = useRef<HTMLInputElement>(null);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [uploadingPdf, setUploadingPdf] = useState(false);

    const [title, setTitle] = useState(item.title);
    const [category, setCategory] = useState(item.category);
    const [year, setYear] = useState(String(item.year));
    const [savingDetails, setSavingDetails] = useState<"idle" | "saving" | "saved">("idle");

    const isDirty = title !== item.title || category !== item.category || year !== String(item.year);

    async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploadingImage(true);
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(`/api/admin/portofolio/${item.id}/image`, {
            method: "POST",
            body: formData,
        });

        if (response.ok) onUploaded();
        setUploadingImage(false);
    }

    async function handlePdfChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploadingPdf(true);
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(`/api/admin/portofolio/${item.id}/pdf`, {
            method: "POST",
            body: formData,
        });

        if (response.ok) onUploaded();
        setUploadingPdf(false);
    }

    async function handleRemoveImage() {
        if (!confirm("Ștergi coperta acestui titlu?")) return;
        await fetch(`/api/admin/portofolio/${item.id}/image`, {
            method: "DELETE"
        });
        onUploaded();
    }

    async function handleRemovePdf() {
        if (!confirm("Ștergi PDF-ul acestui titlu?")) return;
        await fetch(`/api/admin/portofolio/${item.id}/pdf`, {
            method: "DELETE"
        });
        onUploaded();
    }

    async function handleSaveDetails() {
        setSavingDetails("saving");
        const response = await fetch(`/api/admin/portofolio/${item.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, category, year: Number(year) })
        });

        if (response.ok) {
            setSavingDetails("saved");
            onUploaded();
            setTimeout(() => setSavingDetails("idle"), 1500);
        } else {
            setSavingDetails("idle");
        }
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

          <div className="p-3 space-y-2">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-sm font-medium border border-line rounded px-2 py-1.5 bg-paper focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"  
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Categorie"
                className="text-xs border border-line rounded px-2 py-1.5 bg-paper focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
              />
              <input
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="An"
                className="text-xs border border-line rounded px-2 py-1.5 bg-paper focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
              />
            </div>

            <button
              onClick={handleSaveDetails}
              disabled={!isDirty || savingDetails === "saving"}
              className={`w-full text-xs px-3 py-2 rounded bg-accent hover:bg-accent-hover text-white disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center justify-center gap-1.5 cursor-pointer ${
                savingDetails === "saved"
                  ? "bg-green-500"
                  : ""
              }`}
            >
              {savingDetails === "saving" && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
              {savingDetails === "saved" && <Check className="w-3.5 h-3.5" />}
              {savingDetails === "saved" ? "Salvat" : savingDetails === "saving" ? "Se salvează" : "Salvează detalii"}
            </button>
          </div>  
          
          <div className="p-3">
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
                disabled={uploadingImage}
                className="text-xs px-3 py-2 rounded border border-line hover:border-accent hover:text-accent transition disabled:opacity-60 cursor-pointer"
              >
                {uploadingImage ? "Se încarcă..." : item.image_url ? "Schimbă coperta" : "Adaugă copertă"}
              </button>

              {item.image_url && (
                <>
                  <a
                  href={item.image_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-2 rounded border border-line hover:border-accent hover:text-accent transition flex items-center"
                  >
                    Vezi
                  </a>
                  <button
                    onClick={handleRemoveImage}
                    className="text-xs px-3 py-2 rounded border border-line text-red-700 transition cursor-pointer"
                  >
                    Elimină
                  </button>
                </>
              )}
            </div>

            <div className=" flex gap-2 mt-2">
              <input
                ref={pdfInputRef}
                type="file"
                accept="application/pdf"
                onChange={handlePdfChange}
                className="hidden"  
              />

              <button
                onClick={() => pdfInputRef.current?.click()}
                disabled={uploadingPdf}
                className={`w-full text-xs px-3 rounded border border-line hover:border-accent hover:text-accent transition disabled:opacity-60 cursor-pointer ${
                  item.pdf_url ? "py-2" : "py-4"
                }`}
              >
                {uploadingPdf ? "Se încarcă..." : item.pdf_url ? "Schimbă PDF" : "Adaugă PDF"}  
              </button>

              {item.pdf_url && (
                <>
                  <a
                    href={item.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-2 rounded border border-line hover:border-accent hover:text-accent transition flex items-center"
                  >
                    Vezi
                  </a>
                  <button
                    onClick={handleRemovePdf}
                    className="text-xs px-3 py-2 rounded border border-line text-red-700 hover:border-red-700 transition cursor-pointer"
                  >
                    Elimină
                  </button>
                </>
              )}
            </div>

            <button
                onClick={() => onDelete(item.id)}
                className="w-full text-xs px-3 py-2 mt-2 rounded border border-line text-red-700 hover:text-white  hover:border-red-500 hover:bg-red-500 transition cursor-pointer"
              >
                Șterge
              </button>
          </div>  
        </div>
    )
}