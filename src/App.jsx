import { AnimatedNavFramer } from "@/components/ui/navigation-menu"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import SkillsExperience from "./components/SkillsExperience"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 font-sans relative">
      <AnimatedNavFramer />

      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="expertise"><Services /></section>
        <section id="skills"><SkillsExperience /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  )
}
