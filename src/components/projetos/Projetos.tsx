'use client'

import { useState } from 'react'
import styles from "./Projetos.module.css"
import Cards from '@/components/projetos/cards/Cards'
import ProjetoModal from '@/components/projetos/modal/ProjetoModal'

import { ProjetoProps } from '@/components/projetos/types'

const projetos: ProjetoProps[] = [
    {
        title: "Galinhada in Box",
        description: "Sistema para administração de restaurante",
        logo: '/galinhada.jpeg',
        github: '123'
    }
]

export default function Projetos() {
    const [projetoSelecionado, setProjetoSelecionado] = useState<ProjetoProps | null>(null)

    return(
        <section id="projetos" className={styles.content}>
            <h2>Projetos</h2>

            <div className={styles.cardSection}>
                {projetos.map((projeto, index) => (
                    <Cards
                        key={index}
                        title={projeto.title}
                        logo={projeto.logo}
                        onOpenModal={() => setProjetoSelecionado(projeto)}
                    />
                ))}
            </div>

            {projetoSelecionado && (
                <ProjetoModal
                    projeto={projetoSelecionado}
                    onClose={() => setProjetoSelecionado(null)}
                />
            )}
        </section>
    )
}