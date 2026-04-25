import styles from './Sidebar.module.css'
import Image from 'next/image'
import logo from '@/../public/SF.png'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <Image
                src={logo}
                width={200}
                height={200}
                alt="logo"
            />

            <nav className={styles.navBar}>
                <a href="#home">Inicio</a>
                <a href="#sobre">Sobre mim</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
            </nav>
        </aside>
    )
}