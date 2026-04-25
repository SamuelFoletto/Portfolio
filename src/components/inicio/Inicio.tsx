import styles from './Inicio.module.css'
import { FaGithub, FaLinkedin, FaCloudDownloadAlt } from "react-icons/fa";




export default function Inicio()
{
    return (
        <>
            <section id="home" className={styles.content}>
                <div className={styles.textContent}>
                    <h3>PORTFOLIO</h3>
                    <h1 className={styles.name}>SAMUEL FOLETTO</h1>
                    <p className={styles.job}>Desenvolvedor WEB / FullStack</p>
                </div>
                <div className={styles.btnContent}>
                    <a href="https://github.com/SamuelFoletto" className={styles.btn} target="_blank" rel="noopener noreferrer">
                            <FaGithub className={styles.icon}/>

                            GitHub
                    </a>

                    <a href="https://www.linkedin.com/in/samuelfoletto/" target="_blank" className={styles.btn}>
                            <FaLinkedin className={styles.icon}/>
                            LinkedIn
                    </a>

                    <a href="Curriculo.pdf" download className={styles.btn}   target="_blank"
                       rel="noopener noreferrer">

                            <FaCloudDownloadAlt className={styles.icon}/>
                            Download CV
                    </a>

                </div>
            </section>
        </>
    )
}