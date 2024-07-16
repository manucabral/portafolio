import { HeaderProps } from '../../../global'
import NavbarItem from './NavbarItem'

export default function Navbar({ sectionRefs }: HeaderProps): JSX.Element {
    return (
        <nav className="flex justify-center items-center text-wh sm:px-4 py-2 w-full">
            <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-0">
                {Object.keys(sectionRefs).map((section, index) => (
                    <NavbarItem
                        key={index}
                        sectionRef={sectionRefs[section].ref}
                        index={index}
                    >
                        {sectionRefs[section].title}
                    </NavbarItem>
                ))}
            </ul>
        </nav>
    )
}
