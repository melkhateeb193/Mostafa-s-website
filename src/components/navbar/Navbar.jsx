import { motion } from "framer-motion"
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
function Navbar() {
  return (
    <div className="navbar">
      <Sidebar/>
     <div className="wrapper">
        <motion.span 
        initial={{opacity:0 ,scale:0.5 }}
        animate={{opacity:1 ,scale:1 }}
        transition={{duration:0.5}}
        > Mostafa&apos;s Site</motion.span>
        <div className="social">
        <a href="https://github.com/melkhateeb193" target="_blank"><img src="/githup.png" alt="githup" /></a>
        <a href="https://www.frontendmentor.io/profile/melkhateeb193" target="_blank"><img src="/frontendMentor.png" alt="frontendMentor" /></a>
        <a href="https://www.linkedin.com/in/mostafa-elkhateeb-b454351b6/" target="_blank"><img src="/linkin.png" alt="linkin" /></a>
        <a href="https://www.instagram.com/mostafa_magdy899/" target="_blank"><img src="/instagram.png" alt="isntagram" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
