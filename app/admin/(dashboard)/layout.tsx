"use client";

import { BookOpen, Calculator, LogOut, Package, Tag } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
    { href: "/admin", label: "Tarife", icon: Tag },
    { href: "/admin/plans", label: "Pachete", icon: Package },
    { href: "/admin/calculator", label: "Calculator", icon: Calculator },
    { href: "/admin/portofolio", label: "Portofoliu", icon: BookOpen },
];

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();

    async function handleLogout() {
        await fetch("api/admin/logout", {
            method: "POST"
        });
        router.push("/admin/login");
        router.refresh();
    }

    return (
        <div className="grid grid-cols-[220px_1fr] min-h-screen">
          <aside className="bg-card border-r border-line py-6 flex flex-col">
            <div className="px-5 mb-8">
              <p className="font-display text-lg text-ink">
                Atelier Tipar
              </p>
              <p className="text-ink-soft text-xs tracking-widest uppercase mt-0.5">
                Panou Admin
              </p>   
            </div>

            <nav className="flex-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-2.5 px-5 py-2.5 text-sm transition ${
                        isActive
                          ? "bg-accent/10 border-1-2 border-accent text-accent font-medium"
                          : "text-ink-soft hover:text-ink border-1-2 border-transparent"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0 aria-hidden" />
                      {item.label}  
                    </Link>  
                );
              })}    
            </nav>

            <div className="px-5 pt-4 border-t border-line">
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-sm text-ink-soft hover:text-accent transition cursor-pointer"
              >
                <LogOut className="w-4 h-4 shrink-0 aria-hidden" />
                Ieși din cont
              </button>  
            </div>
          </aside>

          <main className="px-6 sm:px-12 py-10 bg-paper">
            {children}
          </main>
        </div>
    )
}