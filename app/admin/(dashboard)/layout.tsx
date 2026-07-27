"use client";

import { BookOpen, Calculator, LogOut, Menu, Package, Tag, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

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
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    async function handleLogout() {
        await fetch("api/admin/logout", {
            method: "POST"
        });
        router.push("/admin/login");
        router.refresh();
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <div 
          className={`min-h-screen sm:grid transition-all duration-300 bg-paper ${
            isSidebarCollapsed
              ? "sm:grid-cols-[64px_1fr]"
              : "sm:grid-cols-[220px_1fr]"
          }`}
        >
          {/* TOPBAR */}
          <header className="sm:hidden sticky top-0 z-50 w-full bg-card border-b border-line px-5 py-4 flex items-center justify-between">
            <div>
              <p className="font-display text-lg text-ink font-semibold">
                Book Studio
              </p>
              <p className="text-ink-soft text-[10px] tracking-widest uppercase">
                Panou admin
              </p>
            </div>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="text-ink cursor-pointer p-1"
              aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              )}
            </button>
          </header>

          {isMenuOpen && (
            <div className="sm:hidden fixed inset-x-0 top-[65px] bottom-0 z-40 bg-card flex flex-col justify-between p-5 overflow-y-auto">
              <nav className="space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 px-4 py-3 rounded-md text-base transition ${
                        isActive
                          ? "bg-accent/10 text-accent font-medium"
                          : "text-ink-soft hover:text-ink hover:bg-ink/5"
                      }`}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-line mt-auto">
                <button
                  onClick={() => { closeMenu(); handleLogout(); }}
                  className="flex items-center gap-3 text-base text-ink-soft hover:text-accent transition cursor-pointer w-full px-4 py-3"
                >
                  <LogOut className="w-5 h-5 shrink-0" />
                  Ieși din cont
                </button>
              </div>
            </div>
          )}

          {/* SIDEBAR */}
          <aside className="hidden sm:flex bg-card border-r border-line py-6 flex-col h-screen sticky top-0 transition-all duration-300 relative select-none">
                
            <div className={`flex items-center mb-8 h-10 ${
              isSidebarCollapsed
                ? "justify-center px-0"
                : "justify-between px-5"}`
              }
            >
              {!isSidebarCollapsed && (
                <div className="whitespace-nowrap overflow-hidden transition-opacity duration-200">
                  <p className="font-display text-lg text-ink font-semibold">
                    Book Studio
                  </p>
                  <p className="text-ink-soft text-xs tracking-widest uppercase">
                    Panou admin
                  </p>
                </div>
              )}

              <button
                onClick={() => setSidebarCollapsed((prev) => !prev)}
                className="text-ink hover:bg-ink/5 p-1.5 rounded-md transition cursor-pointer shrink-0"
                title={
                  isSidebarCollapsed
                    ? "Extinde meniul"
                    : "Restrânge meniul"
                }
                aria-label="Comută starea meniului"
              >
                {isSidebarCollapsed ? (
                  <Menu className="w-5 h-5" strokeWidth={1.5} />
                ) : (
                  <X className="w-5 h-5" strokeWidth={1.5} />
                )}
              </button>
            </div>

            <nav className="flex-1 space-y-1 overflow-y-auto">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    title={
                      isSidebarCollapsed 
                        ? item.label 
                        : undefined
                    }
                    className={`flex items-center gap-3 py-2.5 text-sm transition-all ${
                      isSidebarCollapsed
                        ? "justify-center px-0"
                        : "px-5"
                      } ${
                      isActive
                        ? "bg-accent/10 border-l-2 border-accent text-accent font-medium"
                        : "text-ink-soft hover:text-ink border-l-2 border-transparent"
                      }`
                    }
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {!isSidebarCollapsed && (
                      <span className="whitespace-nowrap transition-opacity duration-200">
                        {item.label}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className={`pt-4 border-t border-line shrink-0 ${
              isSidebarCollapsed
                ? "flex justify-center px-0"
                : "px-5"
              }`
            }
            >
              <button
                onClick={handleLogout}
                title={
                  isSidebarCollapsed
                    ? "Ieși din cont"
                    : undefined
                }
                className={`flex items-center gap-2 text-sm text-ink-soft hover:text-accent transition cursor-pointer ${
                  isSidebarCollapsed
                    ? "justify-center"
                    : ""
                  }`
                }
              >
                <LogOut className="w-4 h-4 shrink-0" />
                {!isSidebarCollapsed && (
                  <span className="whitespace-nowrap transition-opacity duration-200">
                    Ieși din cont
                  </span>
                )}
              </button>
            </div>
          </aside>

          <main className="px-6 sm:px-12 py-10 h-full overflow-y-auto">
            {children}
          </main>
        </div>
    );
}