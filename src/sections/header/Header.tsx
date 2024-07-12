import { HeaderProps } from '../../global'
import Navbar from './components/Navbar'

export default function Header({ sectionRefs }: HeaderProps): JSX.Element {
    return (
        <header className="flex justify-center items-center">
            <Navbar sectionRefs={sectionRefs} />
        </header>
    )
}
