import styles from './Contato.module.css'
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";



export default function Contato() {
    return(
        <div className={styles.container} id="contato">
            <h2>Entre em contato comigo!</h2>

            <div className={styles.contatos}>
                <div className={styles.itemContato}>
                    <a href="mailto:sfoletto@gmail.com" className={styles.icon}>
                        <MdOutlineEmail/>
                    </a>
                    <p>Email</p>
                    <span>sfoletto@gmail.com</span>
                </div>
                <div className={styles.itemContato}>
                    <a href="https://wa.me/45999049173" target="_blank" className={styles.icon}>
                        <MdOutlineLocalPhone/>
                    </a>
                    <p>Telefone</p>
                    <span>(45) 99904-9173</span>
                </div>
                <div className={styles.itemContato}>
                    <a href="https://www.linkedin.com/in/samuelfoletto/" target="_blank" className={styles.icon}>
                        <CiLinkedin/>
                    </a>
                    <p>LinkedIn</p>
                    <span>@samuelfoletto</span>
                </div>
                <div className={styles.itemContato}>
                    <a href="https://github.com/SamuelFoletto" target="_blank" className={styles.icon}>
                        <FaGithub/>
                    </a>
                    <p>GitHub</p>
                    <span>@SamuelFoletto</span>
                </div>

            </div>
        </div>
    )
}