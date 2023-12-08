
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container} id='contact'>
        <h1 className={styles.title}>Get In Touch</h1>

        <div className={styles.contact}>
            <p className={styles.desc}>I'm excited to hear from You! Whether you have a project in mind, want to collaborate, or just want to say hi, feel free to reach out to me. Looking forward to connecting with you!💙</p>
            <a href="mailto:soumyau2507@gmail.com" className={styles.contactBtn}>
             Mail Me
            </a>
            <div className={styles.social}>
            <a href="https://github.com/SoumyaU25" className={styles.social}><i className="bi bi-github"></i> </a>
            <a href="https://www.linkedin.com/in/soumya-upadhyay-18662222b/" className={styles.social}><i className="bi bi-linkedin"></i></a>
            <a href="/" className={styles.social}><i className="bi bi-box-arrow-up-right"></i></a>
            <a href="https://www.instagram.com/soumyau25/" className={styles.social}><i className="bi bi-instagram"></i></a>
            <a href="mailto:soumyau2507@gmail.com" className={styles.social}> <i className="bi bi-envelope-at-fill"></i></a>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
