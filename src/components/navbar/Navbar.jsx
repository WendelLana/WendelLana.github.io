import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span 
        initial={{ opacity:0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration:0.5 }}>Wendel Lana</motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/WendelLana"><img src="/linkedin.png" alt="LinkedIn"/></a>
          <a href="https://www.instagram.com/wendel.lana"><img src="/instagram.png" alt="Instagram"/></a>
          <a href="https://dev.to/wendellana"><img src="/devto.png" alt="DevTo"/></a>
          <a href="https://github.com/WendelLana"><img src="/github.png" alt="GitHub"/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar