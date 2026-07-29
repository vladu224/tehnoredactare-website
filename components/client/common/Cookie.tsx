"use client";

import { CookieConsent } from "@/lib/types/cookie-consent/cookie-consent";
import { useEffect, useState } from "react";

const STORAGE_KEY = 'cookie-consent';

export function Cookie() {
    const [visible, setVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if(!stored) setVisible(true);
    }, []);

    function saveConsent(analytics: boolean) {
        const consent: CookieConsent = {
            essential: true,
            analytics,
            timestamp: new Date().toISOString()
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
        setVisible(false);
    }

    function acceptAll() {
        saveConsent(true);
    }

    function acceptEssentialOnly() {
        saveConsent(false);
    }

    function savePreferences() {
        saveConsent(analyticsEnabled);
    }

    if(!visible) return null;

    return (
        <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
          <div className="max-w-2xl mx-auto bg-ink text-paper rounded-2xl shadow-lg overflow-hidden">
            <div className="p-5 sm:p-6">
              <h3 className="font-display text-lg text-paper">
                Respectăm confidențialitatea ta
              </h3>
              <p className="text-paper/60 text-sm mt-1.5 leading-relaxed">
                Utilizăm cookie-uri necesare pentru funcționarea și securitatea platformei. De asemenea, am dori să folosim cookie-uri de analiză pentru a ne ajuta să îmbunătățim experiența ta pe site.
              </p>

              {showDetails && (
                <div className="mt-4 space-y-3 border-t border-paper/10 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-paper">
                        Esențiale
                      </p>
                      <p className="text-xs text-paper/50">
                        Necesare pentru funcționarea site-ului. Mereu active.
                      </p>
                    </div>
                    <div className="w-10 h-6 rounded-full bg-accent/40 flex items-center px-0.5 shrink-0 cursor-not-allowed">
                      <div className="w-5 h-5 rounded-full bg-accent ml-auto" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-paper">
                        Analiză
                      </p>
                      <p className="text-xs text-paper/50">
                        Ne ajută să înțelegem traficul, anonim.
                      </p>
                    </div>
                    <button
                      onClick={(e) => setAnalyticsEnabled((prev) => !prev)}
                      className={`w-10 h-6 rounded-full flex items-center px-0.5 shrink-0 transition-colors ${
                        analyticsEnabled ? "bg-accent" : "bg-paper/15"
                      }`}
                      aria-label="Comută cookie-uri de analiză"
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white transition-transform cursor-pointer ${
                          analyticsEnabled ? "translate-x-4" : "translate-x-0"
                        }`}
                      />   
                    </button>
                  </div>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-2 mt-5">
                {!showDetails ? (
                  <>
                    <button
                      onClick={acceptAll}
                      className="flex-1 bg-accent hover:bg-accent-hover text-white text-sm font-medium px-4 py-2.5 rounded-lg transition cursor-pointer"
                    >
                      Acceptă
                    </button>
                    <button
                      onClick={acceptEssentialOnly}
                      className="flex-1 border border-paper/20 text-paper text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-paper/5 transition cursor-pointer"
                    >
                      Respinge
                    </button>
                    <button
                      onClick={() => setShowDetails(true)}
                      className="text-paper/60 text-sm px-4 py-2.5 hover:text-paper transition cursor-pointer"
                    >
                      Personalizează
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={savePreferences}
                      className="flex-1 bg-accent hover:bg-accent-hover text-white text-sm font-medium px-4 py-2.5 rounded-lg transition cursor-pointer"
                    >
                      Salvează preferințele
                    </button>
                    <button
                      onClick={() => setShowDetails(false)}
                      className="text-paper/60 text-sm px-4 py-2.5 hover:text-paper transition cursor-pointer"
                    >
                      Înapoi
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
    )
}