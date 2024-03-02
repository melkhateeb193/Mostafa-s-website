import "./app.scss"
import Contact from "./components/contact/Contact"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Parallax from "./components/parallax/parallax"
import Portofiolio from "./components/portofolio/Portofiolio"
import Services from "./components/services/Services"
function App() {

  return (
    <div>
      <section id="Homepage">
        <Navbar/>
        <Hero/>
        </section>
      <section id="Services"> <Parallax type="Services"/> </section>
      <section ><Services/></section>
      <section id="Portfolio"><Parallax type="Portfolio"/></section>
      <Portofiolio/>
      <section id="Contact">
        <Contact/>
        </section>
    </div>
  )
}

export default App
