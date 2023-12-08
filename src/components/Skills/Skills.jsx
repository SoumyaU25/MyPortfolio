

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";



const Skills = () => {
  return (
    <div className={styles.cont} id="skills">
       
    <div className={styles.set}>
    <div className={styles.note}>
        <h2>Tech skills</h2>
        <div className={styles.skill}>
             {skills.map((val)=>(
                <p>{val.title}</p>
             ))}
        </div>
    </div>
    <div className={styles.note}>
        <h2>Tech Tools and Libraries</h2>
        <div className={styles.skill}>

            <p>Git</p>
             <p>Github</p>
             <p>VS Code</p>
             <p>NumPy</p>
             <p>Pandas</p>  
             <p>Matplotlib</p>
             <p>Vercel</p>
             <p>Jupyter</p>
             <p>Intellij IDEA</p>
         
        </div>
    </div>

    </div>
    </div>


  );
};

export default Skills;
