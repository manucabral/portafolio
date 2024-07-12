import { HeaderProps } from '../../../global'
import NavbarItem from './NavbarItem'

export default function Navbar({ sectionRefs }: HeaderProps): JSX.Element {
    return (
        <nav className="flex justify-center items-center text-wh px-4 py-2">
            <ul className="flex justify-center items-center">
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
