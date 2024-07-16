import { useRef } from 'react'
import { RefValuesType } from '../global'

const useSectionsRef = () => {
    const aboutRef = useRef<HTMLDivElement>(null)
    const experienceRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)
    const tecnologiesRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)

    const sectionsRefValues = {
        about: { title: 'Sobre mí', ref: aboutRef },
        experience: { title: 'Experiencia', ref: experienceRef },
        projects: { title: 'Proyectos', ref: projectsRef },
        tecnologies: { title: 'Tecnologías', ref: tecnologiesRef },
        contact: { title: 'Contacto', ref: contactRef },
    } as RefValuesType

    return { sectionsRefValues }
}

export default useSectionsRef
