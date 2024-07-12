import { useRef } from 'react'

const useSectionsRef = () => {
    const aboutRef = useRef<HTMLDivElement>(null)
    const experienceRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)
    return { aboutRef, experienceRef, projectsRef, contactRef }
}

export default useSectionsRef
