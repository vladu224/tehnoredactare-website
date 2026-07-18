import { PortofolioItem } from "@/lib/types/portofolio/portofolio";
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
                className="w-full text-xs px-3 py-2 rounded border border-line hover:border-accent hover:text-accent transition disabled:opacity-60 cursor-pointer"
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