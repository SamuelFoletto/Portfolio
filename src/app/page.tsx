import Inicio from '@/components/inicio/Inicio'
import Projetos from '@/components/projetos/Projetos'


export default function Home() {
    return (
        <>

            <Inicio/>


            <Projetos/>

            <section id="sobre" style={{ height: '100vh' }}>
                <h1>Sobre</h1>
            </section>

            <section id="contato" style={{ height: '100vh' }}>
                <h1>Contato</h1>
            </section>
        </>
    )
}