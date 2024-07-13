import { NavItemProps } from '../../../global'

export default function NavbarItem({
    sectionRef,
    children,
    index,
}: NavItemProps): JSX.Element {
    const handleClick = () =>
        sectionRef?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    return (
        <li
            className="nav-item cursor-pointer px-1 sm:mx-3 hover:border-b hover:border-current"
            data-index={index}
            onClick={handleClick}
        >
            {children}
        </li>
    )
}
