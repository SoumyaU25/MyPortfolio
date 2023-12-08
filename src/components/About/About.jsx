

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img
        src={getImageUrl("hero/SU3.png")}
        alt="Me sitting with a laptop"
        className={styles.aboutImage}
      />
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
         
          <div className={styles.aboutItemText}>
            <h3>About Me..</h3>
            <div className="description">
              {/* I'm a Full-Stack developer with experience in building responsive
              and optimized sites and also  
              I have experience developing fast and optimised back-end systems
              and APIs. */}

              Hello world ! I'm Soumya Upadhyay , a Computer Science graduate from Delhi University (2020-2023) with a stellar CGPA 8.77🎓
               My programming arsenal includes languages like 
              Python, Java, and C++ along with a good understanding of Data Structure Algorithms. Most importantly I'm a 
              Problem Solver.
              <br />
              <br />
              <span><i style={{color:"aqua",fontSize:"15px"}} className="bi bi-star-fill"></i> Highlights</span>
              <ul>
                <li style={{listStyle:"none"}}>Proven Expertise in creating dynamic web applications. </li>
                <li style={{listStyle:"none"}}>Enthusiasts about exploring the frontiers of AI and ML.</li>
              </ul>
              

            </div>
          </div>
        </li>
       
      </ul>
    </div>
  </section>

  )
}

export default About
