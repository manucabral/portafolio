import { HeaderProps } from '../../global'
import Navbar from './components/Navbar'

export default function Header({ sectionRefs }: HeaderProps): JSX.Element {
    return (
        <header className="sticky top-0 z-50 flex justify-center items-center bg-se/70 backdrop-blur-sm shadow-sm">
            <Navbar sectionRefs={sectionRefs} />
        </header>
    )
}
