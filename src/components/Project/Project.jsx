import styles from "./Project.module.css";


import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
// import { ProjectCard } from "./ProjectCard";

 const Project = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
      
        {projects.map((project,id)=>{
           return( <div className={styles.container2} key={id}> 
            <p className={styles.title2}>{project.title}</p>
           <img
             src={getImageUrl(project.imageSrc)}
             alt={`Image of ${project.title}`}
             className={styles.image}
           />
           
           <p className={styles.description}> {project.description}</p>
           <p className={styles.skills}>
             {project.skills.map((skill, id) => {
               return (
                 <p key={id} className={styles.skill}>
                   {skill}
                 </p>
               );
             })}
           </p>
           <div className={styles.links}>
             <a href={project.demo} className={styles.link}>
             <i className="bi bi-box-arrow-up-right"></i>
             
             </a>
             <a href={project.source} className={styles.link}>
             <i className="bi bi-github"></i>
             </a>
           </div>
           </div> 
           )

        })
        }
     
    
      </div>
    </section>
  );
};
export default Project
