import { ProjetoProps } from '@/components/projetos/types'

export const projetos: ProjetoProps[] = [
    {
        title: "Galinhada in Box",
        description: "Desenvolvido para ser utilizado internamente pelo restaurante.\nSistema conta com CRUD para clientes, produtos e pedidos.\nFoco principal é emissão e acompanhamento de pedidos.",
        logo: '/portfolio/galinhada.jpeg',
        github: 'https://github.com/SamuelFoletto/app_galinhada',
        demo: '#',
        techs: [ 'php', 'laravel', 'mysql']
    },
    {
        title: "API - CRUD de clientes",
        description: "API CRUD com autenticação para apresentar conhecimentos",
        logo: '/portfolio/api.png',
        github: "https://github.com/SamuelFoletto/api_sanctum",
        demo: "#",
        techs: ['laravel']
    },
    {
        title: "Moscow Labs",
        description: "Ecommerce para comercio de camisetas personalizadas \n Site ainda está em construção ",
        logo: '/portfolio/moscow.png',
        github: "https://github.com/SamuelFoletto/MoscowLabs",
        demo: "#",
        techs: ['php', 'laravel', 'mysql']
    },


]