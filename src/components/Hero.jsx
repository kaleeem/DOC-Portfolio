import { ArrowUpRight, Phone } from 'lucide-react'
import Aurora from './Aurora'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-44 sm:pb-20 overflow-hidden lg:bg-gradient-to-b lg:from-purple-50/40 lg:to-white" style={{ isolation: 'isolate' }}>
      {/* Mobile Background with Live-Editable CSS Variables */}
      <div
        id="mobile-bg-container"
        className="block lg:hidden absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none"
        style={{
          '--blue-wash-opacity': 0.4,
          '--grid-opacity': 0.1,
          background: 'linear-gradient(rgb(241 239 243) 0%, rgb(249 249 249 / 40%) 50%, rgb(232 232 245) 100%)',
        }}
      >
        {/* SVG Grid Overlay — opacity controlled by --grid-opacity CSS variable */}
        <svg
          className="absolute inset-0 w-full h-full stroke-indigo-600"
          style={{ opacity: 'var(--grid-opacity)' }}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="mobile-hero-grid-subtle" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mobile-hero-grid-subtle)" />
        </svg>

        {/* Seamless Bottom Fade-Out — blends grid into the next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(225,225,241,0) 0%, #ffffff 100%)',
          }}
        />
      </div>

      {/* Ambient Aurora background — Desktop only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <Aurora
          colorStops={["#cae2c7", "#eecdcd", "#cac5e2"]}
          blend={0.5}
          amplitude={1.0}
          speed={1.1}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-1.5 bg-primary/10 text-primary text-[13px] sm:text-sm font-semibold px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full mb-6 w-fit whitespace-nowrap overflow-hidden">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse flex-shrink-0" />
              <span>Welcome to</span>
              <span className="bg-white/60 text-primary-dark px-1.5 sm:px-2 py-0.5 rounded-md font-bold flex-shrink-0">Spandana</span>
              <span>Physiotherapy &amp; Sports Clinic</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Expert{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Physiotherapy &amp; Sports
              </span>{' '}
              Rehabilitation
            </h1>
            <p className="text-lg text-gray-500 mb-5 max-w-lg leading-relaxed">
              Personalised physiotherapy and rehabilitation focused on movement, recovery, and helping you return to everyday activities.
            </p>
            {/* Hero Action Buttons Container */}
            <div className="flex flex-wrap gap-3 mt-4 sm:mt-5 lg:ml-0">

              {/* Primary CTA Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Book an Appointment <ArrowUpRight size={18} />
              </a>

              {/* Translucent Glass Secondary CTA Button */}
              <a
                href="tel:+919108400271"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all duration-300 bg-white/40 backdrop-blur-lg border border-white/60 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.30)] hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_32px_0_rgba(31,38,135,0.20)]"
              >
                <Phone size={18} className="text-primary" />
                <span className="text-black">Contact the Clinic</span>
              </a>

            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Doctor Image Container */}
            <div className="relative overflow-visible flex items-end justify-center w-full max-w-[320px] sm:max-w-[390px] lg:max-w-[450px] transition-all duration-300">

              {/* Stacked Background Typography (SPANDANA / CLINIC) with Gradient Fade & Crisp Shadows */}
              <div className="absolute right-0 sm:right-2 -top-6 lg:-top-10 z-0 flex flex-col items-start leading-[0.82] select-none pointer-events-none whitespace-nowrap antialiased opacity-90">

                {/* Top Line: SPANDANA — solid, dark, high-contrast */}
                <span
                  className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tighter drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  SPANDANA
                </span>

                {/* Bottom Line: CLINIC — gradient fade dark → light */}
                <span
                  className="text-3xl sm:text-4xl lg:text-5xl font-black italic uppercase mt-1 pl-2 tracking-widest bg-gradient-to-b from-[#6C5CE7] via-[#818CF8] to-[#C084FC]/30 bg-clip-text text-transparent drop-shadow-[0_6px_14px_rgba(108,92,231,0.25)]"
                  style={{
                    fontFamily: "'Dosis', sans-serif",
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                  }}
                >
                  CLINIC
                </span>
              </div>

              {/* Doctor image sits over the text with shadow cast onto it */}
              <img
                src="/assests/Dr. Jagadeesh Kadiyam.png"
                alt="Dr. Jagadeesh Kadiyam"
                className="relative z-10 w-full max-h-[440px] sm:max-h-[500px] lg:max-h-[520px] object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.14)] pointer-events-none select-none transform-gpu"
                style={{
                  imageRendering: 'high-quality',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}