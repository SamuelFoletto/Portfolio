import { StaticImageData } from "next/image"


export type ProjetoProps = {
    title: string
    description: string
    logo: StaticImageData
    github: string
    demo: string
    techs: string[]
}