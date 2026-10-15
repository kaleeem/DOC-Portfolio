import { Plus, Globe, MessageCircle, Camera, Code } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise & Services', href: '#expertise' },
  { label: 'Our Approach', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Globe, href: '#', label: 'Website' },
  { icon: MessageCircle, href: '#', label: 'Message' },
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: Code, href: '#', label: 'Share' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-10 border-b border-gray-800">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white transition-transform group-hover:rotate-90 duration-300">
              <Plus size={20} strokeWidth={3} />
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">Spandana Clinic</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="w-9 h-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center text-gray-400 hover:text-white transition-all" aria-label={social.label}>
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs">
          <p>&copy; {new Date().getFullYear()} Spandana Physiotherapy &amp; Sports Clinic. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.google.com/maps/place/Spandana+physiotherapy+and+sports+clinic/@12.2964328,76.6479253,17z/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 px-2.5 py-1 rounded-md font-medium transition-colors"
            >
              NR Mohalla, Lakshmipuram, Mysuru
            </a>
            <a href="tel:+919108400271" className="text-gray-300 hover:text-white transition-colors">+91 91084 00271</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
