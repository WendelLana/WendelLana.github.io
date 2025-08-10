import "./services.scss";
import { useRef } from "react";
import { motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {

  const ref = useRef();

  const  isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>Focused on improving your software 
          <br/>and developing new features</p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <a href="https://github.com/WendelLana?tab=repositories" target="_blank" rel="noopener noreferrer">SEE MORE</a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
          <h2>Apache AGE</h2>
          <p>
          Graph database optimized for fast analysis and real-time data processing. It is provided as an extension to PostgreSQL. The basic principle of the project is to create a single storage that handles both the relational and graph data model so that the users can use the standard ANSI SQL along with openCypher.  
          </p>
          <a href="https://github.com/apache/age" target="_blank" rel="noopener noreferrer">Go</a>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
          <h2>Finance Control</h2>
          <p>
          Project for Personal Finance Control with recording of expenses (outflow) and income (inflow), as well as the registration of categories for quick identification of each record. It also includes graphs for dynamic visualization of the system's records.
          </p>
          <a href="https://github.com/WendelLana/Finapp" target="_blank" rel="noopener noreferrer">Go</a>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
          <h2>C- Compiler</h2>
          <p>
          C- compiler for educational purpose that translates code written in the C-minus programming language into machine readable instructions. It performs lexical analysis, parsing, semantic analysis and code generation to produce executable machine code.   
          </p>
          <a href="https://github.com/WendelLana/cminus-compiler" target="_blank" rel="noopener noreferrer">Go</a>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
          <h2>Services</h2>
          <p>
          Offering professional software engineering services encompassing proficient development in various languages and frameworks. With expertise in both software and web development, I deliver tailored solutions, robust code architecture, and seamless user experiences to meet diverse client needs efficiently.
          </p>
          <a href="#Contact">Go</a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;