import { useState } from "react"
import { Menu, X, Plus } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-[#6C5CE7] flex items-center justify-center text-white font-bold shadow-md shadow-indigo-100 group-hover:scale-105 transition-transform">
            <Plus className="w-5 h-5 stroke-[3]" />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">Spandana</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? "text-[#6C5CE7] font-semibold text-sm transition-colors"
                  : "text-gray-600 hover:text-[#6C5CE7] text-sm font-medium transition-colors"
              }
            >
              <span className="flex items-center gap-1">
                {link.label}
                {link.dropdown && <ChevronDown className="w-4 h-4" />}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 border-2 border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
          >
            Let&apos;s Talk <span className="text-base leading-none">&#8593;</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#6C5CE7] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={
                  link.active
                    ? "px-4 py-3 rounded-xl text-sm font-semibold bg-[#6C5CE7]/10 text-[#6C5CE7]"
                    : "px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50"
                }
              >
                <span className="flex items-center gap-1">
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 border-2 border-[#6C5CE7] text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white px-5 py-3 rounded-full text-sm font-semibold transition-all"
            >
              Let&apos;s Talk <span className="text-base leading-none">&#8593;</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
