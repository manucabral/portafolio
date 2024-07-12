// import { useRef } from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar(): JSX.Element {
    return (
        <nav className="flex justify-center items-center text-wh px-4 py-2">
            <ul className="flex justify-center items-center">
                <NavbarItem>Sobre mí</NavbarItem>
                <NavbarItem>Experiencia</NavbarItem>
                <NavbarItem>Proyectos</NavbarItem>
                <NavbarItem>Tecnologías</NavbarItem>
                <NavbarItem>Contacto</NavbarItem>
            </ul>
        </nav>
    )
}
