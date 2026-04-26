import styles from './Sobre.module.css'
import skills from '@/data/skills'
import Image from 'next/image'
import foto from '@/../public/foto.png'

export default function Sobre(){
    return(
        <div className={styles.container} id='sobre'>
            <h2>Sobre mim</h2>
            <div className={styles.container}>
                <div className={styles.sobreContent}>
                    <div className={styles.fotoContent}>
                        <Image
                            src={foto}
                            width={300}
                            height={300}
                            alt='foto'
                            className={styles.foto}
                        />
                    </div>

                    <div className={styles.text}>
                        <p>
                            Atualmente atuo como Analista de Suporte e estou em formação para me tornar um desenvolvedor.
                        </p>
                        <p>
                            Tenho experiencia prática com utilização de APIs, integração entre sistemas e banco de dados.
                        </p>
                        <p>
                            Estou cursando Análise e Desenvolvimento de sistemas na PUCPR, com conclusão prevista em 12/2027.
                        </p>
                        <p>
                            Com foco em desenvolvimento WEB, iniciei meus estudos em PHP utilizando Laravel no back-end e tecnologias como NextJS, React e Vue no front-end.
                        </p>
                    </div>
                </div>


                <hr/>

                <div className={styles.skillContent}>
                    {skills.map((group, index) => (
                        <div key={index} className={styles.skills}>
                            <h3>{group.title}</h3>

                            <div className={styles.iconContent}>
                                {group.items.map((item, i) => {
                                    const Icon = item.icon

                                    return (
                                        <div key={i} className={styles.skillItem}>
                                            <Icon className={styles.icon} />
                                            <span className={styles.name}>{item.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}