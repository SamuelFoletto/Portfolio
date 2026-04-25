import { ProjetoProps } from '@/components/projetos/types'

export const projetos: ProjetoProps[] = [
    {
        title: "Galinhada in Box",
        description: "Desenvolvido para ser utilizado internamente pelo restaurante.\nSistema conta com CRUD para clientes, produtos e pedidos.\nFoco principal é emissão e acompanhamento de pedidos.",        logo: '/galinhada.jpeg',
        github: 'https://github.com/SamuelFoletto/app_galinhada',
        demo: '#',
        techs: [ 'php', 'laravel', 'mysql']
    }
]