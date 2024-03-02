import "./hero.scss"
import {motion} from "framer-motion"

const textvariants = {
    initial:{
    x: -500,
    opacity: 0,
    },
    animate:{
     x: 0,
    opacity: 1,
    transition: {
    duration: 1,
    staggerChildren: 0.1,
    }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    },

}
const Slidervariants = {
    initial:{
    x: 0,
    },
    animate:{
     x:"-220%",
    transition: {
    repeat:Infinity,
    repeatType:"mirror",
    duration: 20,
    }
    }
}


function Hero() {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer" variants = {textvariants} initial="initial" animate="animate">
            <motion.h2 variants = {textvariants}>Mostafa Elkhateeb</motion.h2>
            <motion.h1 variants = {textvariants}>Web developer and Web Designer</motion.h1>
            <motion.div variants = {textvariants} className="buttons">
                <motion.button variants = {textvariants}>See the Latest Work</motion.button>
                <motion.button variants = {textvariants}>Contact Me</motion.button>
        </motion.div>
        <motion.img variants = {textvariants} animate="scrollButton" src="/scroll.png" alt="scroll" />
        </motion.div>
        <motion.div className="slidingTextContainer" variants={Slidervariants} initial="initial" animate="animate">
            Writer Content creater influancer
        </motion.div>
        </div>
        <div className="imageContainer">
        <img src="/hero.png" alt="hero" />

        </div>
    </div>
  )
}

export default Hero