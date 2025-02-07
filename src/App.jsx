import Blog from "./components/Blog"
import { Brands } from "./components/Brands"
import Faq from "./components/Faq"
import Features from "./components/Features"
import Footer from "./components/Footer"
import { Hero } from "./components/Hero"
import Navbar from "./components/Navvbar"
import Testimonial from "./components/Testimonial"
import Trial from "./components/Trial"

function App() {

  return (
    <div className="overflow-x-hidden">
    <Navbar/>
    <Hero/>
    <Brands/>
    <Features/>
    <Testimonial/>
    <Faq/>
    <Blog/>
    <Trial/>
    <Footer/>
    </div>
  )
}


export default App
