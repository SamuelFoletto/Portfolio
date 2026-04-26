import styles from './Cards.module.css'
import Image, { StaticImageData } from 'next/image'


type CardsProps = {
    title: string
    logo: StaticImageData
    onOpenModal: () => void
}

export default function Cards({ title, logo, onOpenModal }: CardsProps) {
    return (
        <div className={styles.cardContent}>
            <Image
                src={logo}
                width={260}
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