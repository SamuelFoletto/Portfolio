import styles from './ProjetoModal.module.css'
import { ProjetoProps } from '@/components/projetos/types'

type ProjetoModalProps = {
    projeto: ProjetoProps
    onClose: () => void
}

export default function ProjetoModal({ projeto, onClose }: ProjetoModalProps) {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.fecharBtn} onClick={onClose}>
                    X
                </button>

                <h2>{projeto.title}</h2>
                <p>{projeto.description}</p>

                <a
                    href={projeto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    Ver GitHub
                </a>
            </div>
        </div>
    )
}