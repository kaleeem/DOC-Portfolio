const placeholderTestimonials = [
  {
    title: 'Verified Patient Feedback',
    tag: 'Spandana Clinic Care',
    avatar: 'SP',
    color: 'bg-indigo-400',
    text: 'Patient testimonials will be added after clinic-approved reviews are provided.',
  },
  {
    title: 'Verified Patient Feedback',
    tag: 'Sports Rehabilitation',
    avatar: 'SP',
    color: 'bg-purple-400',
    text: 'Patient testimonials will be added after clinic-approved reviews are provided.',
  },
  {
    title: 'Verified Patient Feedback',
    tag: 'Physiotherapy Care',
    avatar: 'SP',
    color: 'bg-blue-400',
    text: 'Patient testimonials will be added after clinic-approved reviews are provided.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4 max-w-2xl mx-auto">
          Patient Testimonials
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-lg mx-auto">
          Verified patient experiences and recovery stories will be published here following clinic review.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderTestimonials.map((t, i) => (
            <div key={i} className="bg-bg-light rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.title}</h4>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <span>{t.tag}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                  Preview Placeholder
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-10">
          {[...Array(3)].map((_, i) => (
            <span key={i} className={`h-2.5 rounded-full transition-all ${i === 0 ? 'bg-primary w-8' : 'bg-gray-300 w-2.5'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
