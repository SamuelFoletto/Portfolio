import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaPhp, FaLaravel, FaPython, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMysql, SiMariadb, SiPostgresql, SiMongodb } from "react-icons/si";
import { TbBrandJavascript, TbApi } from "react-icons/tb";
import { IconType } from "react-icons"

type Skill = {
    name: string
    icon: IconType
}

type SkillGroup = {
    title: string
    items: Skill[]
}

const skills: SkillGroup[] = [
    {
        title: "Front-End",
        items: [
            { name: "HTML", icon: FaHtml5 },
            { name: "CSS", icon: FaCss3Alt },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: FaReact },
            { name: "Vue", icon: FaVuejs },
        ]
    },
    {
        title: "Back-End",
        items: [
            { name: "PHP", icon: FaPhp },
            { name: "Laravel", icon: FaLaravel },
            { name: "TypeScript", icon: SiTypescript },
            { name: "JavaScript", icon: TbBrandJavascript },
            { name: "Python", icon: FaPython },
        ]
    },
    {
        title: "Banco de Dados",
        items: [
            { name: "MySQL", icon: SiMysql },
            { name: "MariaDB", icon: SiMariadb },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
        ]
    },
    {
        title: "Infra",
        items: [
            { name: "APIs", icon: TbApi },
            { name: "Git", icon: FaGitAlt },
            { name: "Linux", icon: FaLinux },
        ]
    }
]

export default skills