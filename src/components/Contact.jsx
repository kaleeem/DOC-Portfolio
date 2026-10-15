import { useState } from 'react'
import { ArrowUpRight, Phone, MapPin } from 'lucide-react'

const USER_TYPE_OPTIONS = [
  { id: 'patient', label: "I'm a Patient" },
  { id: 'general', label: "General Inquiry" },
]

export default function Contact() {
  const [selectedOption, setSelectedOption] = useState('patient')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-16 sm:py-24 bg-bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-extrabold text-gray-900 text-center mb-2 flex items-center justify-center gap-2"
          style={{
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            lineHeight: 1.3,
            whiteSpace: 'nowrap',
          }}
        >
          <span className="whitespace-nowrap">Get in touch</span>
          <span
            className="bg-[#FF5338] text-white px-3.5 py-1 rounded-xl shadow-sm whitespace-nowrap"
            style={{ display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle' }}
          >
            with us
          </span>
        </h2>
        
        <div className="text-center mb-8">
          <p className="text-lg font-bold text-gray-900 mb-1.5">
            Spandana Physiotherapy &amp; Sports Clinic
          </p>
          <div className="inline-flex items-start justify-center gap-2 max-w-xl mx-auto text-gray-600 text-sm leading-relaxed mb-4">
            <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
            <address className="not-italic text-center">
              Ground Floor, Old Dhundi Pharmacy Building, No. 1614, NS Road, near Vatsalya Hospital, NR Mohalla, Lakshmipuram, Mysuru, Karnataka 570004, India.
            </address>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <a
              href="tel:+919108400271"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-primary bg-primary/10 hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <Phone size={15} /> +91 91084 00271
            </a>
            <a
              href="https://www.google.com/maps/place/Spandana+physiotherapy+and+sports+clinic/@12.2964328,76.6479253,17z/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-gray-700 bg-white border border-gray-200 hover:border-primary hover:text-primary hover:shadow-sm transition-all"
            >
              <MapPin size={15} className="text-[#FF5338]" /> View on Google Maps <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <div>
            <select className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none">
              <option value="">What is your concern or condition?</option>
              <option value="spine">Spine &amp; Back Pain Rehabilitation</option>
              <option value="sports">Sports Injury Rehabilitation</option>
              <option value="orthopaedic">Orthopaedic Physiotherapy</option>
              <option value="knee-shoulder">Knee &amp; Shoulder Rehabilitation</option>
              <option value="mobility">Mobility &amp; Functional Recovery</option>
              <option value="post-op">Post-operative Rehabilitation</option>
              <option value="general">General Physiotherapy Consultation</option>
            </select>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <input type="text" placeholder="Full name" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
            <input type="email" placeholder="Email or Phone" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
          </div>

          {/* Responsive Single-Line Radio Options */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
            {USER_TYPE_OPTIONS.map((option) => (
              <label
                key={option.id}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-xl border cursor-pointer transition-all duration-200 bg-white select-none min-w-0 ${
                  selectedOption === option.id
                    ? 'border-slate-900 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="userType"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
                  className="sr-only"
                />
                {/* Radio circle indicator */}
                <span
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-all ${
                    selectedOption === option.id
                      ? 'border-slate-900 bg-slate-900'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {selectedOption === option.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </span>
                {/* Label text */}
                <span className="text-[11px] xs:text-xs sm:text-sm font-medium text-slate-800 whitespace-nowrap truncate">
                  {option.label}
                </span>
              </label>
            ))}
          </div>

          <div>
            <textarea rows={5} placeholder="Describe your recovery goals or symptoms here..." className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" />
          </div>

          {submitted && (
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl text-center text-xs text-primary font-medium">
              Preview Mode: Online form submission is not connected yet. Please call{' '}
              <a href="tel:+919108400271" className="underline font-bold">+91 91084 00271</a> directly to book your appointment.
            </div>
          )}

          <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 inline-flex items-center justify-center gap-2">
            Book an Appointment <ArrowUpRight size={18} />
          </button>

          <p className="text-xs text-center text-gray-400 mt-2">
            Note: Online booking is in preview mode. For appointments, call{' '}
            <a href="tel:+919108400271" className="text-primary underline font-medium">+91 91084 00271</a>.
          </p>
        </form>
      </div>
    </section>
  )
}
