"use client";

import { WelcomeBanner } from "@/components/admin/pages/home/WelcomeBanner";

export default function HomeAdmin() {
    return (
        <div className="h-screen overflow-hidden flex text-center">
          <WelcomeBanner />
        </div>
    );
}