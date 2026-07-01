import { ContactInfo, FinalPrice } from "@/lib/types";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ContactModelProps {
    estimate: FinalPrice;
    onClose: () => void;
    onSubmit: (contact: ContactInfo) => void;
}

const emptyContact: ContactInfo = {
    name: "",
    email: "",
    message: "",
};

export function ContactModel ({ estimate, onClose, onSubmit }: ContactModelProps) {
    const [contact, setContact] = useState<ContactInfo>(emptyContact);

    function update<K extends keyof ContactInfo>(key: K, val: ContactInfo[K]) {
        setContact({ ...contact, [key]: val });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onSubmit(contact);
    }

    return (
      <div
      className="fixed inset-0 bg-ink/40 flex items-center justify-center p-6 z-[9999]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      >
        <div
        className="bg-card rounded-2xl border border-line shadow-lg max-w-md w-full p-8"
        onClick={(e) => e.stopPropagation()}
        >
          <h2>Cere oferta</h2>
          <p>Total estimat:{" "}
            <span>
              {estimate.total.toLocaleString("ro-RO")} RON
            </span>
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-ink mb-2">
                Nume
              </label>
              <input 
                type="text"
                required
                value={contact.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">Email</label>
              <input
                type="email"
                required
                value={contact.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
              />
            </div>

            <div>
                <label className="block text-sm font-medium text-ink mb-2">
                Mesaj (opțional)
                </label>
                <textarea
                rows={3}
                value={contact.message}
                onChange={(e) => update("message", e.target.value)}
                className="w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition resize-none"
                />
            </div>

            <div className="flex gap-3 pt-2">
                <button
                type="button"
                onClick={onClose}
                className="flex-1 border border-line text-ink font-medium px-4 py-2.5 rounded-lg hover:bg-paper transition cursor-pointer"
                >
                Anulează
                </button>
                <button
                type="submit"
                className="flex-1 bg-accent hover:bg-accent-hover text-white font-medium px-4 py-2.5 rounded-lg transition cursor-pointer"
                >
                Trimite cererea
                </button>
            </div>
          </form>
        </div>
      </div>
    )
}