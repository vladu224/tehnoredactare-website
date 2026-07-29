"use client";

import { WelcomeBanner } from "@/components/admin/WelcomeBanner";

export default function AdminHome() {
    return (
        <div className="h-screen overflow-hidden flex text-center">
          <WelcomeBanner />
        </div>
    );
}