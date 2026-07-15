"use client";

import { useEffect, useState } from "react";

export function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if(!consent) setVisible(true);
    }, []);

    function accept() {
        localStorage.setItem("cookie-consent", "accept");
        setVisible(false);
    }

    if(!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-ink text-paper px-6 py-4">
          <div className="max-w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              Folosim cookie-uri esențiale pentru funcționarea site-ului. Nu folosim cookie-uri de tracking fără acordul tău.
            </p>
            <button
              onClick={accept}
              className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-2 rounded-md transition shrink-0 cursor-pointer"  
            >
              Am înțeles
            </button>
          </div>  
        </div>
    )
}