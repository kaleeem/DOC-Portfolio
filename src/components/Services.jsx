import { ArrowUpRight, ArrowRight, Activity, Shield, HeartPulse, Dumbbell, Zap } from 'lucide-react'

const services = [
  {
    id: '01',
    title: 'Spine & Back Pain Rehabilitation',
    icon: Activity,
    description: 'Targeted assessment, postural alignment, and core strengthening for lumbar, thoracic, and cervical spine conditions.',
    subLink: 'Explore',
  },
  {
    id: '02',
    title: 'Sports Injury Rehabilitation',
    icon: Zap,
    description: 'Structured recovery protocols for ligament sprains, muscle strains, joint injuries, and safe return-to-sport conditioning.',
    subLink: 'Explore',
    highlighted: true,
  },
  {
    id: '03',
    title: 'Orthopaedic Physiotherapy',
    icon: Shield,
    description: 'Comprehensive physical therapy for joint stiffness, arthritis, bone trauma, and chronic musculoskeletal discomfort.',
    subLink: 'Explore',
  },
  {
    id: '04',
    title: 'Knee & Shoulder Rehabilitation',
    icon: Dumbbell,
    description: 'Specialised movement restoration, rotator cuff conditioning, and knee joint strengthening for restored function.',
    subLink: 'Explore',
  },
  {
    id: '05',
    title: 'Mobility & Functional Rehabilitation',
    icon: HeartPulse,
    description: 'Individualised balance training, flexibility enhancement, and gait re-education to restore everyday physical independence.',
    subLink: 'Explore',
  },
  {
    id: '06',
    title: 'Post-operative Rehabilitation',
    icon: Activity,
    description: 'Guided, phased rehabilitation following surgical interventions to safely restore mobility, strength, and confidence.',
    subLink: 'Explore',
  },
]

export default function Services() {
  return (
    <section id="expertise" className="py-16 sm:py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="sticky top-28">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Expertise &amp; Services
              </h2>
              <p className="text-gray-500 mb-8 max-w-md">
                Providing dedicated physiotherapy care and sports rehabilitation tailored to restore mobility, relieve pain, and enhance physical function.
              </p>
              {/* Musculoskeletal Anatomy Illustration */}
              <div className="flex justify-center items-center my-6 lg:justify-start">
                <img
                  src="/assests/srvices.png"
                  alt="Musculoskeletal Anatomy"
                  className="object-contain transition-transform duration-300 hover:scale-105"
                  style={{
                    width: 'calc(var(--spacing) * 50)',
                    height: 'calc(var(--spacing) * 50)',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className={`group flex items-center gap-5 p-5 sm:p-6 rounded-2xl transition-all cursor-pointer ${
                  service.highlighted
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-white hover:bg-primary/5 border border-gray-100'
                }`}
              >
                <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                  service.highlighted ? 'bg-white/20' : 'bg-primary/10 group-hover:bg-primary/20'
                }`}>
                  <service.icon size={24} className={service.highlighted ? 'text-white' : 'text-primary'} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`text-xs font-semibold ${service.highlighted ? 'text-white/70' : 'text-gray-400'}`}>
                      {service.id}/
                    </span>
                    <h3 className={`font-bold text-lg ${service.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className={`text-sm ${service.highlighted ? 'text-white/80' : 'text-gray-400'}`}>
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`text-sm font-semibold hidden sm:inline ${service.highlighted ? 'text-white/80' : 'text-gray-400'}`}>
                    {service.subLink}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    service.highlighted
                      ? 'bg-white/20 text-white'
                      : 'border-2 border-gray-200 text-gray-400 group-hover:border-primary group-hover:text-primary'
                  }`}>
                    {service.highlighted ? <ArrowRight size={16} /> : <ArrowUpRight size={16} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
