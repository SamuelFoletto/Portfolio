import Image from 'next/image'
import styles from './Cards.module.css'

type CardsProps = {
    title: string
    logo: string
    onOpenModal: () => void
}

export default function Cards({ title, logo, onOpenModal }: CardsProps) {
    return (
        <div className={styles.cardContent}>
            <Image
                src={logo}
                width={200}
                height={200}
                alt={title}
                className={styles.img}
            />

            <h3>{title}</h3>

            <button className={styles.button} onClick={onOpenModal}>
                Ver mais
            </button>
        </div>
    )
}