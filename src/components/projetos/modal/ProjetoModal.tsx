import styles from './ProjetoModal.module.css'
import { ProjetoProps } from '@/components/projetos/types'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { SiMysql, SiNextdotjs, SiTypescript } from "react-icons/si";

const techIcons: Record<string, React.ReactNode> = {
    laravel: <FaLaravel />,
    php: <FaPhp />,
    mysql: <SiMysql />,
    react: <FaReact />,
    next: <SiNextdotjs />,
    typescript: <SiTypescript />
}

type ProjetoModalProps = {
    projeto: ProjetoProps
    onClose: () => void
}



export default function ProjetoModal({ projeto, onClose }: ProjetoModalProps) {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.fecharBtn} onClick={onClose}>
                    <IoIosCloseCircleOutline
                        size={30}
                    />
                </button>

                <h2>{projeto.title}</h2>
                <hr/>
                <p className={styles.description}>{projeto.description}</p>

                <div className={styles.btnContent}>
                    <a
                        href={projeto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkBtn}
                    >
                        Ver GitHub
                    </a>

                    <a
                        href={projeto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkBtn}
                    >
                        Acessar projeto
                    </a>
                </div>

                <div className={styles.techSection}>
                    {projeto.techs.map((tech, index) => (
                        <span key={index} className={styles.techItem}>
                            {techIcons[tech]}
                            <p>{tech}</p>
                        </span>
                    ))}
                </div>



            </div>
        </div>
    )
}