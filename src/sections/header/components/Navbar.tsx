import { useEffect, useRef, useState } from 'react'
import { HeaderProps } from '../../../global'
import NavbarItem from './NavbarItem'

export default function Navbar({ sectionRefs }: HeaderProps): JSX.Element {
    const sections = Object.keys(sectionRefs)
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (!containerRef.current) return
            if (!containerRef.current.contains(event.target as Node))
                setIsOpen(false)
        }
        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) setIsOpen(false)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <nav
            className="w-full"
            role="navigation"
            aria-label="Navegación principal"
        >
            <div
                className="max-w-[1100px] mx-auto w-full px-4 sm:px-6"
                ref={containerRef}
            >
                <div className="flex items-center justify-between py-2">
                    <ul className="hidden sm:flex flex-wrap justify-center items-center gap-6">
                        {sections.map((section, index) => (
                            <NavbarItem
                                key={index}
                                sectionRef={sectionRefs[section].ref}
                                index={index}
                            >
                                {sectionRefs[section].title}
                            </NavbarItem>
                        ))}
                    </ul>

                    <div className="sm:hidden flex items-center">
                        <button
                            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setIsOpen((v) => !v)}
                            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-te-400"
                        >
                            {isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    aria-hidden
                                >
                                    <path
                                        d="M6 18L18 6M6 6l12 12"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    aria-hidden
                                >
                                    <path
                                        d="M3 12h18M3 6h18M3 18h18"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    id="mobile-menu"
                    className={`sm:hidden mt-2 ${isOpen ? 'block' : 'hidden'}`}
                >
                    <ul className="flex flex-col gap-2 px-2 pb-4">
                        {sections.map((section, index) => (
                            <NavbarItem
                                key={index}
                                sectionRef={sectionRefs[section].ref}
                                index={index}
                                className="w-full"
                            >
                                {sectionRefs[section].title}
                            </NavbarItem>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
