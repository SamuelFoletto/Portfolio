import Inicio from '@/components/inicio/Inicio'
import Projetos from '@/components/projetos/Projetos'
import Sobre from '@/components/sobreMim/Sobre'
import Contato from '@/components/contato/Contato'

export default function Home() {
    return (
        <>

            <Inicio/>
            <Sobre />
            <Projetos/>
            <Contato />
        </>
    )
}